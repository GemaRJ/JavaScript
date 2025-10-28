// ==============================
// ALERTAS, CONFIRMACIONES Y PROMPT
// ==============================

// Alerta simple
alert("El proceso se ha terminado");

// Confirmación (sí/no)
let confirmacion = confirm("¿Estás seguro que quieres continuar?");
if (confirmacion) {
    console.log("El usuario aceptó");
} else {
    console.log("El usuario canceló");
}

// Prompt para pedir datos al usuario
let nombre = prompt("Por favor, introduce tu nombre");
console.log("Nombre introducido:", nombre);

// Ejemplo combinando prompt y confirm
let respuesta = confirm(`¿Quieres evaluar el nombre ${nombre}?`);

if (respuesta) {
    // Comprobamos si contiene la letra 'a'
    let tieneA = nombre.toLowerCase().includes('a');
    if (tieneA) {
        alert("El nombre introducido tiene al menos una 'a'");
    } else {
        alert("El nombre introducido no tiene ninguna 'a'");
    }
} else {
    alert("Proceso terminado");
}
