/* 
Operaciones recurrentes con confirmación y retraso entre resultados

- Pedimos dos números al usuario (fuera de la función)
- Preguntamos si quiere realizar las operaciones
- Si acepta, mostramos los resultados por consola con un espacio de 2 segundos entre cada uno
- Validamos división entre 0 y errores de tipo de dato
*/

// Pedimos los números
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

// Validamos números
if (isNaN(num1) || isNaN(num2)) {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes introducir números válidos.",
        confirmButtonText: "Entendido"
    });
} else {
    // Preguntamos si quiere realizar las operaciones
    if (confirm("¿Quieres realizar las operaciones con estos números?")) {

        // Calculamos operaciones
        let suma = num1 + num2;
        let resta = num1 - num2;
        let multiplicacion = num1 * num2;
        let division = (num2 === 0) ? "No se puede dividir entre 0" : (num1 / num2).toFixed(2);

        // Creamos un array de resultados
        let resultados = [
            `Suma: ${suma}`,
            `Resta: ${resta}`,
            `Multiplicación: ${multiplicacion}`,
            `División: ${division}`
        ];

        // Función recursiva para mostrar SweetAlert uno a uno con 2 segundos
        function mostrarResultado(i) {
            if (i < resultados.length) {
                Swal.fire({
                    icon: "info",
                    title: "Resultado",
                    text: resultados[i],
                    showConfirmButton: false,
                    timer: 2000
                }).then(() => {
                    mostrarResultado(i + 1);
                });
            }
        }

        // Llamamos a la función con el primer resultado
        mostrarResultado(0);

    } else {
        Swal.fire({
            icon: "info",
            title: "Operaciones canceladas",
            text: "No se realizarán las operaciones.",
            confirmButtonText: "Aceptar"
        });
    }
}
