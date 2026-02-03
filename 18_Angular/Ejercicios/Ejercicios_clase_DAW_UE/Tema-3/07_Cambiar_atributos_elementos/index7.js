document.addEventListener("DOMContentLoaded", () => {
  let imagen = document.querySelector("#miImagen");
  let textoAlt = document.querySelector("#textoAlt");
  let btnSrc = document.querySelector("#btnSrc");
  let btnAlt = document.querySelector("#btnAlt");

  // Cambiar SRC
  btnSrc.addEventListener("click", () => {
    Swal.fire({
      title: "Cambiar imagen",
      input: "text",
      inputPlaceholder: "Introduce la nueva URL",
      showCancelButton: true,
      confirmButtonText: "Cambiar",
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        imagen.setAttribute("src", result.value);

        Swal.fire("¡Listo!", "La imagen ha sido cambiada", "success");
      }
    });
  });

  // Cambiar ALT
  btnAlt.addEventListener("click", () => {
    Swal.fire({
      title: "Cambiar texto alternativo",
      input: "text",
      inputPlaceholder: "Introduce el nuevo texto ALT",
      showCancelButton: true,
      confirmButtonText: "Cambiar",
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        imagen.alt = result.value;
        textoAlt.textContent = `Texto alternativo: ${result.value}`;

        Swal.fire("Actualizado", "El texto ALT ha cambiado", "success");
      }
    });
  });
});
