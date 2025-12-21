let inputNombre = document.querySelector("#nombreInput");
let inputMail = document.querySelector("#emailInput");
let inputPass = document.querySelector("#passInput");
let inputGenero = document.querySelector("#GeneroSelect");
let checkGuardar = document.querySelector("#checkGuardar");
let btnGuardar = document.querySelector("#btnGuardar");
let divResultados = document.querySelector("#resultados");

btnGuardar.addEventListener("click", () => {
  let nombre = inputNombre.value.trim();
  let mail = inputMail.value.trim();
  let pass = inputPass.value.trim();
  let genero = inputGenero.value;

  if (!checkGuardar.checked) {
    Swal.fire("Atención", "Debes marcar la casilla de guardar", "warning");
    return;
  }

  if (nombre === "" || mail === "" || pass === "" || genero === "") {
    Swal.fire("Error", "Falta algún dato", "error");
    return;
  }

  Swal.fire("¡Éxito!", "Usuario guardado correctamente", "success");

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
      </div>
    </div>
  `;

  clearInputs();
});

// contador caracteres contraseña
inputPass.addEventListener("keyup", (e) => {
  console.log("Caracteres contraseña:", e.target.value.length);
});

function clearInputs() {
  inputNombre.value = "";
  inputMail.value = "";
  inputPass.value = "";
  inputGenero.value = "";
  checkGuardar.checked = false;
}
