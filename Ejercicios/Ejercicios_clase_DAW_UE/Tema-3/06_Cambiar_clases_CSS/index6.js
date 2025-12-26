document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos el botón
  let boton = document.querySelector("#btnCambiarEstilo");

  boton.addEventListener("click", () => {
    // Seleccionamos el div
    let caja = document.querySelector("#caja");

    // Alternar clase CSS
    caja.classList.toggle("cajaVerde");

    // Mensaje con SweetAlert
    Swal.fire({
      title: "Estilo cambiado",
      text: "La caja ha cambiado de estilo.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  });
});
