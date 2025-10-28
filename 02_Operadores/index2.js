// ===================================================
//  OPERADORES EN JAVASCRIPT
// ===================================================
// Ejemplos de operadores aritméticos y de asignación.
// Se usan let y const en lugar de var (más seguro).
// ===================================================

//  Operador de Asignación (=)
let a = 1;
let b = 2;
a = b; // Asigna el valor de b a a
console.log(`(=) El valor de a es ${a}`); // Resultado: 2

// Operador de Suma y Asignación (+=)
let suma = 5;
let incremento = 3;
suma += incremento; // igual que suma = suma + incremento
console.log(`(+=) El valor de suma es ${suma}`); // Resultado: 8

//  Operador de Resta (-)
let num1 = 10;
let num2 = 4;
let resta = num1 - num2;
console.log(`(-) El resultado de la resta es ${resta}`); // Resultado: 6

//  Operadores de Incremento (++) y Decremento (--)
let contador = 5;
contador++; // incrementa en 1
contador++; // incrementa en 1 otra vez
console.log(`(++) Valor tras incrementar dos veces: ${contador}`); // 7

contador--; // decrementa en 1
console.log(`(--) Valor tras decrementar una vez: ${contador}`); // 6

//  Operador de Multiplicación (*)
let ancho = 4;
let alto = 3;
let area = ancho * alto;
console.log(`(*) El área del rectángulo es ${area}`); // 12

//  Operador de División (/)
let dividendo = 10;
let divisor = 2;
let division = dividendo / divisor;
console.log(`(/) El resultado de dividir ${dividendo} entre ${divisor} es ${division}`); // 5

//  Operador de Módulo (%)
let numero = 10;
let divisor2 = 3;
let resto = numero % divisor2;
console.log(`(%) El resto de dividir ${numero} entre ${divisor2} es ${resto}`); // 1

// ===================================================
//  Ejemplo combinado
// ===================================================
let x = 5;
let y = 2;

console.log("\n--- Ejemplo combinado ---");
console.log(`x = ${x}, y = ${y}`);
console.log(`x + y = ${x + y}`); // Suma
console.log(`x - y = ${x - y}`); // Resta
console.log(`x * y = ${x * y}`); // Multiplicación
console.log(`x / y = ${x / y}`); // División
console.log(`x % y = ${x % y}`); // Módulo
console.log(`++x = ${++x}`);     // Incremento previo
console.log(`--y = ${--y}`);     // Decremento previo

// ===================================================
// 🔹 Notas finales
// ===================================================
/*
Resumen de operadores aritméticos:

=   → Asignación
+=  → Suma y asignación
-=  → Resta y asignación
*   → Multiplicación
/   → División
%   → Módulo (resto)
++  → Incremento
--  → Decremento

 Consejo:
- Usa const si el valor no cambia.
- Usa let si el valor puede cambiar.
- Evita var (ámbito global y propenso a errores).
*/
