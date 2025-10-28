// ==============================
// OPERADORES DE COMPARACIÓN EN JAVASCRIPT
// ==============================

// En JavaScript, los comparadores se usan para evaluar condiciones.
// Devuelven SIEMPRE un valor booleano: true (verdadero) o false (falso).

// === IGUALDAD ESTRICTA (compara valor y tipo)
const numero = 5;
const texto = "5";

console.log("=== Igualdad estricta ===");
console.log(numero === 5);     // true → mismo valor y tipo (number)
console.log(texto === "5");    // true → mismo valor y tipo (string)
console.log(numero === texto); // false → mismo valor, distinto tipo

// == IGUALDAD NO ESTRICTA (solo compara valor, convierte tipos)
console.log("\n== Igualdad no estricta ==");
console.log(numero == texto); // true → convierte el string a número antes de comparar

// !== DIFERENTE ESTRICTO (valor y tipo)
console.log("\n!== Diferente estricto ==");
console.log(numero !== texto); // true → valor igual, pero tipo distinto
console.log(numero !== 5);     // false → mismo valor y tipo

// != DIFERENTE NO ESTRICTO (solo compara valor)
console.log("\n!= Diferente no estricto ==");
console.log(numero != texto); // false → el valor "5" es igual a 5 (aunque el tipo no)

// > MAYOR QUE
// < MENOR QUE
// >= MAYOR O IGUAL QUE
// <= MENOR O IGUAL QUE
const edad = 18;

console.log("\n> , < , >= , <=");
console.log(edad > 18);  // false
console.log(edad >= 18); // true
console.log(edad < 30);  // true
console.log(edad <= 17); // false

// Comparación entre cadenas (alfabéticamente, según el orden Unicode)
console.log("\nComparación entre cadenas:");
console.log("a" < "b");   // true
console.log("hola" > "adiós"); // true (porque 'h' viene después de 'a')

// Comparación con booleanos
console.log("\nComparación con booleanos:");
console.log(true == 1);   // true → conversión implícita
console.log(false === 0); // false → tipos diferentes (boolean vs number)
console.log(false == 0);  // true → conversión de tipo

// Ejemplo práctico con condicional
console.log("\nEjemplo práctico:");
let nota = 7;

if (nota >= 5) {
  console.log("Has aprobado 😊");
} else {
  console.log("Has suspendido 😢");
}
