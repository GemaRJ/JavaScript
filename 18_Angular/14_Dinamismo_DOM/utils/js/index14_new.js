/* Para poder acceder a nodos:  

- Etiqueta: tag -> generalista
- Class: .class -> generalista
- Id: #id -> único

Diferentes métodos para buscar: Antigua manera pero válida también:
- getElementById        -> document.getElementById("id_Buscar");
- getElementsByClassName -> document.getElementsByClassName("clase_buscar");
- getElementsByTagName   -> document.getElementsByTagName("tag_buscar");

 Devuelve el elemento único si es getElementById
 Devuelve elementos múltiples si es getElements -> HTMLCollection

 Modernas maneras de buscar:

- document.querySelector("tag")
- document.querySelector("#id")
- document.querySelector(".class")
- document.querySelectorAll(".class") -> NodeList

- Utilizar querySelector / querySelectorAll porque se pueden hacer muchas búsquedas a la vez y es muy potente:
document.querySelectorAll("div.container ul#lista-elementos li.seleccionado [img='./imagen.jpg']")
document.querySelectorAll("div.container form input[type=radio]:checked") -> Especificamos más
document.querySelectorAll("input[type=radio]:checked") -> Buscaría a todos
*/

// Esperamos a que todo el DOM esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // ---- Selección de elementos del DOM ----
  let lista = document.querySelector("#lista"); // Lista donde se agregarán los elementos
  let btnAgregar = document.querySelector("#btnAgregar"); // Botón para agregar elementos
  let btnEliminar = document.querySelector("#btnEliminar"); // Botón para eliminar el último elemento
  let btnVaciar = document.querySelector("#btnVaciar"); // Botón para vaciar toda la lista
  let inputNombre = document.querySelector("#inputNombre"); // Input donde el usuario escribe el nombre

  // ---- Evento para AGREGAR elementos ----
  btnAgregar.addEventListener("click", () => {
    // Tomamos el valor del input y eliminamos espacios en blanco al inicio y fin
    let contenido = inputNombre.value.trim();

    // Validación: si no hay contenido, mostramos alerta de error
    if (contenido.length == 0) {
      Swal.fire({
        title: "Error",
        text: "Por favor introduce algo en el nombre",
        icon: "error",
      });
    } else {
      // Creamos un nuevo elemento <li>
      let li = document.createElement("li");

      // Añadimos clases para animación (Animate.css) y estilo de lista (Bootstrap)
      li.classList.add(
        "animate__animated",
        "animate__backInRight",
        "list-group-item"
      );

      // Asignamos el texto introducido por el usuario al <li>
      li.textContent = contenido;

      // Agregamos el <li> al final de la lista
      lista.append(li);

      // Limpiamos el input para que el usuario pueda escribir otro nombre
      inputNombre.value = "";
    }
  });

  // ---- Evento para ELIMINAR el último elemento ----
  btnEliminar.addEventListener("click", () => {
    // Comprobamos que la lista tenga al menos un elemento
    if (lista.lastElementChild) {
      // Eliminamos el último <li> de la lista
      lista.removeChild(lista.lastElementChild);
    }
  });

  // ---- Evento para VACIAR toda la lista ----
  btnVaciar.addEventListener("click", () => {
    // Eliminamos todos los elementos de la lista
    lista.innerHTML = "";
  });
});
