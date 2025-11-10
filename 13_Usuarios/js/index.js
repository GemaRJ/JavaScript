let inputNombre = document.querySelector("#nombreInput");
let inputMail = document.querySelector("#emailInput");
let inputPass = document.querySelector("#passInput");
let inputGenero = document.querySelector("#GeneroSelect");
let checkGuardar = document.querySelector("#checkGuardar");
let btnGuardar = document.querySelector("#btnGuardar");
let divResultados = document.querySelector("div.row.g-4");

// Sacar toda la información del formulario

btnGuardar.addEventListener("click", (e) => {
  let nombre = inputNombre.value;
  let mail = inputMail.value;
  let pass = inputPass.value;
  let genero = inputGenero.value;
  console.log(`${nombre} ${mail} ${pass} ${genero}`); // Esto se añade si quiero mostrar los datos por console

  /*// Primera opción para vaciado de todos los elementos al introducirlo completamente:

  inputNombre.value = "";
  inputMail.value = "";
  inputPass.value = "";
  inputGenero.value = "";
  */

  if (checkGuardar.checked) {
    if (
      nombre.length > 0 &&
      mail.length > 0 &&
      pass.length > 0 &&
      genero.length > 0
    ) {
      /* Guardar datos: Primera opción
      console.log("Guarda los datos");

      clearInputs();
    } else {
      console.log("No se guardan los datos");
    }
  } else {
    console.log("La casilla de guardar no está marcada");
  }
});
*/
      // Guardar datos: Segunda opción, más visual con Sweet

      // Mostrar SweetAlert de éxito
      Swal.fire({
        title: "Éxito!",
        text: "Usuario guardado correctamente!",
        icon: "success",
      });
      // Se agrega un usuario a la lista
      divResultados.innerHTML += `<div class="col animate__animated animate__fadeInDown">
<div class= "card">
<img
src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">${nombre}</h5>
                  <p class="card-text">${mail}</p>
                </div>
              </div>
            </div>`;

      clearInputs();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Falta algún dato!",
        icon: "error",
      });
    }
  } else {
    Swal.fire({
      title: "Atención",
      text: "La casilla de guardar no está marcada",
      icon: "warning",
    });
  }
});

// Cada vez que pulso, quiero saber cuantos caracteres hay en el input

inputPass.addEventListener("keyup", (e) => {
  console.log(e.target.value.length);
});

// Segunda opción para vaciado de todos los elementos al introducirlo completamente.
function clearInputs() {
  inputNombre.value = "";
  inputMail.value = "";
  inputPass.value = "";
  inputGenero.value = "";
}
