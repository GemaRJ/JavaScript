document.addEventListener("DOMContentLoaded", () => {
  let contadorParrafo = document.querySelector("#contador");
  let boton = document.querySelector("#botonContador");

  let contador = 0; // contador inicial

  boton.addEventListener("click", () => {
    contador++;
    contadorParrafo.textContent = contador;

    if (contador % 5 === 0) {
      Swal.fire({
        title: "¡Buen ritmo!",
        text: `Has hecho ${contador} clics`,
        icon: "success",
        confirmButtonText: "Continuar",
      });
    }
  });
});
