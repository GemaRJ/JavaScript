import { preguntasTrivial } from "./preguntas.js";

// ==========================================
// 1. VARIABLES DE ESTADO Y CONFIGURACIÓN
// ==========================================
let listaJugadores = [];
let turnoActual = 0;
let preguntasUsadasIds = [];
let preguntasPartida = [];
let indicePregunta = 0;
let puntuacion = 0;
let tiempoRestante = 30;
let intervaloTiempo;

// Referencias al DOM
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const selectCategoria = document.getElementById("select-category");
const selectDificultad = document.getElementById("select-difficulty");
const uiCategoria = document.getElementById("category-badge");
const uiTiempo = document.getElementById("timer");
const uiPuntuacion = document.getElementById("score");
const uiBarraProgreso = document.getElementById("progress-bar");
const uiPregunta = document.getElementById("question-text");
const uiRespuestas = document.getElementById("answers-container");
const uiNumActual = document.getElementById("current-question-num");
const uiNumTotal = document.getElementById("total-questions-num");

// ==========================================
// 2. CONEXIÓN LIMPIA CON EL HTML (Event Listeners)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Escuchar el botón de Comenzar
  const btnComenzar = document.getElementById("btn-comenzar");
  if (btnComenzar) {
    btnComenzar.addEventListener("click", prepararPartida);
  }

  // Escuchar el cambio en el número de jugadores
  const selectNumPlayers = document.getElementById("num-players");
  if (selectNumPlayers) {
    selectNumPlayers.addEventListener("change", generarInputsNombres);
  }
});

// ==========================================
// 3. FUNCIONES DE CONFIGURACIÓN
// ==========================================
function generarInputsNombres() {
  const num = document.getElementById("num-players").value;
  const container = document.getElementById("container-nombres");
  container.innerHTML = "";
  for (let i = 1; i <= num; i++) {
    container.innerHTML += `<input type="text" class="form-control mb-2 player-input" placeholder="Nombre Jugador ${i}" required>`;
  }
}

function prepararPartida() {
  if (!preguntasTrivial || !preguntasTrivial.results) {
    console.error("Error: No se han podido cargar las preguntas.");
    return;
  }

  const inputs = document.querySelectorAll(".player-input");
  listaJugadores = [];
  for (let input of inputs) {
    if (!input.value.trim()) {
      Swal.fire(
        "Faltan datos",
        "Por favor, introduce el nombre de todos los jugadores",
        "warning",
      );
      return;
    }
    listaJugadores.push({ nombre: input.value.trim(), puntos: 0 });
  }

  const categoriaElegida = selectCategoria.value;
  const dificultadElegida = selectDificultad.value;

  preguntasUsadasIds = [];
  turnoActual = 0;
  startScreen.classList.add("d-none");
  gameScreen.classList.remove("d-none");

  iniciarTurnoJugador(
    categoriaElegida,
    dificultadElegida,
    preguntasTrivial.results,
  );
}

// ==========================================
// 4. LÓGICA DEL TORNEO
// ==========================================
function iniciarTurnoJugador(categoria, dificultad, bancoPreguntas) {
  const nombreJugador = listaJugadores[turnoActual].nombre;
  mostrarAlerta(
    `Turno de ${nombreJugador}`,
    "Prepárate para tus 5 preguntas.",
    "info",
    () => comenzarRonda(categoria, dificultad, bancoPreguntas),
  );
}

function comenzarRonda(categoria, dificultad, bancoPreguntas) {
  puntuacion = 0;
  indicePregunta = 0;
  uiPuntuacion.innerText = "0";

  const CANTIDAD_NECESARIA = 5;
  let seleccionFinal = [];

  // Filtro principal
  let pool = bancoPreguntas.filter((p) => {
    const catMatch = categoria === "all" || p.category === categoria;
    const difMatch = dificultad === "all" || p.difficulty === dificultad;
    return catMatch && difMatch && !preguntasUsadasIds.includes(p.id);
  });

  pool.sort(() => Math.random() - 0.5);
  seleccionFinal = pool.slice(0, CANTIDAD_NECESARIA);

  // Relleno si faltan preguntas de esa dificultad
  if (seleccionFinal.length < CANTIDAD_NECESARIA) {
    const faltan = CANTIDAD_NECESARIA - seleccionFinal.length;
    let poolRespaldo = bancoPreguntas.filter((p) => {
      const catMatch = categoria === "all" || p.category === categoria;
      const yaElegida = seleccionFinal.find((s) => s.id === p.id);
      return catMatch && !yaElegida && !preguntasUsadasIds.includes(p.id);
    });
    poolRespaldo.sort(() => Math.random() - 0.5);
    seleccionFinal = seleccionFinal.concat(poolRespaldo.slice(0, faltan));
  }

  preguntasPartida = seleccionFinal;
  preguntasPartida.forEach((p) => preguntasUsadasIds.push(p.id));
  uiNumTotal.innerText = preguntasPartida.length;

  cargarSiguientePregunta();
}

// ==========================================
// 5. MOTOR DEL JUEGO
// ==========================================
function cargarSiguientePregunta() {
  if (indicePregunta >= preguntasPartida.length) {
    finDeTurno();
    return;
  }

  const data = preguntasPartida[indicePregunta];
  uiPregunta.innerHTML = data.question;
  uiCategoria.innerText = data.category;
  uiNumActual.innerText = indicePregunta + 1;

  // Colores de los badges según categoría
  let badgeClass = "badge ";
  if (data.category.includes("SERVIDOR")) badgeClass += "bg-primary";
  else if (data.category === "Interfaces") badgeClass += "bg-info text-dark";
  else if (data.category === "Sostenibilidad") badgeClass += "bg-success";
  else if (data.category === "Python") badgeClass += "bg-warning text-dark";
  else badgeClass += "bg-secondary";
  uiCategoria.className = badgeClass;

  // Barra de progreso
  const progreso = (indicePregunta / preguntasPartida.length) * 100;
  uiBarraProgreso.style.width = `${progreso}%`;

  // Renderizar respuestas
  uiRespuestas.innerHTML = "";
  let opciones = [...data.incorrect_answers, data.correct_answer];
  opciones.sort(() => Math.random() - 0.5);

  opciones.forEach((texto) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-answer w-100 mb-2";
    btn.innerText = texto;
    btn.onclick = () => verificarRespuesta(texto, data.correct_answer, btn);
    uiRespuestas.appendChild(btn);
  });

  iniciarCronometro();
}

function verificarRespuesta(seleccion, correcta, btn) {
  clearInterval(intervaloTiempo);
  const botones = uiRespuestas.querySelectorAll("button");
  botones.forEach((b) => (b.disabled = true));

  if (seleccion === correcta) {
    btn.classList.add("btn-correct");
    let bonus = tiempoRestante > 20 ? 5 : 0;
    puntuacion += 10 + bonus;
    uiPuntuacion.innerText = puntuacion;
  } else {
    btn.classList.add("btn-wrong");
    botones.forEach((b) => {
      if (b.innerText === correcta) b.classList.add("btn-correct");
    });
  }

  setTimeout(() => {
    indicePregunta++;
    cargarSiguientePregunta();
  }, 2000);
}

function iniciarCronometro() {
  clearInterval(intervaloTiempo);
  tiempoRestante = 30;
  uiTiempo.innerText = tiempoRestante;
  uiTiempo.classList.remove("text-danger");

  intervaloTiempo = setInterval(() => {
    tiempoRestante--;
    uiTiempo.innerText = tiempoRestante;
    if (tiempoRestante <= 10) uiTiempo.classList.add("text-danger");
    if (tiempoRestante <= 0) {
      clearInterval(intervaloTiempo);
      const botones = uiRespuestas.querySelectorAll("button");
      botones.forEach((b) => (b.disabled = true));

      // Mostrar la correcta al agotarse el tiempo
      const correcta = preguntasPartida[indicePregunta].correct_answer;
      botones.forEach((b) => {
        if (b.innerText === correcta) b.classList.add("btn-correct");
      });

      setTimeout(() => {
        indicePregunta++;
        cargarSiguientePregunta();
      }, 2000);
    }
  }, 1000);
}

function finDeTurno() {
  listaJugadores[turnoActual].puntos = puntuacion;
  if (turnoActual < listaJugadores.length - 1) {
    turnoActual++;
    iniciarTurnoJugador(
      selectCategoria.value,
      selectDificultad.value,
      preguntasTrivial.results,
    );
  } else {
    finalizarTorneo();
  }
}

function finalizarTorneo() {
  localStorage.setItem("ultimosResultados", JSON.stringify(listaJugadores));

  let ranking = JSON.parse(localStorage.getItem("rankingTrivialDAW")) || [];
  listaJugadores.forEach((j) => {
    ranking.push({
      nombre: j.nombre,
      puntos: j.puntos,
      fecha: new Date().toLocaleDateString(),
    });
  });
  localStorage.setItem("rankingTrivialDAW", JSON.stringify(ranking));

  window.location.href = "resultados.html";
}

function mostrarAlerta(titulo, texto, icono, callback) {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
    confirmButtonText: "Ok",
    allowOutsideClick: false,
  }).then(() => {
    if (callback) callback();
  });
}
