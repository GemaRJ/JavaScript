// ==============================
// OPERADORES LÓGICOS EN JAVASCRIPT
// ==============================

// Los operadores lógicos sirven para combinar o negar condiciones.
// Su resultado siempre será un valor booleano: true (verdadero) o false (falso).

// && (AND): Devuelve true solo si TODAS las condiciones son verdaderas.
// || (OR): Devuelve true si AL MENOS una condición es verdadera.
// !  (NOT): Invierte el valor lógico (true → false, false → true).

// ==============================
// EJEMPLO BASE
// ==============================

// Definimos dos variables de ejemplo
let edad = 25;
let tieneCarnet = true;

// ==============================
// AND (&&)
// ==============================

console.log("=== Operador AND (&&) ===");

// Ambas condiciones son verdaderas: edad >= 18 es true y tieneCarnet también es true
// Por tanto, el resultado final es true
console.log(edad >= 18 && tieneCarnet); // true

// En este caso, la segunda condición es false, así que el resultado total será false
console.log(edad >= 18 && false); // false


// ==============================
// OR (||)
// ==============================

console.log("\n=== Operador OR (||) ===");

// Si al menos una de las condiciones es verdadera, el resultado será true.
// Aquí ambas son verdaderas, por tanto → true
console.log(edad >= 18 || tieneCarnet); // true

// En este caso, ambas condiciones son falsas → resultado false
console.log(false || false); // false


// ==============================
// NOT (!)
// ==============================

console.log("\n=== Operador NOT (!) ===");

// NOT invierte el resultado lógico.
// edad >= 18 → true, pero al aplicar ! se convierte en false
let esMenor = !(edad >= 18);
console.log(esMenor); // false


// ==============================
// COMBINACIÓN DE OPERADORES
// ==============================

console.log("\n=== Combinación de operadores ===");

// Creamos una variable extra para ver cómo se combinan varios operadores
let tienePermisoPadres = false;

// Aquí la expresión se lee así:
// (edad >= 18 && tieneCarnet) → true
// tienePermisoPadres → false
// Como hay un OR (||) entre ambos, el resultado final es true.
let puedeConducir = (edad >= 18 && tieneCarnet) || tienePermisoPadres;

console.log("¿Puede conducir?", puedeConducir); // true


// ==============================
// EJEMPLO PRÁCTICO
// ==============================

console.log("\n=== Ejemplo práctico ===");

// Creamos variables con una nota y porcentaje de asistencia
let nota = 6;
let asistencia = 85; // porcentaje

// Para aprobar, el alumno necesita tener nota >= 5 Y asistencia >= 80
// Si ambas condiciones se cumplen → true
let aprobado = (nota >= 5) && (asistencia >= 80);

// Usamos un if para mostrar el resultado
if (aprobado) {
  console.log("Alumno APROBADO ");
} else {
  console.log("Alumno SUSPENDIDO ");
}


// ==============================
// OTRO EJEMPLO CON OR (||)
// ==============================

console.log("\n=== Ejemplo con OR ===");

// Si tiene entrada o es invitado, podrá acceder al evento
let tieneEntrada = false;
let esInvitado = true;

// Como al menos una condición (esInvitado) es true, el resultado será true
if (tieneEntrada || esInvitado) {
  console.log("Puede acceder al concierto ");
} else {
  console.log("No puede acceder ");
}


// ==============================
// EJEMPLO CON NOT (!)
// ==============================

console.log("\n=== Ejemplo con NOT ===");

// Si el usuario NO está conectado (!conectado), se muestra un mensaje de alerta
let conectado = false;

if (!conectado) {
  console.log("Usuario desconectado ");
} else {
  console.log("Usuario en línea ");
}
