/* 
1. Piramide CRECIENTE

Escriba un script que pedido por consola (prompt un número),
represente por consola la siguiente figura con el número de filas introducido en el prompt.
En el caso de no introducir un número o que sea menor que 0 saltará un aviso por consola y dará la posibilidad de repetir el proceso:
*/

// Pedimos el número de filas al usuario
let filas = parseInt(
  prompt("¿Cuántas filas quieres que aparezcan? (número mayor que 0):")
);

// Validamos que sea un número válido
if (isNaN(filas) || filas <= 0) {
  Swal.fire({
    icon: "error",
    title: "Número inválido",
    text: "Por favor, introduce un número mayor que 0.",
  });
} else {
  let piramide = "";

  // Creamos la pirámide
  for (let i = 1; i <= filas; i++) {
    piramide += "+".repeat(i) + "\n"; // Añadimos i símbolos '+' y un salto de línea
  }

  // Mostramos el resultado con SweetAlert
  Swal.fire({
    title: `Piramide de ${filas} filas`,
    html: `<pre style="text-align:left;">${piramide}</pre>`,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
}
