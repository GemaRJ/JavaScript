document.addEventListener("DOMContentLoaded", () => {
  // DOM
  let inputNombre = document.querySelector("#nombreInput");
  let inputApellido = document.querySelector("#apellidoInput");
  let inputEdad = document.querySelector("#edadInput");
  let btnAgregar = document.querySelector("#btnAgregar");
  let resultados = document.querySelector("#resultados");

  // Personas iniciales
  let personas = [
    new Persona("Gema", "Rodríguez", 38),
    new Persona("Carlos", "Pérez", 42),
  ];

  // Mostrar al cargar
  mostrarPersonas();

  // Evento agregar
  btnAgregar.addEventListener("click", () => {
    let nombre = inputNombre.value.trim();
    let apellido = inputApellido.value.trim();
    let edad = inputEdad.value.trim();

    if (nombre === "" || apellido === "" || edad === "") {
      Swal.fire("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    personas.push(new Persona(nombre, apellido, edad));
    Swal.fire("¡Correcto!", "Persona agregada", "success");

    mostrarPersonas();
    limpiarInputs();
  });

  // Función para mostrar personas con botón eliminar
  function mostrarPersonas() {
    resultados.innerHTML = "";

    personas.forEach((persona, index) => {
      resultados.innerHTML += `
        <div class="col animate__animated animate__fadeInDown">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title">${persona.nombre} ${persona.apellido}</h5>
              <p class="card-text">Edad: ${persona.edad}</p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-danger btn-sm btnEliminar" data-index="${index}">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Delegación de eventos para eliminar
  resultados.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEliminar")) {
      let index = e.target.getAttribute("data-index");

      Swal.fire({
        title: "¿Eliminar persona?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          personas.splice(index, 1);
          mostrarPersonas();
          Swal.fire("Eliminado", "Persona eliminada correctamente", "success");
        }
      });
    }
  });

  // Limpiar inputs
  function limpiarInputs() {
    inputNombre.value = "";
    inputApellido.value = "";
    inputEdad.value = "";
  }
});
