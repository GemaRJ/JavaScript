/* 
Ejercicio: Dibujar un rectángulo de asteriscos
----------------------------------------------
Pide al usuario que introduzca el número de filas y columnas mediante prompt().
Después, muestra en la consola un rectángulo formado por asteriscos (*).

Ejemplo de salida (si filas = 3 y columnas = 5):

*****
*****
*****
*/


let filas = parseInt(prompt("Introduce el número de filas (mayor que 0):"));
let columnas = parseInt(prompt("Introduce el número de columnas (mayor que 0):"));

// Validación de datos
if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    Swal.fire(" Error", "Por favor, introduce números válidos mayores que 0.", "error");
} else {
    let rectangulo = "";

    // Generamos el rectángulo
    for (let i = 1; i <= filas; i++) {
        for (let j = 1; j <= columnas; j++) {
            rectangulo += "*";
        }
        rectangulo += "\n"; // salto de línea entre filas
    }

    // Mostramos con SweetAlert
    Swal.fire({
        title: `Rectángulo de ${filas} x ${columnas}`,
        html: `<pre style="font-size:16px; text-align:left;">${rectangulo}</pre>`,
        icon: "success"
    });
}
