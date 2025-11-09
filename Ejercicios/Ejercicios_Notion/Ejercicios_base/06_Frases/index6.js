/* 
1. Frases

Pedir al usuario que introduzca una frase por teclado. Tras meter la frase se ejecutará la siguiente funcionalidad:

- Si la frase tiene menos de 10 letras, se volverá a pedir nuevamente.
- Si tiene más de 10 letras aparecerá una alerta con la siguiente información:
    - El dato introducido tiene:
    - X letras
    - X palabras
    - X frases
    - Y mostrará la frase introducida en color azul.
*/

// 🔹 Pedimos la frase inicial al usuario
let frase = prompt("Introduce una frase");

// 🔹 Mientras la frase tenga menos de 10 caracteres, se vuelve a pedir
while (frase.length < 10) {
  frase = prompt("Introduce una frase (mínimo 10 caracteres)");
}

// 🔹 Calculamos el número de letras, palabras y frases
let numLetras = frase.length;               // Cuenta total de caracteres
let numPalabras = frase.split(" ").length;  // Divide por espacios para contar palabras
let numFrases = frase.split(".").length;    // Divide por puntos para contar frases

// 🔹 Mostramos los resultados con SweetAlert2
Swal.fire({
  icon: "info", // Muestra un icono informativo
  title: "📘 Análisis de la frase", // Título de la ventana
  html: `
    <strong>El dato introducido tiene:</strong><br><br>
    ${numLetras} letras<br>
    ${numPalabras} palabras<br>
    ${numFrases} frases<br><br>
    <strong>Frase introducida:</strong><br>
    <em style="color:#007bff;">"${frase}"</em> `,
  confirmButtonText: "Aceptar" // Texto del botón de confirmación
});
