/*Ejercicio 1 - Calculadora básica:

 Crea una aplicación que solicite al usuario dos números mediante prompt()
 y una operación (+, -, *, /). 
 Utiliza alert() para mostrar el resultado de la operación.
 Asegúrate de validar que los valores introducidos sean números válidos.

*/
document.getElementById("abrirCalculadora").addEventListener("click", calculadora);

async function calculadora() {
  // Primer número
  const { value: numero1 } = await Swal.fire({
    title: "Primer número",
    html: "<label>Introduce el primer número:</label>",
    input: "number",
    inputPlaceholder: "Ej: 5",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#0d6efd",
    inputValidator: (value) => {
      if (!value) return "Debes introducir un número";
    },
  });

  if (numero1 === undefined) return; // Cancelado

  // Segundo número
  const { value: numero2 } = await Swal.fire({
    title: "Segundo número",
    html: "<label>Introduce el segundo número:</label>",
    input: "number",
    inputPlaceholder: "Ej: 3",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#0d6efd",
    inputValidator: (value) => {
      if (!value) return "Debes introducir un número";
    },
  });

  if (numero2 === undefined) return;

  // Selección de operación
  const { value: operacion } = await Swal.fire({
    title: "Selecciona una operación",
    html: "<label>Elige una de las siguientes opciones:</label>",
    input: "select",
    inputOptions: {
      "+": "Suma (+)",
      "-": "Resta (-)",
      "*": "Multiplicación (*)",
      "/": "División (/)",
    },
    inputPlaceholder: "Selecciona una operación",
    confirmButtonText: "Calcular",
    confirmButtonColor: "#0d6efd",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
  });

  if (!operacion) {
    Swal.fire("Cancelado", "No se realizó ninguna operación.", "info");
    return;
  }

  // Cálculo del resultado
  let resultado;

  switch (operacion) {
    case "+":
      resultado = parseFloat(numero1) + parseFloat(numero2);
      break;
    case "-":
      resultado = parseFloat(numero1) - parseFloat(numero2);
      break;
    case "*":
      resultado = parseFloat(numero1) * parseFloat(numero2);
      break;
    case "/":
      if (parseFloat(numero2) === 0) {
        Swal.fire("Error", "No se puede dividir entre cero.", "error");
        return;
      }
      resultado = parseFloat(numero1) / parseFloat(numero2);
      break;
  }

  // Mostrar resultado
  Swal.fire({
    title: "Resultado",
    text: `El resultado es: ${resultado}`,
    icon: "success",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#0d6efd",
  });
}