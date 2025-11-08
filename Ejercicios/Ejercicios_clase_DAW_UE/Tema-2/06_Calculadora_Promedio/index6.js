/* 
Ejercicio 6 - Calculadora de promedio
    
    Desarrolla una aplicación que solicite al usuario introducir 5 calificaciones usando `prompt()`.
    Almacena las calificaciones en un array, calcula el promedio recorriendo el array, y determina si el estudiante ha aprobado (promedio >= 5).
    Muestra el resultado con SweetAlert incluyendo el promedio y el estado (aprobado/suspendido).
*/

// Creamos un array vacío donde guardaremos las 5 calificaciones
let calificaciones = [];

// Bucle que se ejecutará 5 veces para pedir las 5 calificaciones al usuario
for (let i = 0; i < 5; i++) {
    // Pedimos una calificación con prompt() y convertimos el valor a número decimal
    let calificacion = parseFloat(prompt(`Introduce la calificación ${i + 1}:`));

    // Añadimos la calificación introducida al array 'calificaciones'
    calificaciones.push(calificacion);
}

// Verificamos si alguna de las calificaciones no es un número válido (NaN)
if (calificaciones.some(isNaN)) {
    // Si hay algún valor no numérico, mostramos un mensaje de error con SweetAlert2
    Swal.fire({
        icon: 'error',
        title: 'Error',
        html: '<strong>Por favor, introduce solo números válidos</strong> para las calificaciones.'
    });
} 
else {
    // Si todas las calificaciones son válidas, calculamos la suma total
    let suma = 0;

    // Recorremos el array sumando cada calificación
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }

    // Calculamos el promedio dividiendo la suma entre el número total de calificaciones
    let promedio = suma / calificaciones.length;

    // Si el promedio es mayor o igual a 5, el estudiante aprueba
    if (promedio >= 5) {
        Swal.fire({
            icon: 'success',
            title: 'Aprobado',
            html: `Tu promedio es <strong>${promedio.toFixed(2)}</strong><br>¡Felicidades!`
        });
    } 
    // Si el promedio es menor que 5, el estudiante suspende
    else {
        Swal.fire({
            icon: 'error',
            title: 'Suspendido',
            html: `Tu promedio es <strong>${promedio.toFixed(2)}</strong><br>Debes mejorar.`
        });
    }
}

