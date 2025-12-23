document.addEventListener("DOMContentLoaded", () => {
  // DOM
  let inputNombre = document.querySelector("#nombreInput");
  let inputApellido = document.querySelector("#apellidoInput");
  let inputEdad = document.querySelector("#edadInput");
  let selectTipo = document.querySelector("#selectTipo");
  let inputExtra = document.querySelector("#inputExtra");
  let resultados = document.querySelector("#resultados");
  let btnAgregar = document.querySelector(".btnAgregar");

  // Array inicial de personas
  let personas = [
    new Persona("Gema", "Rodríguez", 37),
    new Estudiante("Luis", "Pérez", 28, "Matemáticas"),
    new Empleado("Ana", "García", 45, "Recursos Humanos"),
  ];

  // Mostrar personas iniciales
  mostrarPersonas();

  // Cambiar placeholder según tipo
  selectTipo.addEventListener("change", () => {
    if (selectTipo.value === "estudiante") {
      inputExtra.style.display = "block";
      inputExtra.placeholder = "Introduce el curso del estudiante";
    } else if (selectTipo.value === "empleado") {
      inputExtra.style.display = "block";
      inputExtra.placeholder = "Introduce el departamento del empleado";
    } else {
      inputExtra.style.display = "none";
      inputExtra.value = "";
    }
  });

  // Evento del botón Agregar
  btnAgregar.addEventListener("click", agregarPersona);

  function agregarPersona() {
    let nombre = inputNombre.value.trim();
    let apellido = inputApellido.value.trim();
    let edad = inputEdad.value.trim();
    let tipo = selectTipo.value;
    let extra = inputExtra.value.trim();

    if (!nombre || !apellido || !edad) {
      Swal.fire("Error", "Faltan datos", "error");
      return;
    }

    let nuevaPersona;
    if (tipo === "estudiante") {
      if (!extra) {
        Swal.fire("Error", "Falta el curso del estudiante", "error");
        return;
      }
      nuevaPersona = new Estudiante(nombre, apellido, edad, extra);
    } else if (tipo === "empleado") {
      if (!extra) {
        Swal.fire("Error", "Falta el departamento del empleado", "error");
        return;
      }
      nuevaPersona = new Empleado(nombre, apellido, edad, extra);
    } else {
      nuevaPersona = new Persona(nombre, apellido, edad);
    }

    personas.push(nuevaPersona);
    mostrarPersonas();
    limpiarInputs();
    Swal.fire("¡Éxito!", "Persona agregada correctamente", "success");
  }

  function mostrarPersonas() {
    resultados.innerHTML = "";
    personas.forEach((p, index) => {
      // Determinar clase según tipo
      let claseCard = "card-persona"; // por defecto
      if (p instanceof Estudiante) claseCard = "card-estudiante";
      if (p instanceof Empleado) claseCard = "card-empleado";

      resultados.innerHTML += `
      <div class="col">
        <div class="card h-100 ${claseCard}">
          <div class="card-body">
            <h5 class="card-title">${p.nombre} ${p.apellido}</h5>
            <p class="card-text">Edad: ${p.edad}</p>
            ${p.infoExtra() ? `<p class="card-text">${p.infoExtra()}</p>` : ""}
          </div>
          <div class="card-footer text-center">
            <button class="btn btn-danger btn-sm btnEliminar" data-index="${index}">Eliminar</button>
          </div>
        </div>
      </div>
    `;
    });
  }

  function limpiarInputs() {
    inputNombre.value = "";
    inputApellido.value = "";
    inputEdad.value = "";
    selectTipo.value = "";
    inputExtra.value = "";
    inputExtra.style.display = "none";
  }

  // Eliminar persona
  resultados.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnEliminar")) {
      let index = e.target.dataset.index;
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
});
