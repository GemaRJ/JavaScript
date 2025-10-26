// Variable para almacenar el valor actual en la pantalla
let displayValue = "";

// Función para agregar números
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").textContent = displayValue;
}

// Función para borrar el contenido de la pantalla
function clearDisplay() {
  displayValue = "";
  document.getElementById("display").textContent = displayValue;
}

// Función para calcular el resultado
function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById("display").textContent = displayValue;
  } catch (error) {
    document.getElementById("display").textContent = "Error";
    displayValue = "";
  }
}
