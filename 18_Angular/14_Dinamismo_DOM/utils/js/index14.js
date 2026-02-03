/* Para poder acceder a nodos:  

- Etiqueta: tag -> generalista
- Class: .class -> generalista
- Id: #id -> único

Diferentes métodos para buscar:
- getElementById        -> document.getElementById("id_Buscar");
- getElementsByClassName -> document.getElementsByClassName("clase_buscar");
- getElementsByTagName   -> document.getElementsByTagName("tag_buscar");

 Devuelve el elemento único si es getElementById
 Devuelve elementos múltiples si es getElements -> HTMLCollection

- document.querySelector("tag")
- document.querySelector("#id")
- document.querySelector(".class")
- document.querySelectorAll(".class") -> NodeList

- Utilizar querySelector / querySelectorAll porque se pueden hacer muchas búsquedas a la vez y es muy potente:
document.querySelectorAll("div.container ul#lista-elementos li.seleccionado [img='./imagen.jpg']")
document.querySelectorAll("div.container form input[type=radio]:checked") -> Especificamos más
document.querySelectorAll("input[type=radio]:checked") -> Buscaría a todos
*/
document.addEventListener("DOMContentLoaded", () => {
  let contador = 0;
  let botonAnalizar = document.querySelector("#botonAnalizar");
  let botonAnadir = document.querySelector("#botonAnadir");
  let inputNombre = document.querySelector("#inputNombre");
  let parrafocontador = document.querySelector("#contador");

  // Cambiar clases de todos los <li>
  botonAnalizar.addEventListener("click", () => {
    let nodos = document.querySelectorAll("li");
    nodos.forEach((element) => {
      element.className = "list-group-item active";
    });
  });

  // Añadir elemento a la lista con el texto del input
  botonAnadir.addEventListener("click", () => {
    let lista = document.querySelector("ul");
    let nombre = inputNombre.value.trim();

    if (nombre) {
      lista.innerHTML += `<li class="list-group-item">Nombre: ${nombre}</li>`;
      inputNombre.value = "";
      contador++;
      parrafocontador.textContent = contador;
    } else {
      lista.innerHTML += `<li class="list-group-item">No hay nombre para añadir</li>`;
    }
  });
});
