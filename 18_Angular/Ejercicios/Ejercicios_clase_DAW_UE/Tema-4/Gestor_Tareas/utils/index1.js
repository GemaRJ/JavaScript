document.addEventListener("DOMContentLoaded", function () {
  let formularioTarea = document.querySelector("#formularioTarea");
  let nombreTarea = document.querySelector("#nombreTarea");
  let descripcionTarea = document.querySelector("#descripcionTarea");
  let fechaTarea = document.querySelector("#fechaTarea");
  let esPrioritaria = document.querySelector("#esPrioritaria");
  let prioridadTarea = document.querySelector("#prioridadTarea");
  let urlImagenTarea = document.querySelector("#urlImagenTarea");

  let filtroPrioridad = document.querySelector("#filtroPrioridad");
  let listaFiltrada = document.querySelector("#listaFiltrada");

  let contenedorCartas = document.querySelector("#contenedorCartas");

  let tareas = [];

  // Renderizar lista filtrada
  let renderizarListaFiltrada = function () {
    listaFiltrada.innerHTML = "";
    let filtro = filtroPrioridad.value;

    let filtradas = tareas
      .filter((tarea) => !tarea.completa)
      .filter((tarea) => filtro === "todas" || tarea.prioridad === filtro);

    filtradas.forEach((tarea) => {
      let li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.textContent = tarea.titulo;

      let badge = document.createElement("span");
      badge.className =
        "badge rounded-pill " +
        (tarea.prioridad === "alta"
          ? "bg-danger"
          : tarea.prioridad === "media"
          ? "bg-warning"
          : "bg-success");
      badge.textContent = tarea.prioridad;

      li.appendChild(badge);
      listaFiltrada.appendChild(li);
    });
  };

  // Renderizar cartas
  let renderizarCartas = function () {
    contenedorCartas.innerHTML = "<h3>Todas las tareas</h3>";

    tareas
      .filter((tarea) => !tarea.completa)
      .forEach((tarea) => {
        let carta = document.createElement("div");
        carta.className = "card mb-3";
        carta.innerHTML = `
          <div class="card-body">
            <img src="${tarea.imagen}" class="float-end ms-2" width="60" height="60">
            <h5 class="card-title">${tarea.titulo}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Prioridad: ${tarea.prioridad}</h6>
            <p class="card-text">${tarea.descripcion}</p>
            <p class="card-text"><small class="text-muted">${tarea.fecha}</small></p>
            <button class="btn btn-success completar">Completar</button>
          </div>
        `;
        contenedorCartas.appendChild(carta);

        // Botón completar
        let botonCompletar = carta.querySelector(".completar");
        botonCompletar.addEventListener("click", function () {
          tarea.completa = true;
          renderizarListaFiltrada();
          renderizarCartas();
        });
      });
  };

  // Agregar nueva tarea
  formularioTarea.addEventListener("submit", function (e) {
    e.preventDefault();
    let nuevaTarea = new Tarea(
      Date.now(),
      nombreTarea.value.trim(),
      descripcionTarea.value.trim(),
      fechaTarea.value,
      esPrioritaria.checked,
      prioridadTarea.value,
      urlImagenTarea.value.trim() || null
    );

    tareas.push(nuevaTarea);
    formularioTarea.reset();

    renderizarListaFiltrada();
    renderizarCartas();
  });

  // Filtrar tareas por prioridad
  filtroPrioridad.addEventListener("change", function () {
    renderizarListaFiltrada();
  });
});
