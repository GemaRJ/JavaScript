//  SELECCIÓN DEL DOM

let inputNombre = document.querySelector("#nombreInput");
let inputMail = document.querySelector("#emailInput");
let inputPass = document.querySelector("#passInput");
let inputGenero = document.querySelector("#GeneroSelect");
let checkGuardar = document.querySelector("#checkGuardar");
let btnGuardar = document.querySelector("#btnGuardar");
let divResultados = document.querySelector("#resultados");

//  EVENTO BOTÓN GUARDAR

btnGuardar.addEventListener("click", guardarUsuario);

function guardarUsuario() {
  let nombre = inputNombre.value.trim();
  let mail = inputMail.value.trim();
  let pass = inputPass.value.trim();
  let genero = inputGenero.value;

  // Validación checkbox guardar
  if (!checkGuardar.checked) {
    Swal.fire("Atención", "Debes marcar la casilla de guardar", "warning");
    return;
  }

  // Validación campos
  if (nombre === "" || mail === "" || pass === "" || genero === "") {
    Swal.fire("Error", "Falta algún dato", "error");
    return;
  }

  // SweetAlert éxito
  Swal.fire("¡Éxito!", "Usuario guardado correctamente", "success");

  // Crear card
  divResultados.innerHTML += `
    <div class="col animate__animated animate__fadeInDown">
      <div class="card h-100">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png"
          class="card-img-top"
          alt="usuario"
        />
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${mail}</p>
          <p class="card-text"><small>${genero}</small></p>
        </div>
        <div class="card-footer text-center">
          <button class="btn btn-danger btnEliminar">Eliminar</button>
        </div>
      </div>
    </div>
  `;

  clearInputs();
}

//  ELIMINAR USUARIO

divResultados.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnEliminar")) {
    Swal.fire({
      title: "¿Eliminar usuario?",
      text: "Estas seguro que deseas eliminar este usuario.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        e.target.closest(".col").remove();
        Swal.fire("Eliminado", "Usuario eliminado correctamente", "success");
      }
    });
  }
});

//  CONTADOR CONTRASEÑA

inputPass.addEventListener("keyup", (e) => {
  console.log("Caracteres contraseña:", e.target.value.length);
});

//  LIMPIAR INPUTS

function clearInputs() {
  inputNombre.value = "";
  inputMail.value = "";
  inputPass.value = "";
  inputGenero.value = "";
  checkGuardar.checked = false;
}
