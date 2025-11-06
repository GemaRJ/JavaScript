/*Ejercicio 1 - Calculadora básica:

 Crea una aplicación que solicite al usuario dos números mediante prompt()
 y una operación (+, -, *, /). 
 Utiliza alert() para mostrar el resultado de la operación.
 Asegúrate de validar que los valores introducidos sean números válidos.

 Sin SweetAlert2 ni Bootstrap

*/

// Solicita al usuario el primer número y lo convierte a tipo numérico con parseFloat
let numero1 = parseFloat(prompt("Introduce el primer número:"));

// Solicita el segundo número y también lo convierte a número decimal
let numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Solicita la operación a realizar (+, -, *, /)
let operacion = prompt("Introduce la operación (+, -, *, /):");

// Variable donde se guardará el resultado de la operación
let resultado;

// Verifica si alguno de los valores introducidos no es un número
if (isNaN(numero1) || isNaN(numero2)) {
  // Si no son válidos, muestra una alerta de error
  alert("Por favor, introduce números válidos.");
} else {
  // Si los números son válidos, evalúa qué operación se ha introducido
  switch (operacion) {
    case "+": // Caso de suma
      resultado = numero1 + numero2;
      alert("El resultado de la suma es: " + resultado);
      break;

    case "-": // Caso de resta
      resultado = numero1 - numero2;
      alert("El resultado de la resta es: " + resultado);
      break;

    case "*": // Caso de multiplicación
      resultado = numero1 * numero2;
      alert("El resultado de la multiplicación es: " + resultado);
      break;

    case "/": // Caso de división
      if (numero2 === 0) {
        // Evita la división entre cero
        alert("No se puede dividir entre cero.");
      } else {
        resultado = numero1 / numero2;
        alert("El resultado de la división es: " + resultado);
      }
      break;

    default:
      // Si la operación no es una de las válidas, muestra un mensaje de error
      alert(
        "Operación no válida. Por favor, introduce una de las siguientes operaciones: +, -, *, /."
      );
  }
}
