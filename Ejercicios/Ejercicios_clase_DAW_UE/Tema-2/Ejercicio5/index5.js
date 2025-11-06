/* 
##  Ejercicio 5 - Búsqueda en array

 Enunciado:
Crea un array con nombres de frutas.
Solicita al usuario que introduzca una fruta mediante `prompt()` y busca si existe en el array.
Utiliza métodos de array como `indexOf()` o `includes()`.
Muestra con SweetAlert si la fruta fue encontrada y en qué posición, o un mensaje indicando que no existe.
*/

let frutas = ['manzana', 'banana', 'naranja', 'pera', 'uva', 'mango'];

// Solicitamos al usuario una fruta
let frutaBuscada = prompt("Introduce el nombre de una fruta:").toLowerCase(); // Convertimos a minúsculas para evitar problemas de mayúsculas/minúsculas

// Usamos includes() para verificar si la fruta existe en el array
if (frutas.includes(frutaBuscada)) {
    // Si existe, obtenemos su posición con indexOf()
    let posicion = frutas.indexOf(frutaBuscada);

    Swal.fire({
        title: 'Fruta encontrada',
        text: `La fruta "${frutaBuscada}" fue encontrada en la posición ${posicion}.`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#0d6efd'
    });
} else {
    Swal.fire({
        title: ' Fruta no encontrada',
        text: 'La fruta que has introducido no existe en el array.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#dc3545'
    });
}

/* 
 Alternativas:

1.find()
- Busca el primer elemento que cumpla una condición y lo devuelve.
- Si no encuentra ninguno, devuelve undefined.
---------------------------------------------------
let frutaEncontrada = frutas.find(f => f === frutaBuscada);

if (frutaEncontrada) {
   console.log(`Fruta encontrada: ${frutaEncontrada}`);
} else {
   console.log("No se encontró la fruta.");
}
---------------------------------------------------

2️.filter()
- Devuelve un nuevo array con todos los elementos que cumplan la condición.
- Si no encuentra ninguno, devuelve un array vacío [].
---------------------------------------------------
let frutasFiltradas = frutas.filter(f => f === frutaBuscada);

if (frutasFiltradas.length > 0) {
   console.log(`Fruta encontrada: ${frutasFiltradas[0]}`);
} else {
   console.log("No se encontró la fruta.");
}
---------------------------------------------------

Resumen de diferencias:
| Método     | Devuelve                     | Ideal para...                          |
|-------------|------------------------------|----------------------------------------|
| includes()  | true / false                 | Saber si un elemento existe            |
| find()      | El primer valor encontrado   | Obtener el valor directamente          |
| filter()    | Un array con coincidencias   | Obtener todos los valores que coinciden|
*/
