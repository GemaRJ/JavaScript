let inputNombre = document.querySelector("#nombreInput");
let inputMail = document.querySelector("#emailInput");
let inputPass = document.querySelector("#passInput");
let inputGenero = document.querySelector("#GeneroSelect");
let checkGuardar = document.querySelector("#checkGuardar");
let btnGuardar = document.querySelector("#btnGuardar");
let divResultados = document.querySelector("div.row.g-4");

btnGuardar.addEventListener("click", () => {
  let nombre = inputNombre.value;
  let mail = inputMail.value;
  let pass = inputPass.value;
  let genero = inputGenero.value;

  console.log(`${nombre} ${mail} ${pass} ${genero}`);

  if (checkGuardar.checked) {
    if (
      nombre.length > 0 &&
      mail.length > 0 &&
      pass.length > 0 &&
      genero !== "-- Género --" // Validar que no se haya dejado el valor predeterminado
    ) {
      // Mostrar SweetAlert de éxito
      Swal.fire({
        title: "¡Éxito!",
        text: "Usuario guardado correctamente",
        icon: "success",
      });

      // Añadir card de usuario
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
            </div>
          </div>
        </div>
      `;

      // Limpiar los inputs después de guardar
      clearInputs();
    } else {
      Swal.fire({
        title: "Error",
        text: "Falta algún dato",
        icon: "error",
      });
    }
  } else {
    Swal.fire({
      title: "Atención",
      text: "Debes marcar la casilla de guardar",
      icon: "warning",
    });
  }
});

// Contador de caracteres para la contraseña
inputPass.addEventListener("keyup", (e) => {
  console.log(e.target.value.length);
});

// Limpiar inputs
function clearInputs() {
  inputNombre.value = "";
  inputMail.value = "";
  inputPass.value = "";
  inputGenero.value = "-- Género --";
  checkGuardar.checked = false; // Desmarcar la casilla de guardar
}
