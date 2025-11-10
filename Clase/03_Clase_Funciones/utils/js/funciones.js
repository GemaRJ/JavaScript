let nombre = "Gema";

console.log(`Hola ${nombre} este es mi primer programa en JS`);

//saludar(nombre);

// Funciones normales:

function saludar(nombre) {
  console.log(`Hola ${nombre} primera función realizada en JS`);
}

function sumar(parametro1, parametro2) {
  return parametro1 + parametro2;
}

console.log(sumar(4, 7));

function multiplicar(parametro1, parametro2) {
  console.log(parametro1 * parametro2);
  // Argumentos invisibles
  //console.log(arguments[0]);
}

console.log("Vamos a multiplicar dos números");
multiplicar(4, 6);

// Si quiero saber cuanto argumentos me han pasado?
function multiplicar(parametro1, parametro2) {
  console.log(parametro1 * parametro2);
  console.log(arguments.length);
}

// Funciones flecha/arrow function// Lambdan

let sumaFlecha = (parametro1, parametro2) => {
  console.log(parametro1 + parametro2);
};

sumaFlecha(4, 6);
