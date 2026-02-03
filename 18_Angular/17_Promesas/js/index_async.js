let url = "https://dummyjson.com/products";
let boton = document.querySelector("#botonGuardar");

fetch(url);

// 1.  Lanzo la petición al servidor
// 2.  Con el THEN analizo la respuesta
// 3.  Dentro de ese THEN la paso a JSON()
// 4.  En otro THEN analizo la respuesta de la traducción
// 5.  Trato la respuesta

// Como puedo analizar una PROMESA de manera diferente? La metenemos dentro de una función.
// Palabras reservadas:
// AWAIT -> Indica que una función donde esta aplicada es una promesa y no tengo que usar el THEN parfa obtener la respuesta.
// Se obtiene de manera automática.
// ASYNC -> Asincrono, indica aquella función donde se aplica el modificador await que tiene ese asincrono

async function obtenerProductos(url) {
  let respuesta = await fetch(url);
  let json = await respuesta.json();
  console.log("Ejecutando");

  console.log(json.products);
}
async function obtenerUsuarios(url) {
  let respuesta = await fetch(url);
  let json = await respuesta.json();
  console.log("Ejecutando");

  console.log(json.users);
}
//obtenerProductos(url);
//obtenerUsuarios("https://dummyjson.com/users");

// Más sencillo que el otro index.js: then/catch/finally
// Es lo mismo pero mucho más limpio el código

// Guardar datos en Localstorage o Sessionstorage

// clear => vacía el localstorage, lo dejaría a cero de almacenaje
// setItem => Guardar dato
// getItem => Tú me das una clave y yo te doy un valor asociado

boton.addEventListener("click", (e) => {
  let objeto = {
    nombre: "Gema",
    apellido: "Rodríguez",
    asignaturas: ["DAW", "PRO", "FPRO"],
  };
  localStorage.setItem("dato", JSON.stringify(objeto));
  /* localStorage.setItem("clase", "DAW");
  localStorage.setItem("contenido", "JS");
  localStorage.setItem("profesor", "Borja");
  localStorage.setItem("horas", 2);
  
  //Para recuperar:
  let asignatura = localStorage.getItem("clase");
  console.log(asignatura);
  */
});
