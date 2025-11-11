/* ===========================================================
   🧠 ACCESO A NODOS DEL DOM
=========================================================== */

/*
Podemos acceder a los elementos (nodos) de una página HTML de tres formas:

1️⃣ Por **etiqueta** (tag):        <p>, <div>, <li>...
   👉 Ejemplo de búsqueda: document.getElementsByTagName("p")

2️⃣ Por **clase** (class):         class="nombreClase"
   👉 Ejemplo: document.getElementsByClassName("miClase")

3️⃣ Por **id** (único):            id="nombreId"
   👉 Ejemplo: document.getElementById("miId")

📌 Diferencias:
- Los métodos que empiezan con getElement (en singular) → devuelven **un único elemento**.
- Los que usan getElements (en plural) → devuelven **una colección de elementos** (HTMLCollection o NodeList).

📚 Métodos modernos y más potentes:
- document.querySelector("selectorCSS")       → devuelve el PRIMER elemento que cumpla la búsqueda.
- document.querySelectorAll("selectorCSS")    → devuelve TODOS los elementos que cumplan la búsqueda (NodeList).

Ejemplos:
document.querySelector("div.container ul#lista-elementos li.seleccionado [img='./imagen.jpg']");
document.querySelectorAll("input[type=radio]:checked");

👉 Estos métodos son los más recomendables porque permiten usar selectores complejos de CSS.
*/


/* ===========================================================
   💡 EJEMPLO DE MANIPULACIÓN DE ELEMENTOS DEL DOM
=========================================================== */

/*
// Ejemplo básico: seleccionamos el primer botón del documento
let botonAnalizar = document.querySelector("button");
console.log(botonAnalizar);

// Si hay varios botones, solo seleccionará el primero.
// Podemos modificar su texto o su clase CSS:
botonAnalizar.textContent = "Investigar";      // Cambia el texto del botón
botonAnalizar.className = "btn btn-danger";    // Cambia la clase (y por tanto el color o estilo)
*/


/* ===========================================================
   🚀 FUNCIONALIDAD COMPLETA: CAMBIAR CLASES Y AÑADIR ELEMENTOS
=========================================================== */

// Esperamos a que todo el documento HTML haya cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  
  // Declaramos variables para los elementos que vamos a manipular
  let contador = 0;
  let botonAnalizar = document.querySelector("#botonAnalizar"); // Botón para cambiar las clases de los <li>
  let botonAnadir = document.querySelector("#botonAnadir");     // Botón para añadir un nuevo elemento a la lista
  let inputNombre = document.querySelector("#inputNombre");     // Campo de texto donde el usuario escribe el nombre
  let parrafocontador = document.querySelector("#contador");    // Elemento que mostrará cuántos nombres se han añadido


  /* 🔹 Evento 1: Cambiar las clases de todos los <li> cuando se pulse "Analizar" */
  botonAnalizar.addEventListener("click", () => {
    // Seleccionamos todos los elementos <li> de la lista
    let nodos = document.querySelectorAll("li");

    // Recorremos cada uno y le aplicamos la clase Bootstrap "list-group-item active"
    nodos.forEach((element) => {
      element.className = "list-group-item active";
    });
  });


  /* 🔹 Evento 2: Añadir un nuevo elemento <li> a la lista con el texto del input */
  botonAnadir.addEventListener("click", () => {
    let lista = document.querySelector("ul");       // Buscamos la lista <ul>
    let nombre = inputNombre.value.trim();          // Leemos el valor del input y eliminamos espacios

    if (nombre) {
      // Si el input no está vacío, añadimos un nuevo <li> con el nombre introducido
      lista.innerHTML += `<li class="list-group-item">Nombre: ${nombre}</li>`;
      inputNombre.value = "";                       // Vaciamos el campo de texto
      contador++;                                   // Incrementamos el contador
      parrafocontador.textContent = contador;       // Actualizamos el contador en pantalla
    } else {
      // Si el input está vacío, mostramos un mensaje de aviso
      lista.innerHTML += `<li class="list-group-item">No hay nombre para añadir</li>`;
    }
  });
});
