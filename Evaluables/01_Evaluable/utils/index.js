// BARAJA DE CARTAS
const palos = ["C", "D", "T", "P"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

let baraja = [];

function crearBaraja() {
  baraja = [];
  for (const palo of palos) {
    for (const valor of valores) {
      baraja.push(valor + palo);
    }
  }
}

function mezclarBaraja() {
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
}

function sacarCarta() {
  return baraja.pop();
}

function valorCarta(carta) {
  const v = carta.slice(0, -1);

  if (v === "A" || v === "1") return 1;
  if (["J", "Q", "K"].includes(v)) return 11;

  return parseInt(v);
}

// OBJETOS DEL JUEGO
const jugador = {
  nombre: "",
  mano: [],
  puntos: 0,
  pedir(carta) {
    this.mano.push(carta);
    this.puntos += valorCarta(carta);
  },
};

const banca = {
  mano: [],
  puntos: 0,
  pedir(carta) {
    this.mano.push(carta);
    this.puntos += valorCarta(carta);
  },
};

//  VARIABLES GLOBALES
let DivResultado;
let btnPedir, btnPlantarse;

//  DOM
document.addEventListener("DOMContentLoaded", () => {
  jugador.nombre = prompt("Introduce tu nombre:");
  if (!jugador.nombre) jugador.nombre = "Jugador";

  DivResultado = document.getElementById("resultado");
  btnPedir = document.getElementById("btnPedir");
  btnPlantarse = document.getElementById("btnPlantarse");

  reiniciarJuego();
});

function reiniciarJuego() {
  crearBaraja();
  mezclarBaraja();

  jugador.mano = [];
  jugador.puntos = 0;
  banca.mano = [];
  banca.puntos = 0;

  DivResultado.innerHTML = "";

  escribir(`Bienvenido/a: ${jugador.nombre}.\n¡ La banca empieza a jugar !`);
  turnoBanca();
}

// TURNO BANCA
function turnoBanca() {
  const intervalo = setInterval(() => {
    if (banca.puntos < 17) {
      const carta = sacarCarta();
      banca.pedir(carta);

      escribir(`[BANCA] Carta: ${carta} | Puntos: ${banca.puntos}`, carta);

      if (banca.puntos >= 22) {
        clearInterval(intervalo);
        terminar("La banca se pasa de 21. ¡GANAS!");
      }
    } else {
      clearInterval(intervalo);

      escribir(`¡ ${jugador.nombre} es tu Turno !`);
      activarBotones();
    }
  }, 1000);
}

// JUGADOR (PEDIR CARTA O PLANTARSE)
function activarBotones() {
  btnPedir.disabled = false;
  btnPlantarse.disabled = false;

  btnPedir.onclick = pedirJugador;
  btnPlantarse.onclick = plantarse;
}

function pedirJugador() {
  const carta = sacarCarta();
  jugador.pedir(carta);

  escribir(`[TÚ] Carta: ${carta} | Puntos: ${jugador.puntos}`, carta);

  if (jugador.puntos >= 22) {
    terminar("Te has pasado de 21. Pierdes.");
  }
}

function plantarse() {
  escribir(`${jugador.nombre} se planta con ${jugador.puntos} puntos.`);
  decidirGanador();
}

// DECIDIR GANADOR
function decidirGanador() {
  if (jugador.puntos === 21 && banca.puntos === 21) {
    terminar("Empate a 21.");
    return;
  }

  if (jugador.puntos > banca.puntos) {
    terminar("¡GANAS! Estás más cerca del 21.");
  } else if (banca.puntos > jugador.puntos) {
    terminar("PIERDES! La banca está más cerca del 21.");
  } else {
    terminar("Empate.");
  }
}

// TERMINAR JUEGO
function terminar(mensaje) {
  btnPedir.disabled = true;
  btnPlantarse.disabled = true;

  DivResultado.innerHTML += `<div class="alert alert-info fw-bold mt-3 text-center">${mensaje}</div>`;
  DivResultado.scrollTop = DivResultado.scrollHeight;
}

// SALIDA POR PANTALLA

function escribir(texto, carta = null) {
  let html = `<div class="log-entry"><span>${texto}</span>`;

  if (carta) {
    html += `<img src="./utils/cartas/${carta}.jpg" class="carta-img" alt="${carta}">`;
  }

  html += `</div>`;

  DivResultado.innerHTML += html;
  DivResultado.scrollTop = DivResultado.scrollHeight;
}
