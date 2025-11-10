// ==============================
// FUNCIONES EN JAVASCRIPT
// ==============================

// 1. Función tradicional
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Gema"));

// 2. Función con parámetros por defecto
function sumar(a = 0, b = 0) {
  return a + b;
}
console.log("Suma 5 + 3 =", sumar(5, 3));
console.log("Suma sin parámetros =", sumar());

// 3. Función anónima asignada a variable
const multiplicar = function (x, y) {
  return x * y;
};
console.log("Multiplicación 4 * 6 =", multiplicar(4, 6));

// 4. Función flecha (arrow function)
const restar = (x, y) => x - y;
console.log("Resta 10 - 4 =", restar(10, 4));

// 5. Función que no retorna nada (void)
function mostrarMensaje(msg) {
  console.log("Mensaje:", msg);
}
mostrarMensaje("Aprendiendo JavaScript");

// 6. Función que recibe objeto como parámetro
function mostrarPersona({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
let persona = { nombre: "Luis", edad: 25 };
mostrarPersona(persona);

// 7. Función que recibe array como parámetro
function mostrarNumeros(arr) {
  arr.forEach((num) => console.log("Número:", num));
}
let numeros = [1, 2, 3, 4, 5];
mostrarNumeros(numeros);

// 8. Función que llama a otra función
function calcular(a, b, operacion) {
  return operacion(a, b);
}
console.log("Calcular suma:", calcular(5, 7, sumar));
console.log("Calcular multiplicación:", calcular(3, 4, multiplicar));

// 9. Función autoejecutable (IIFE)
(function () {
  console.log("Esta función se ejecuta sola al definirla");
})();

// 10. Función recursiva (factorial)
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial de 5:", factorial(5));

// ==============================
// FUNCIONES ASÍNCRONAS
// ==============================

// Función asíncrona con async/await
async function obtenerDatos() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ usuario: "Gema", edad: 37 });
    }, 2000);
  });

  const resultado = await promesa;
  return resultado;
}

// Llamar función asíncrona con then
obtenerDatos().then((datos) => {
  console.log("Datos recibidos con then:", datos);
});

// Llamar función asíncrona con async/await
(async () => {
  const datos = await obtenerDatos();
  console.log("Datos recibidos con await:", datos);
})();

// Función asíncrona con manejo de errores
async function obtenerDatosConError() {
  try {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error al obtener datos");
      }, 1500);
    });

    const resultado = await promesa;
    console.log(resultado);
  } catch (error) {
    console.log("Capturado error:", error);
  }
}
obtenerDatosConError();

/* ===========================================================
   MÉTODOS Y FUNCIONES DE BÚSQUEDA / VALIDACIÓN — RESUMEN
===========================================================

 isNaN()
➡ Comprueba si un valor NO es un número.
➡ Útil para validar datos antes de operar.

 some()
➡ Verifica si AL MENOS un elemento cumple una condición.
➡ Devuelve true o false.

 find()
➡ Devuelve el PRIMER elemento que cumple una condición.
➡ Devuelve undefined si no hay coincidencia.

 filter()
➡ Devuelve TODOS los elementos que cumplan una condición en un nuevo array.

 includes()
➡ Comprueba si un array o cadena contiene un valor exacto (true/false).

 indexOf()
➡ Devuelve la posición de un elemento dentro del array o -1 si no lo encuentra.

---------------------------------------------------------------
DIFERENCIAS CLAVE
---------------------------------------------------------------
| Método     | Devuelve               | Tipo de resultado | Ideal para...                    |
|-------------|-----------------------|--------------------|----------------------------------|
| isNaN()     | true / false          | Booleano           | Validar si algo no es un número  |
| some()      | true / false          | Booleano           | Saber si existe alguna coincidencia |
| find()      | Elemento simple       | Dato único         | Obtener una coincidencia         |
| filter()    | Array nuevo           | Varios resultados  | Obtener varias coincidencias     |
| includes()  | true / false          | Booleano           | Comprobar si existe un valor     |
| indexOf()   | Índice o -1           | Número             | Saber la posición de un valor    |
=========================================================== */
