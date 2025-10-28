// ==============================
// OPERADORES DE ASIGNACIÓN EN JAVASCRIPT
// ==============================

// Los operadores de asignación permiten dar o actualizar valores en variables.
// El más básico es el signo igual (=), pero hay combinaciones para operar y asignar al mismo tiempo.

// Ejemplo base
let numero = 10; // Asignamos el valor 10 a la variable "numero"
console.log("Valor inicial:", numero);

// ==============================
// ASIGNACIÓN SIMPLE (=)
// ==============================
// El operador "=" asigna un valor a una variable.
numero = 20; // Reemplaza el valor anterior (10) por 20
console.log("Asignación simple:", numero);

// ==============================
// SUMA Y ASIGNACIÓN (+=)
// ==============================
// Suma el valor indicado al que ya tiene la variable.
numero += 5; // Equivale a: numero = numero + 5;
console.log("Después de += 5:", numero); // 25

// ==============================
// RESTA Y ASIGNACIÓN (-=)
// ==============================
// Resta el valor indicado al que ya tiene la variable.
numero -= 10; // Equivale a: numero = numero - 10;
console.log("Después de -= 10:", numero); // 15

// ==============================
// MULTIPLICACIÓN Y ASIGNACIÓN (*=)
// ==============================
// Multiplica el valor actual por el número indicado.
numero *= 2; // Equivale a: numero = numero * 2;
console.log("Después de *= 2:", numero); // 30

// ==============================
// DIVISIÓN Y ASIGNACIÓN (/=)
// ==============================
// Divide el valor actual entre el número indicado.
numero /= 3; // Equivale a: numero = numero / 3;
console.log("Después de /= 3:", numero); // 10

// ==============================
// MÓDULO Y ASIGNACIÓN (%=)
// ==============================
// Guarda el resto de una división.
numero %= 4; // Equivale a: numero = numero % 4;
console.log("Después de %= 4:", numero); // 2 (ya que 10 / 4 deja resto 2)

// ==============================
// EXPONENCIACIÓN Y ASIGNACIÓN (**=)
// ==============================
// Eleva la variable a la potencia indicada.
numero **= 3; // Equivale a: numero = numero ** 3;
console.log("Después de **= 3:", numero); // 8

// ==============================
// EJEMPLO PRÁCTICO FINAL
// ==============================
// Simulamos un contador que aumenta con el tiempo

let contador = 0; // Inicializamos
console.log("\n=== Ejemplo práctico ===");

contador += 1; // Suma 1
console.log("Contador:", contador); // 1

contador += 1; // Suma otro
console.log("Contador:", contador); // 2

contador *= 2; // Duplicamos el valor
console.log("Contador:", contador); // 4

contador -= 1; // Restamos 1
console.log("Contador:", contador); // 3
