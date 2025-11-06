/* 
Ejercicio 4 - Validador de contraseñas

Enunciado:
Implementa un validador de contraseñas que solicite al usuario una contraseña mediante `prompt()`.
Debe tener al menos 8 caracteres, contener letras y números.
Usa operadores lógicos y muestra mensajes con SweetAlert indicando si la contraseña es válida o no.
*/

let contraseña = prompt("Por favor, ingresa una contraseña:");

// Verificamos los tres requisitos en una sola línea
if (
  contraseña.length >= 8 &&        // Longitud mínima de 8
  /[a-zA-Z]/.test(contraseña) &&   // Contiene letras
  /[0-9]/.test(contraseña)         // Contiene números
) {
  // Si cumple todo, mostramos éxito
  Swal.fire({
    title: "Contraseña válida",
    text: "La contraseña cumple con todos los requisitos.",
    icon: "success",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#0d6efd"
  });

} else {
  //  Si no cumple, construimos un mensaje según lo que falta
  let mensajeError = "La contraseña debe cumplir con los siguientes requisitos:\n";
  
  if (contraseña.length < 8) mensajeError += "- Al menos 8 caracteres\n";
  if (!/[a-zA-Z]/.test(contraseña)) mensajeError += "- Contener letras\n";
  if (!/[0-9]/.test(contraseña)) mensajeError += "- Contener números\n";

  Swal.fire({
    title: "Contraseña no válida",
    text: mensajeError,
    icon: "error",
    confirmButtonText: "Entendido",
    confirmButtonColor: "#dc3545"
  });
}
