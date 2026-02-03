/* 
Ejercicio 10 - Generador de estadísticas
Enunciado Desarrolla una aplicación que solicite al usuario introducir números mediante prompt() hasta que cancele.
Almacena los números en un array y calcula: suma total, promedio, valor máximo y valor mínimo.
Recorre el array para obtener estas estadísticas y muestra todos los resultados de forma clara y organizada utilizando SweetAlert.
*/

// Función principal del generador de estadísticas
function generarEstadisticas() {
    let numeros = []; // Array para almacenar los números ingresados
    let entrada = ""; // Inicializamos la variable

    // Bucle para pedir números hasta que el usuario pulse Cancelar
    while (true) {
        entrada = prompt("Introduce un número (pulsa Cancelar para finalizar):");

        // Si el usuario pulsa Cancelar, salimos del bucle
        if (entrada === null) {
            break;
        }

        // Convertimos la entrada a número decimal
        let numero = parseFloat(entrada);

        // Validación: si no es un número, mostramos alerta y pedimos de nuevo
        if (isNaN(numero)) {
            Swal.fire("Entrada inválida", "Debes introducir un número válido.", "warning");
            continue; // vuelve al inicio del bucle
        }

        // Si es válido, lo agregamos al array
        numeros.push(numero);
    }

    // Si no se introdujo ningún número
    if (numeros.length === 0) {
        Swal.fire("No hay datos", "No se introdujeron números.", "info");
        return;
    }

    // Calculamos estadísticas
    let suma = 0;
    let max = numeros[0];
    let min = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        if (numeros[i] > max) max = numeros[i];
        if (numeros[i] < min) min = numeros[i];
    }

    let promedio = suma / numeros.length;

    // Construimos el mensaje a mostrar
    let mensaje = `
        <p><strong>Números ingresados:</strong> ${numeros.join(", ")}</p>
        <p><strong>Suma total:</strong> ${suma}</p>
        <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Valor máximo:</strong> ${max}</p>
        <p><strong>Valor mínimo:</strong> ${min}</p>
    `;

    // Mostramos resultados con SweetAlert
    Swal.fire({
        title: "Estadísticas de los números",
        html: mensaje,
        icon: "info",
        confirmButtonText: "Aceptar"
    });
}

// Llamamos a la función para iniciar el generador
generarEstadisticas();
