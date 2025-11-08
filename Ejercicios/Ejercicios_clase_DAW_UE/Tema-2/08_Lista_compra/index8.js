/* 
Ejercicio 8 - Lista de compras interactiva
Menú de opciones para gestionar una lista de compras:
1) Añadir productos (con prompt())
2) Ver la lista completa,
3) Eliminar un producto por nombre,
4) Vaciar la lista.

Usa confirm() para las acciones de eliminación y muestra la lista actualizada con SweetAlert después de cada operación.

*/

// Lista de compras vacía al inicio
let listaCompras = [];

// Función para mostrar la lista usando SweetAlert
// Recibe un "callback", que es la función que se ejecutará después de cerrar la alerta

function mostrarLista(callback) {
    if (listaCompras.length === 0) {
        // Si la lista está vacía, mostramos mensaje informativo
        Swal.fire('Lista de compras', 'La lista está vacía.', 'info')
            .then(callback); // Cuando el usuario cierre la alerta, llamamos al callback (volver al menú)
    } else {
        // Si hay productos, los mostramos numerados
        let html = '';
        for (let i = 0; i < listaCompras.length; i++) {
            html += `<p>${i + 1}. ${listaCompras[i]}</p>`;
        }
        // Mostramos la lista con SweetAlert
        Swal.fire({ title: 'Lista de compras', html: html, icon: 'info' })
            .then(callback); // Callback para volver al menú después de cerrar la alerta
    }
}

// Función principal que gestiona el menú y las acciones del usuario
function gestionarLista() {
    // Mostramos el menú con prompt
    let opcion = prompt(
        "Lista de Compras:\n" +
        "1) Añadir producto\n" +
        "2) Ver lista\n" +
        "3) Eliminar producto\n" +
        "4) Vaciar lista\n" +
        "5) Salir\n\n" +
        "Introduce el número de la acción:"
    );

    // Si el usuario pulsa Cancelar o elige 5, termina el programa
    if (opcion === null || opcion === '5') {
        Swal.fire('Programa finalizado', 'Has salido de la lista de compras.', 'info');
        return; // Salimos de la función
    }

    switch (opcion) {
        case '1': // Añadir producto
            let producto = prompt("Introduce el nombre del producto:");
            if (producto && producto.trim() !== '') {
                listaCompras.push(producto.trim()); // Guardamos el producto en la lista
            } else {
                // Si no se introduce nada, mostramos alerta de advertencia
                Swal.fire('Entrada inválida', 'No se ha añadido ningún producto.', 'warning');
            }
            mostrarLista(gestionarLista); // Mostramos la lista y luego volvemos al menú
            break;

        case '2': // Ver lista
            mostrarLista(gestionarLista); // Mostramos la lista y luego volvemos al menú
            break;

        case '3': // Eliminar producto
            if (listaCompras.length === 0) {
                // Si la lista está vacía, mostramos aviso
                Swal.fire('Eliminar producto', 'La lista está vacía.', 'info')
                    .then(gestionarLista);
            } else {
                let productoEliminar = prompt("Introduce el nombre del producto a eliminar:");
                if (productoEliminar && listaCompras.includes(productoEliminar.trim())) {
                    if (confirm(`¿Seguro que quieres eliminar "${productoEliminar.trim()}"?`)) {
                        // Filtramos la lista para eliminar el producto
                        listaCompras = listaCompras.filter(item => item !== productoEliminar.trim());
                    }
                } else {
                    Swal.fire('No encontrado', 'Ese producto no está en la lista.', 'warning');
                }
                mostrarLista(gestionarLista); // Mostramos la lista actualizada y volvemos al menú
            }
            break;

        case '4': // Vaciar lista
            if (listaCompras.length === 0) {
                Swal.fire('Vaciar lista', 'La lista ya está vacía.', 'info')
                    .then(gestionarLista); // Volvemos al menú
            } else if (confirm("¿Seguro que quieres vaciar toda la lista?")) {
                listaCompras = []; // Vaciamos la lista
                mostrarLista(gestionarLista); // Mostramos lista vacía y volvemos al menú
            } else {
                gestionarLista(); // Si cancela, volvemos al menú
            }
            break;

        default: // Opción inválida
            Swal.fire('Opción inválida', 'Introduce un número del 1 al 5.', 'warning')
                .then(gestionarLista); // Volvemos al menú
    }
}

// Inicia el programa
gestionarLista();
