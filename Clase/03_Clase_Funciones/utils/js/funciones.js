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
  //console.log(arguments[0]); me dara el primer argumento.
  // cuantos elementos me han pasado
  console.log(arguments.length);
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

// =================================================================
// Si solo tiene un parámetro
let saludarFlecha = (nombre) => {
  console.log(`Hola ${nombre} desde función flecha`);
};
saludarFlecha("Gema");

// Si solo tiene una línea de código
let restaFlecha = (parametro1, parametro2) => parametro1 - parametro2;
console.log(restaFlecha(10, 4));
// Si no tiene parámetros
let saludarMundo = () => console.log("Hola Mundo desde función flecha");
saludarMundo();

// Funciones con valores por defecto
function dividir(parametro1 = 1, parametro2 = 1) {
  console.log(parametro1 / parametro2);
}
dividir(10, 2);
dividir(); // Usará los valores por defecto
dividir(8); // El segundo parámetro será 1 por defecto
dividir(undefined, 4); // El primer parámetro será 1 por defecto

// Funciones como parámetros
function calcular(parametro1, parametro2, operacion) {
  return operacion(parametro1, parametro2);
}
let resultadoSuma = calcular(5, 3, (a, b) => a + b);
console.log("Resultado de la suma:", resultadoSuma);
let resultadoResta = calcular(10, 4, (a, b) => a - b);
console.log("Resultado de la resta:", resultadoResta);
let resultadoMultiplicacion = calcular(6, 7, (a, b) => a * b);
console.log("Resultado de la multiplicación:", resultadoMultiplicacion);
let resultadoDivision = calcular(20, 5, (a, b) => a / b);
console.log("Resultado de la división:", resultadoDivision);
// Funciones que retornan funciones
function crearSaludo(saludo) {
  return function (nombre) {
    console.log(`${saludo}, ${nombre}!`);
  };
}
let saludarHola = crearSaludo("Hola");
saludarHola("Gema");
let saludarBuenosDias = crearSaludo("Buenos días");
saludarBuenosDias("Luis");
let saludarBuenasNoches = crearSaludo("Buenas noches");
saludarBuenasNoches("Ana");
