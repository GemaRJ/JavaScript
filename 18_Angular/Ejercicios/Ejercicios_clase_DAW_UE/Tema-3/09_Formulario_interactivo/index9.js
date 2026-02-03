document.addEventListener("DOMContentLoaded", () => {
  let formulario = document.querySelector("#registroForm");
  let nombre = document.querySelector("#nombre");
  let email = document.querySelector("#email");
  let btnEnviar = document.querySelector("#BtnEnviar");
  let resultado = document.querySelector("#resultado");

  btnEnviar.addEventListener("click", function () {
    if (nombre.value.trim() === "" || email.value.trim() === "") {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "error",
      });
    } else {
      resultado.innerHTML = `
                <p class="alert alert-success animate__animated animate__fadeIn">
                    Nombre: ${nombre.value}, Email: ${email.value}
                </p>
            `;
    }
  });
});
