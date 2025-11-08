/*
Gestor de Tareas:
    
    Crea una aplicación que permita al usuario añadir tareas a un array.
    Utiliza `prompt()` para solicitar las tareas y un bucle para permitir añadir múltiples tareas.
    Cuando el usuario cancele, muestra todas las tareas almacenadas en el array utilizando SweetAlert con formato de lista.
*/

let tareas = [];

// Iniciamos un bucle infinito que solo se detendrá cuando el usuario pulse "Cancelar"
while (true) {

    // Mostramos una ventana prompt para que el usuario escriba una tarea
    let tarea = prompt("Introduce una tarea para añadir a la lista (o pulsa Cancelar para finalizar):");

    // Si el usuario pulsa "Cancelar" (tarea === null), salimos del bucle con break
    if (tarea === null) {
        break;
    }else{
    // Si el usuario ha escrito algo (no está vacío ni solo espacios)
    if (tarea.trim() !== "") {
        // Añadimos la tarea (sin espacios al inicio o al final) al array 'tareas'
        tareas.push(tarea.trim());
    }
 
    }
}

// Cuando el bucle termina, comprobamos si hay tareas guardadas
if (tareas.length > 0) {
    // Creamos una lista HTML con las tareas
    let listaTareas = '<ul>';
    tareas.forEach(t => {
        listaTareas += `<li>${t}</li>`;
    });
    listaTareas += '</ul>';

    // Mostramos las tareas en una ventana SweetAlert2 con formato de lista
    Swal.fire({
        title: 'Lista de Tareas',
        html: listaTareas,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#0d6efd'
    });

} else {
    // Si no hay tareas, mostramos un aviso
    Swal.fire({
        title: 'No hay tareas',
        text: 'No se han añadido tareas a la lista.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#ffc107'
    });
}
