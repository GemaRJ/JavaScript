// ==============================
// OPERADORES DE INCREMENTO Y DECREMENTO
// ==============================

// Estos operadores permiten aumentar o disminuir el valor de una variable en 1.
// Son muy usados en bucles y contadores.

// Ejemplo base
let numero = 5;
console.log("Valor inicial:", numero);

// ==============================
// INCREMENTO (++)
// ==============================
// Aumenta la variable en 1

numero++; // Equivale a: numero = numero + 1;
console.log("Después de numero++:", numero); // 6

++numero; // Pre-incremento: también suma 1 antes de usar el valor
console.log("Después de ++numero:", numero); // 7

// ==============================
// DECREMENTO (--)
// ==============================
// Disminuye la variable en 1

numero--; // Equivale a: numero = numero - 1;
console.log("Después de numero--:", numero); // 6

--numero; // Pre-decremento: también resta 1 antes de usar el valor
console.log("Después de --numero:", numero); // 5

// ==============================
// DIFERENCIA ENTRE POSTFIJO Y PREFIJO
// ==============================
// Postfijo (numero++) → devuelve el valor y luego incrementa
// Prefijo (++numero) → incrementa primero y luego devuelve

let a = 10;
console.log("\n=== Postfijo ===");
console.log("a++:", a++); // Muestra 10, luego a pasa a 11
console.log("Valor actual de a:", a); // 11

let b = 10;
console.log("\n=== Prefijo ===");
console.log("++b:", ++b); // Primero suma 1 → 11, luego muestra 11

// ==============================
// EJEMPLO PRÁCTICO: CONTADOR EN BUCLE
// ==============================

console.log("\n=== Ejemplo práctico con bucle ===");

let contador = 0;

while (contador < 5) {
  console.log("Contador:", contador);
  contador++; // Incrementa en cada iteración
}

// ==============================
// OTRO EJEMPLO: DECREMENTO
// ==============================

let vidas = 3;

while (vidas > 0) {
  console.log("Vidas restantes:", vidas);
  vidas--; // Disminuye en cada iteración
}

console.log("¡Juego terminado!");
