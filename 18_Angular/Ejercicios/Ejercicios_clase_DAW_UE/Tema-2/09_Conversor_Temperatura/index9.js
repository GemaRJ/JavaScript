
/* 
Ejercicio 9 - Conversor de temperaturas
Enunciado Crea un conversor que solicite al usuario una temperatura y la unidad de origen (Celsius o Fahrenheit) mediante prompt().
Utiliza operadores aritméticos para realizar la conversión a la otra unidad.
Valida que la entrada sea numérica y muestra el resultado formateado con dos decimales usando SweetAlert.
*/

// Función para iniciar el conversor
function conversorTemperaturas() {
    // Pedimos la temperatura al usuario
    let temp = prompt("Introduce la temperatura a convertir:");
    
    if (temp === null) {
        // Si pulsa cancelar
        Swal.fire("Conversión cancelada", "No se ha realizado ninguna conversión.", "info");
        return;
    }
    
    temp = parseFloat(temp); // Convertimos a número decimal
    
    if (isNaN(temp)) {
        // Validación: entrada no numérica
        Swal.fire("Error", "Debes introducir un número válido.", "error");
        return;
    }
    
    // Pedimos la unidad de origen
    let unidad = prompt("Indica la unidad de origen: C para Celsius, F para Fahrenheit").toUpperCase();
    
    if (unidad === null) {
        Swal.fire("Conversión cancelada", "No se ha realizado ninguna conversión.", "info");
        return;
    }
    
    // Validación de unidad
    if (unidad !== "C" && unidad !== "F") {
        Swal.fire("Error", "Debes introducir C para Celsius o F para Fahrenheit.", "error");
        return;
    }
    
    let resultado, mensaje;
    
    if (unidad === "C") {
        // Celsius a Fahrenheit
        resultado = (temp * 9/5) + 32;
        mensaje = `${temp.toFixed(2)}°C equivalen a ${resultado.toFixed(2)}°F`;
    } else {
        // Fahrenheit a Celsius
        resultado = (temp - 32) * 5/9;
        mensaje = `${temp.toFixed(2)}°F equivalen a ${resultado.toFixed(2)}°C`;
    }
    
    // Mostramos el resultado con SweetAlert
    Swal.fire({
        title: "Resultado de la conversión",
        text: mensaje,
        icon: "success",
        confirmButtonText: "Aceptar"
    });
}

// Llamamos a la función para iniciar el conversor
conversorTemperaturas();
