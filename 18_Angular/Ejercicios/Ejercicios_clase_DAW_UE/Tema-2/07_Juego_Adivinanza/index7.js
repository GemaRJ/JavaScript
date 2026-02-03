/* 
Ejercicio 7 - Juego de adivinanza


    Crea un juego donde el programa genere un número aleatorio entre 1 y 100.
    El usuario debe adivinarlo usando `prompt()`. Utiliza operadores de comparación para dar pistas ("mayor" o "menor").
    Cuenta los intentos y cuando adivine, muestra un mensaje de felicitación con SweetAlert indicando el número de intentos realizados.
*/
// Genera un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Contador de intentos realizados por el usuario
let intentos = 0;

// Variable que indica si el usuario ha adivinado el número
let adivinado = false;

/*
    Función auxiliar para mostrar alertas con SweetAlert
    icono: tipo de alerta ('info', 'warning', 'success')
    titulo: título de la alerta
    texto: mensaje dentro de la alerta
*/
async function mostrarAlerta(icono, titulo, texto) {
    // 'await' espera a que el usuario cierre la alerta antes de continuar
    await Swal.fire({
        icon: icono,
        title: titulo,
        text: texto
    });
}

/*
    Función principal del juego
    Se declara 'async' para poder usar 'await' con SweetAlert
*/
async function jugar() {
    // Bucle que se repite hasta que el usuario adivine o cancele
    while (!adivinado) {
        // Pedimos al usuario que introduzca un número mediante prompt
        let intentoUsuario = prompt("Adivina el número entre 1 y 100:");

        // Si el usuario pulsa Cancelar en el prompt
        if (intentoUsuario === null) {
            // Mostramos alerta de salida y esperamos que se cierre
            await mostrarAlerta('info', 'Juego cancelado', 'Has salido del juego.');
            break; // Salimos del bucle y del juego
        }

        // Convertimos la entrada a número entero
        intentoUsuario = parseInt(intentoUsuario);

        // Contamos cada intento válido
        intentos++;

        // Validación: si no es un número o está fuera del rango 1-100
        if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
            // Mostramos alerta de advertencia y esperamos que se cierre
            await mostrarAlerta('warning', 'Entrada inválida', 'Introduce un número entre 1 y 100.');
            continue; // Volvemos al inicio del bucle
        }

        // Comparamos el intento con el número secreto
        if (intentoUsuario < numeroSecreto) {
            // Si el número es menor que el secreto, mostramos pista "mayor"
            await mostrarAlerta('info', 'Demasiado bajo', 'Intenta con un número mayor.');
        } else if (intentoUsuario > numeroSecreto) {
            // Si el número es mayor que el secreto, mostramos pista "menor"
            await mostrarAlerta('info', 'Demasiado alto', 'Intenta con un número menor.');
        } else {
            // Si el usuario adivinó el número
            adivinado = true; // Marcamos como adivinado

            // Mostramos alerta de éxito con el número de intentos
            await mostrarAlerta('success', '¡Felicidades!', `Has adivinado el número ${numeroSecreto} en ${intentos} intentos.`);
        }
    }
}

// Inicia el juego llamando a la función asíncrona
jugar();


/*
     Aclaración general:

    - Este juego utiliza SweetAlert (Swal.fire()) para mostrar alertas bonitas.
    - Swal.fire() es asíncrono y devuelve una promesa que se resuelve cuando
      el usuario cierra la alerta.
    - Para que cada alerta se muestre antes de pedir el siguiente número, usamos:
        1. Función principal declarada como 'async'
        2. 'await' delante de Swal.fire()
    - Así, los mensajes de "mayor", "menor" o "felicidades" aparecen en orden correcto.
*/