// DOM
let bAnadir = document.querySelector("#btnAgregar");
let bBorrar = document.querySelector("#btnEliminar");
let bObtener = document.querySelector("#btnObtener");

let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");
let inputPass = document.querySelector("#inputPass");

// Recuperar usuarios guardados
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

/*  BOTÓN AGREGAR */
bAnadir.addEventListener("click", () => {
  let nombre = inputNombre.value.trim();
  let apellido = inputApellido.value.trim();
  let pass = inputPass.value.trim();

  // Validación
  if (!nombre || !apellido || !pass) {
    Swal.fire("Error", "Todos los campos son obligatorios", "error");
    return;
  }

  let usuario = new Usuario(nombre, apellido, pass);
  listaUsuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

  limpiarInputs();

  Swal.fire("Correcto", "Usuario añadido correctamente", "success");
});

/* BOTÓN ELIMINAR */

bBorrar.addEventListener("click", () => {
  if (listaUsuarios.length === 0) {
    Swal.fire("Info", "No hay usuarios para eliminar", "info");
    return;
  }

  Swal.fire({
    title: "¿Eliminar todos los usuarios?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("usuarios");
      listaUsuarios = [];
      Swal.fire("Eliminado", "Usuarios eliminados", "success");
    }
  });
});

/* BOTÓN OBTENER */
bObtener.addEventListener("click", () => {
  if (listaUsuarios.length === 0) {
    Swal.fire("Info", "No hay usuarios almacenados", "info");
    return;
  }

  let listaHTML = listaUsuarios
    .map(
      (u, index) => `<strong>${index + 1}.</strong> ${u.nombre} ${u.apellido}`
    )
    .join("<br>");

  Swal.fire({
    title: "Usuarios guardados",
    html: listaHTML,
    icon: "info",
  });
});

/*  FUNCIONES */
function limpiarInputs() {
  inputNombre.value = "";
  inputApellido.value = "";
  inputPass.value = "";
}
