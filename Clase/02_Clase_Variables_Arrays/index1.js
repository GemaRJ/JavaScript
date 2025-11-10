//  VARIABLES Y TIPOS DE DATOS EN JAVASCRIPT
// ========================================

// Explicación general de clases y variables en JS
// class: Variables, constructores, métodos
// JS es un lenguaje no tipado estrictamente.
// El tipo de dato lo determina el valor que le asigna el navegador.

// ========================================
//  FORMAS DE DECLARAR VARIABLES
// ========================================

// 1. CONST → Constante (NO se puede modificar)
const NOMBRE_ASIGNATURA = "Desarrollo Cliente";
// Intentar cambiar su valor daría error porque las constantes son inmutables.

// 2. LET → Variable de ámbito de bloque (SÍ se puede modificar)
let nombre; // undefined (declarada sin valor aún)

// 3️. VAR → Variable de ámbito global o de función ( No recomendable)
// var apellido = "Martín"; // Ejemplo comentado

if (true) {
  nombre = "Gema"; // Asignación inicial
  nombre = "Carlos"; // Reasignación permitida con let
  console.log(nombre); // Muestra "Carlos"
}

// ========================================
//  DIFERENCIAS ENTRE VAR, LET Y CONST
// ========================================

// VAR → permite redeclarar y reasignar (ámbito global o función)
var helloWorld = "¡Hola, JavaScript!";
console.log(helloWorld); // Muestra: ¡Hola, JavaScript!

helloWorld = "¡Hola de nuevo, JavaScript!";
console.log(helloWorld); // Muestra: ¡Hola de nuevo, JavaScript!

// LET → permite reasignar pero no redeclarar (ámbito de bloque)
let helloWorld2 = "¡Hola, JavaScript 2!";
console.log(helloWorld2); // Muestra: ¡Hola, JavaScript 2!"

helloWorld2 = "¡Hola de nuevo, JavaScript 2!";
console.log(helloWorld2); // Muestra: ¡Hola de nuevo, JavaScript 2!"

// CONST → no permite reasignar ni redeclarar
const helloWorld3 = "¡Hola, JavaScript 3!";
console.log(helloWorld3); // Muestra: ¡Hola, JavaScript 3!"

//  Error si se descomenta (no se puede cambiar un const):
// helloWorld3 = "¡Hola de nuevo, JavaScript 3!";
// console.log(helloWorld3);

// ========================================
//  TIPOS DE VARIABLES Y EJEMPLOS
// ========================================

let alias = "Enzo"; // String (cadena de texto)
let edad = 37; // Number (entero)
let altura = 1.73; // Number (decimal)
let letraPiso = "A"; // Char (en JS es un string de un solo carácter)
let experiencia = true; // Boolean (true/false)
let fechaNacimiento = new Date(1984, 2, 21); // Object (fecha)
let mail = "gema@ue.com"; // String
let puesto = null; // Null (valor intencionadamente vacío)
let conocimiento; // Undefined (variable sin asignar)

// ========================================
//  EJEMPLOS DE SALIDA POR CONSOLA
// ========================================

// Forma tradicional (concatenación)
console.log("Mi nombre es " + nombre);
console.log("Mi edad es " + edad);
console.log("Mi puesto es " + puesto);
console.log("Mi conocimiento es " + conocimiento);

// Forma moderna (template string con backticks)
console.log(`Mi nombre es ${nombre}`);

// Comprobamos el tipo de cada variable con typeof
console.log("El tipo de la edad es " + typeof edad); // number
console.log("El tipo de la altura es " + typeof altura); // number
console.log("El tipo del puesto es " + typeof puesto); // object (curioso: typeof null → "object")
console.log("El tipo del conocimiento es " + typeof conocimiento); // undefined

// ========================================
//  NaN → Not a Number
// ========================================

// Sirve para detectar valores que no son numéricos
let noEsNumero = "abc" / 2; // Resultado: NaN
console.log("¿El valor noEsNumero es un número válido?:", isNaN(noEsNumero)); // true
console.log("Valor de noEsNumero:", noEsNumero); // NaN

// ========================================
//  RESUMEN GENERAL
// ========================================

/*
VAR   → Global o función. Permite redeclarar y reasignar.  Evitar su uso.
LET   → Bloque. Permite reasignar pero NO redeclarar.  Recomendado.
CONST → Bloque. NO permite reasignar ni redeclarar.  Recomendado para valores fijos.

TIPOS DE DATOS:
- String: texto (entre comillas)
- Number: número (entero o decimal)
- Boolean: true/false
- Object: objetos, fechas, arrays, etc.
- Null: valor intencionadamente vacío
- Undefined: variable declarada sin valor
- NaN: “Not a Number”, indica un resultado no numérico
*/
