/* 
   ARRAYS EN JAVASCRIPT — CON EJEMPLOS Y EXPLICACIONES
*/

//  Crear arrays de distintos tipos
let numeros = [1, 2, 3, 4, 5];
let palabras = ["Hola", "que", "tal"];
let mixto = [1, "hola", true, null];

//  Acceso a elementos
console.log("Primer número:", numeros[0]);
console.log("Última palabra:", palabras[2]);

//  Modificar un elemento
numeros[0] = 10;
console.log("Array modificado:", numeros);

//  Longitud del array
console.log("Longitud del array:", numeros.length);

// MOSTRAR ELEMENTOS DE UN ARRAY:

// Mostrar con un FOR clásico

for (let i = 0; i < numeros.length; i++) {
  console.log(`Elemento en posición ${i}: ${numeros[i]}`);
}

//  Recorrer con forEach (más moderno)
palabras.forEach((p, i) => console.log(`Palabra ${i}: ${p}`));

/* 
   MÉTODOS BÁSICOS DE MANIPULACIÓN DE ARRAYS
 */

let nombres = ["Borja", "Luis", "Jesús"];

// ➕ Añadir elementos
nombres.push("Ana"); // Al final
nombres.unshift("Marta"); // Al inicio

// ➖ Eliminar elementos
nombres.pop(); // Último ("Ana")
nombres.shift(); // Primero ("Marta")

console.log("Array tras añadir/eliminar:", nombres);

//  Ordenar y revertir
nombres.sort(); // Orden alfabético
nombres.reverse(); // Invertir orden
console.log("Array ordenado e invertido:", nombres);

//  Concatenar arrays
let array1 = [1, 2];
let array2 = [3, 4];
let combinado = array1.concat(array2);
console.log("Arrays concatenados:", combinado);

//  Convertir array a texto
console.log("Array a string:", nombres.join(", "));

//  Eliminar con splice
let arrayEliminar = [1, 2, 3, 4, 5];
arrayEliminar.splice(2, 2); // Desde el índice 2 elimina 2 elementos
console.log("Array tras splice:", arrayEliminar);

/* 
   MÉTODOS DE BÚSQUEDA Y FILTRADO EN ARRAYS
*/

let frutas = ["manzana", "banana", "naranja", "pera", "uva", "mango"];

//  find(): devuelve el primer elemento que cumpla una condición
let frutaEncontrada = frutas.find((f) => f.startsWith("n"));
console.log("Fruta encontrada con find():", frutaEncontrada); // "naranja"

//  filter(): devuelve todos los elementos que cumplan una condición
let frutasConA = frutas.filter((f) => f.includes("a"));
console.log("Frutas con la letra 'a':", frutasConA); // ["manzana", "banana", "naranja", "mango"]

//  includes(): verifica si un valor exacto existe
console.log("¿Existe 'pera'?", frutas.includes("pera")); // true

//  indexOf(): devuelve la posición de un valor
let pos = frutas.indexOf("naranja");
console.log("Posición de 'naranja':", pos); // 2

//  some(): verifica si al menos un elemento cumple una condición
let hayFrutaLarga = frutas.some((f) => f.length > 6);
console.log("¿Hay frutas con nombre largo?", hayFrutaLarga);

//  Ejemplo con Swal.fire para mostrar resultados visualmente
let buscar = prompt("Introduce una fruta para buscar:").toLowerCase();

if (frutas.includes(buscar)) {
  let posicion = frutas.indexOf(buscar);
  Swal.fire({
    icon: "success",
    title: "Fruta encontrada ",
    text: `La fruta "${buscar}" está en la posición ${posicion}.`,
  });
} else if (frutas.find((f) => f.startsWith(buscar[0]))) {
  let coincidencia = frutas.find((f) => f.startsWith(buscar[0]));
  Swal.fire({
    icon: "info",
    title: "Coincidencia parcial ",
    text: `No está exactamente, pero tenemos una fruta que empieza por esa letra: ${coincidencia}.`,
  });
} else {
  let similares = frutas.filter((f) => f.includes(buscar));
  if (similares.length > 0) {
    Swal.fire({
      icon: "info",
      title: "Frutas similares ",
      text: `Frutas que contienen "${buscar}": ${similares.join(", ")}`,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "No encontrada ",
      text: "Esa fruta no está en la lista ni hay coincidencias parecidas.",
    });
  }
}

/* 
   MÉTODOS Y FUNCIONES DE BÚSQUEDA / VALIDACIÓN — RESUMEN


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
