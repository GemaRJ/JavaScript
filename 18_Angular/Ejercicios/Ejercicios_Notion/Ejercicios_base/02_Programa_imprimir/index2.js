/* 
Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones:
Para números divisibles por 3, imprime "Fizz" en lugar del número
Para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir " FizzBuzz",
para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos).
*/

let resultado = "";

// Recorremos los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultado += "FizzBuzz"; // "Divisible por 3 y 5";
    } else if (i % 3 === 0) {
        resultado += "Fizz"; // "Divisible por 3";
    } else if (i % 5 === 0) {
        resultado += "Buzz"; // "Divisible por 5";
    } else {
        resultado += i; // Número normal
    }
    resultado += "\n"; // Saltos de línea para que sea legible
}

// Mostramos el resultado en una alerta bonita de SweetAlert2
Swal.fire({
    title: 'FizzBuzz 1-100', // Título de la alerta
    html: `<pre>${resultado}</pre>`, // usamos <pre> para respetar los saltos de línea
    width: 400, // Ancho de la alerta
    padding: '1em', // Espaciado interno
    confirmButtonText: 'Cerrar', // Texto del botón de confirmación         
    scrollbarPadding: false // Evita el salto de contenido al mostrar la barra de desplazamiento
});