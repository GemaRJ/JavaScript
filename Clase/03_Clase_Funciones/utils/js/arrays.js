// array -> colección de datos

const equipos = ["Barcelona", "Madrid", "Bilbao", "Atlético"];

equipos[4] = "Osasuna";
equipos[10] = "Villareal";
equipos[5] = "Real Sociedad";
equipos[1] = "R.Madrid";

//console.log(equipos);

// Para recorrer la lista, hay varias maneras de hacerlo:

// For:
/* for (let index = 0; index < equipos.length; index++) {
  const equipo = equipos[index];
  console.log(equipo);
} */

// Forin:

/* for (const key in equipos) {
  console.log(key);
} */

// Foreach: como lo conociamos del año pasado // forof
/* for (const equipo of equipos) {
  console.log(equipo);
} */

// Foreach: Es una FUNCIÓN que me permite iterar -> aplicada solo arrays
// Con tres parámetros: El elemento, El índica y lo que recorres(arrray)

// Recorrer toda la array:

/* equipos.forEach((element, i) => {
  console.log(element);
});
*/
// Equipos en posición pares:

/* equipos.forEach((element, i) => {
  if (i % 2 == 0) {
    console.log(element);
  }
});
*/

// Añadir:

// Añadir elementos al final de la array:

/* equipos.push("Getafe"); 
console.log(equipos);
*/

// Añadir elementos al principio de la array:

equipos.push("Getafe", "Rayo");
console.log(equipos.unshift("Alavés"));

// Borrar:

// Elimina el último elemento de la array:
equipos.pop();

// Elimina el primer elemento de la array:
console.log(`Elemento eliminado correctamente: ${equipos.shift()}`);

// Filtrar:
// find: retorna el primer elemento que coincida con la búsqueda

// Vamos a búscar un equipo que tenga al menos 7 letras. Y busca el primer elemento que encuentra

let busqueda = equipos.find((item) => {
  return item.length >= 7;
});
console.log(busqueda);

// filter: retorna todos los elementos que coinciden con la búsqueda
//Filtras y luego recorres
equipos
  .filter((item) => {
    return item.length >= 7;
  })

  .forEach((item) => {
    console.log(item);
  });
