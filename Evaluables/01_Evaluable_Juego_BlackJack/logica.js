import { Baraja } from "./utils/baraja.js";
import { Jugador } from "./utils/jugador.js";
import { Banca } from "./utils/banca.js";

// Variables
let baraja;
let jugador;
let banca;

// DOM
const btnPedir = document.getElementById("btnPedir");
const btnPlantarse = document.getElementById("btnPlantarse");
const divResultado = document.getElementById("resultado");

function mostrarCartas(mano) {
  let resultado = "";
  for (let i = 0; i < mano.length; i++) {
    resultado +=
      '<img class="carta-img" src="./utils/cartas/' + mano[i].nombre + '.jpg">';
  }
  return resultado;
}

// Tablero
function actualizarTablero() {
  divResultado.innerHTML = `
    <div class="text-center mb-4">
      <h4 class="text-danger">${banca.nombre}</h4>
      <div class="fs-4 fw-bold mb-2">${banca.puntos}</div>
      <div class="d-flex flex-wrap justify-content-center">${mostrarCartas(
        banca.mano
      )}</div>
    </div>
    <div class="text-center">
      <h4 class="text-primary">${jugador.nombre}</h4>
      <div class="fs-4 fw-bold mb-2">${jugador.puntos}</div>
      <div class="d-flex flex-wrap justify-content-center">${mostrarCartas(
        jugador.mano
      )}</div>
    </div>
  `;
}

// SweetAlert
const mensaje = (titulo, texto, icono) =>
  Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
    confirmButtonText: "OK",
  });

// Turno banca
function turnoBanca() {
  btnPedir.disabled = true;
  btnPlantarse.disabled = true;

  function jugar() {
    if (banca.puntos < 17) {
      banca.addCarta(baraja.sacar());
      actualizarTablero();
      if (banca.puntos >= 22) {
        Swal.fire({
          title: "¡GANASTE!",
          html: "La banca se pasó.<br>¡Felicidades, " + jugador.nombre + "!",
          icon: "success",
        });
      } else {
        setTimeout(jugar, 700);
      }
    } else {
      Swal.fire({
        title: "Tu turno",
        text: `La banca se planta con ${banca.puntos} puntos. Te toca jugar, ${jugador.nombre}.`,
        icon: "info",
        confirmButtonText: "OK",
      }).then(() => {
        btnPedir.disabled = false;
        btnPlantarse.disabled = false;
      });
    }
  }

  jugar();
}

// Turno jugador
btnPedir.onclick = function () {
  jugador.addCarta(baraja.sacar());
  actualizarTablero();
  if (jugador.puntos >= 22) {
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
    Swal.fire({
      title: "¡PERDISTE!",
      html: "Te pasaste de 21.<br>¡Mala suerte, " + jugador.nombre + "!",
      icon: "error",
    });
  }
};

btnPlantarse.onclick = () => {
  btnPedir.disabled = true;
  btnPlantarse.disabled = true;

  const puntosJugador = jugador.puntos;
  const puntosBanca = banca.puntos;

  let titulo, texto, icono;

  if (puntosJugador > 21) {
    titulo = "¡PERDISTE!";
    texto = "Te pasaste de 21.";
    icono = "error";
  } else if (puntosBanca > 21 || puntosJugador > puntosBanca) {
    titulo = "¡GANASTE!";
    texto = `${puntosJugador} supera a ${puntosBanca}`;
    icono = "success";
  } else if (puntosBanca > puntosJugador) {
    titulo = "¡PERDISTE!";
    texto = `La banca gana ${puntosBanca} a ${puntosJugador}`;
    icono = "error";
  } else {
    titulo = "¡EMPATE!";
    texto = "Tenéis los mismos puntos.";
    icono = "warning";
  }

  Swal.fire(titulo, texto, icono);
};

// Iniciar juego
function iniciarJuego() {
  jugador = new Jugador(prompt("Introduce tu nombre Jugador:") || "Jugador");
  banca = new Banca();
  baraja = new Baraja();
  actualizarTablero();
  turnoBanca();
}

window.addEventListener("DOMContentLoaded", iniciarJuego);
