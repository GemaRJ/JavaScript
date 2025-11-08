/* 
MÉTODOS DE BÚSQUEDA Y FILTRADO EN ARRAYS
(find, filter, includes, indexOf)
====================================================================

Estos métodos sirven para buscar, comprobar o filtrar elementos dentro de arrays o cadenas.
Son muy usados en validaciones, formularios, o búsquedas dinámicas.

-------------------------------------------------------------
 1️. find()
-------------------------------------------------------------
 Busca el **primer elemento** que cumpla una condición.
 Devuelve el valor encontrado o `undefined` si no existe.

Ejemplo:
----------------------------------
let frutas = ["manzana", "banana", "naranja", "pera", "uva"];
let frutaEncontrada = frutas.find(f => f.startsWith("n"));
console.log(frutaEncontrada); //  "naranja"
----------------------------------
 Devuelve **solo una coincidencia**.


-------------------------------------------------------------
 2️. filter()
-------------------------------------------------------------
 Busca **todos los elementos** que cumplan una condición.
 Devuelve un **nuevo array** con los resultados.

Ejemplo:
----------------------------------
let numeros = [10, 25, 30, 42, 50, 63];
let mayoresDe30 = numeros.filter(n => n > 30);
console.log(mayoresDe30); //  [42, 50, 63]
----------------------------------
 Devuelve **varios resultados posibles**.


-------------------------------------------------------------
 3️. includes()
-------------------------------------------------------------
 Comprueba si un **array o string contiene un valor exacto**.
 Devuelve un **booleano** (`true` o `false`).

Ejemplo:
----------------------------------
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.includes("banana")); //  true
console.log(frutas.includes("pera"));   //  false
----------------------------------
 Ideal para comprobar si algo existe sin buscar su posición.


-------------------------------------------------------------
 4️. indexOf()
-------------------------------------------------------------
 Busca la **posición (índice)** de un elemento dentro del array.
 Devuelve el número de índice o `-1` si no existe.

Ejemplo:
----------------------------------
let frutas = ["manzana", "banana", "naranja", "pera"];
let posicion = frutas.indexOf("naranja");

if (posicion !== -1) {
  console.log(`"naranja" está en la posición ${posicion}`);
} else {
  console.log("La fruta no existe en el array");
}
----------------------------------
 Resultado: `"naranja" está en la posición 2"`
 Similar a `includes()`, pero en lugar de `true/false`, devuelve el **índice**.
 `indexOf()` es **sensible a mayúsculas y minúsculas**.


-------------------------------------------------------------
 5️.  Diferencias principales
-------------------------------------------------------------
| Método     | Devuelve                | Tipo de resultado | Ideal para...                             |
|-------------|--------------------------|--------------------|-------------------------------------------|
| includes()  | true / false             | Booleano           | Saber si un valor existe                  |
| indexOf()   | Índice o -1             | Número             | Saber la posición de un valor             |
| find()      | Primer valor encontrado  | Elemento simple    | Obtener un único resultado                |
| filter()    | Todos los que coinciden  | Array nuevo        | Obtener varios resultados                 |


-------------------------------------------------------------
 6️. Ejemplo combinado de todos
-------------------------------------------------------------
let frutas = ["manzana", "banana", "naranja", "pera", "uva", "mango"];
let buscar = prompt("Introduce una fruta:").toLowerCase();

// includes → existe o no
if (frutas.includes(buscar)) {
  let posicion = frutas.indexOf(buscar);
  Swal.fire({
    icon: 'success',
    title: 'Fruta encontrada',
    text: `La fruta "${buscar}" está en la posición ${posicion}.`
  });
}
// find → primera coincidencia con una condición personalizada
else if (frutas.find(f => f.startsWith(buscar[0]))) {
  let coincidencia = frutas.find(f => f.startsWith(buscar[0]));
  Swal.fire({
    icon: 'info',
    title: 'Coincidencia parcial',
    text: `No está exactamente, pero tenemos una fruta que empieza por esa letra: ${coincidencia}.`
  });
}
// filter → varias coincidencias similares
else {
  let similares = frutas.filter(f => f.includes(buscar));
  if (similares.length > 0) {
    Swal.fire({
      icon: 'info',
      title: 'Frutas similares',
      text: `Frutas que contienen "${buscar}": ${similares.join(", ")}`
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'No encontrada',
      text: 'Esa fruta no está en la lista ni hay coincidencias parecidas.'
    });
  }
}
----------------------------------
 `includes()` → Verifica si existe.
 `indexOf()` → Indica la posición.
 `find()` → Devuelve un solo resultado.
 `filter()` → Devuelve varios resultados.


-------------------------------------------------------------
 7️. Consejo rápido de uso
-------------------------------------------------------------
 Usa `includes()` si solo quieres saber si **está o no está**.
 Usa `indexOf()` si necesitas **saber su posición**.
 Usa `find()` para **una coincidencia específica** (por condición).
 Usa `filter()` para **todas las coincidencias posibles**.
-------------------------------------------------------------
*/
