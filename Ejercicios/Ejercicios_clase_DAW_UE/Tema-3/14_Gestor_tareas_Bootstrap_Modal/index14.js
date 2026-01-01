document.addEventListener("DOMContentLoaded", () => {
  // Selectores
  let formularioTarea = document.querySelector("#formTarea");
  let listaTareas = document.querySelector("#listaTareas");
  let modalTarea = new bootstrap.Modal(document.querySelector("#tareaModal"));

  // Evento submit del formulario
  formularioTarea.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar recargar la página

    // Obtener valores de inputs
    let titulo = document.querySelector("#tituloTarea").value.trim();
    let descripcion = document.querySelector("#descripcionTarea").value.trim();
    let prioridad = document.querySelector("#prioridadTarea").value;

    // Validación
    if (titulo === "" || descripcion === "" || prioridad === "") {
      Swal.fire("Error", "Completa todos los campos de la tarea", "error");
      return;
    }

    // Crear elemento de lista
    let tarea = document.createElement("li");
    tarea.className =
      "list-group-item d-flex justify-content-between align-items-start animate__animated animate__fadeIn";

    // Contenido de la tarea con badges y botones
    tarea.innerHTML = `
      <div class="ms-2 me-auto">
        <div class="fw-bold">${titulo}</div>
        ${descripcion}
        <span class="badge ${
          prioridad === "alta"
            ? "bg-danger"
            : prioridad === "media"
            ? "bg-warning text-dark"
            : "bg-success"
        } ms-2">${prioridad.toUpperCase()}</span>
      </div>
      <div>
        <button class="btn btn-sm btn-success me-1 completar">✔</button>
        <button class="btn btn-sm btn-danger eliminar">✖</button>
      </div>
    `;

    // Botón completar: añade/remueve line-through
    let btnCompletar = tarea.querySelector(".completar");
    btnCompletar.addEventListener("click", () => {
      tarea.classList.toggle("text-decoration-line-through");
    });

    // Botón eliminar
    let btnEliminar = tarea.querySelector(".eliminar");
    btnEliminar.addEventListener("click", () => {
      tarea.remove();
    });

    // Añadir tarea a la lista
    listaTareas.appendChild(tarea);

    // Cerrar modal y limpiar formulario
    modalTarea.hide();
    formularioTarea.reset();
  });
});
