// 1. Definimos los palos y valores que tendrá la baraja (constantes)
const palos = ["C", "R", "T", "P"]; // C=Corazones, R=Rombos, T=Tréboles, P=Picas
const valores = [
  "1",
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
]; // Valores de las cartas

// 2.  Declaramos la variable baraja que contendrá todas las cartas
let baraja = [];

// 3️. Función para crear la baraja completa combinando todos los valores con cada palo
function crearBaraja() {
  baraja = []; // Reiniciamos baraja vacía
  for (const palo of palos) {
    // Por cada palo
    for (const valor of valores) {
      // Por cada valor
      baraja.push(valor + palo); // Añadimos la carta (ejemplo: "10C")
    }
  }
}

// 4️. Función para mezclar la baraja usando el algoritmo Fisher-Yates
function mezclarBaraja() {
  for (let i = baraja.length - 1; i > 0; i--) {
    // Elegimos índice aleatorio entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambiamos carta en i con carta en j
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
}

// 5. Función para sacar (extraer) una carta de la baraja, sacamos la última carta
function sacarCarta() {
  return baraja.pop();
}

// 6️. Función que devuelve un array con todas las cartas que pertenecen a un palo dado
function cartasDePalo(palo) {
  return baraja.filter((carta) => carta.endsWith(palo));
}

// 7️. Función para obtener el valor numérico de una carta usando substring para separar valor y palo
function valorCarta(carta) {
  const valor = carta.substring(0, carta.length - 1); // Extraemos valor sin la última letra (palo)
  if (valor === "J") return 11; // Jota vale 11
  if (valor === "Q") return 12; // Reina vale 12
  if (valor === "K") return 13; // Rey vale 13
  return parseInt(valor); // Los números del 1 al 10 los convertimos a entero
}

// 8️. Esperamos a que el DOM esté completamente cargado para acceder a elementos HTML y añadir eventos
document.addEventListener("DOMContentLoaded", () => {

// 9️. Obtenemos referencias a los elementos del DOM que vamos a usar (resultado y botones)
  const resultado = document.getElementById("resultado");
  const btnMezclar = document.getElementById("btnMezclar");
  const btnSacar = document.getElementById("btnSacar");
  const btnCartasPalo = document.getElementById("btnCartasPalo");
  const btnValorCartaEjemplo = document.getElementById("btnValorCartaEjemplo");

  //  10. Creamos la baraja al cargar la página para tenerla lista
  crearBaraja();

  // 1️1. Evento click para el botón "Mezclar baraja"
  btnMezclar.addEventListener("click", () => {
    crearBaraja(); // Reiniciamos baraja
    mezclarBaraja(); // La mezclamos
    resultado.textContent = `Baraja mezclada. Cartas disponibles: ${baraja.length}`;
  });

  // 1️2. Evento click para el botón "Sacar una carta"
  btnSacar.addEventListener("click", () => {
    if (baraja.length === 0) {
      resultado.textContent = "No quedan cartas en la baraja.";
      return;
    }
    const carta = sacarCarta(); // Sacamos la carta
    const valor = valorCarta(carta); // Obtenemos su valor numérico
    resultado.textContent = `Sacaste la carta: ${carta} (valor numérico: ${valor}). Cartas restantes: ${baraja.length}`;
  });

  // 1️3. Evento click para el botón "Mostrar cartas de un palo"
  btnCartasPalo.addEventListener("click", () => {
    // Usamos SweetAlert para pedir al usuario el palo
    Swal.fire({
      title: "Introduce el palo",
      input: "text",
      inputLabel: "Palos: C=Corazones, R=Rombos, T=Tréboles, P=Picas",
      inputValidator: (value) => {
        if (!value || !palos.includes(value.toUpperCase())) {
          return "Por favor introduce uno de los palos válidos: C, R, T, P";
        }
      },
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const palo = result.value.toUpperCase();
        const cartas = cartasDePalo(palo); // Obtenemos cartas del palo elegido
        if (cartas.length === 0) {
          resultado.textContent = `No quedan cartas del palo ${palo} en la baraja.`;
        } else {
          resultado.textContent = `Cartas del palo ${palo} (${
            cartas.length
          }):\n${cartas.join(", ")}`;
        }
      }
    });
  });

  // 1️5. Evento click para el botón "Valor de carta ejemplo"
  btnValorCartaEjemplo.addEventListener("click", () => {
    const cartaEjemplo = "10C";
    const valor = valorCarta(cartaEjemplo);
    resultado.textContent = `El valor numérico de la carta ${cartaEjemplo} es: ${valor}`;
  });
});
