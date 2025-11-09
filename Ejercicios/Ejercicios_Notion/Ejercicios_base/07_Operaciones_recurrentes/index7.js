/* 
1. Operaciones recurrentes Pedir al usuario que introduzca por teclado dos números.
Con funciones mostrar el resultado de todas las operaciones en un cuadro de alerta
*/

/* 
1. Operaciones recurrentes

Pedir al usuario que introduzca por teclado dos números (fuera de la función)
y mediante una función mostrar el resultado de todas las operaciones en un cuadro de alerta (SweetAlert2).
*/

//  Pedimos los números al usuario
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

//  Función que realiza las operaciones y muestra el resultado
function operacionesRecurrentes(num1, num2) {
    //  Validamos que sean números
    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: "error",
            title: " Error",
            text: "Debes introducir números válidos.",
            confirmButtonText: "Entendido"
        });
        return; // Salimos de la función si hay error
    }

    //  Calculamos las operaciones
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;

    //  Validamos división entre 0
    let division;
    if (num2 === 0) {
        division = "No se puede dividir entre 0";
    } else {
        division = (num1 / num2).toFixed(2); // Redondeamos a 2 decimales
    }

    //  Mostramos los resultados con SweetAlert2
    Swal.fire({
        icon: "info",
        title: " Resultados de las operaciones",
        html: `
            <strong>Números introducidos:</strong> ${num1} y ${num2} <br><br>
            <strong>Suma:</strong> ${suma} <br>
            <strong>Resta:</strong> ${resta} <br>
            <strong>Multiplicación:</strong> ${multiplicacion} <br>
            <strong>División:</strong> ${division}
        `,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6"
    });
}

//  Llamamos a la función pasando los números introducidos
operacionesRecurrentes(num1, num2);


/* 
OTRA VERSIÓN DIFERENTE:
/* 

//  Funciones que realizan las operaciones básicas
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  // Evitamos dividir entre 0
  if (b === 0) {
    return "No se puede dividir entre 0";
  }
  return (a / b).toFixed(2); // Redondeamos a 2 decimales
}
 ============================================================== 

//  Pedimos los dos números al usuario
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

================================================================

//  Validamos que sean números válidos
if (isNaN(num1) || isNaN(num2)) {
  Swal.fire({
    icon: "error",
    title: " Error",
    text: "Debes introducir números válidos.",
    confirmButtonText: "Entendido"
  });
} else {
  //  Calculamos las operaciones usando las funciones
  let suma = sumar(num1, num2);
  let resta = restar(num1, num2);
  let multi = multiplicar(num1, num2);
  let div = dividir(num1, num2);

  //  Mostramos todos los resultados en un cuadro de alerta bonito
  Swal.fire({
    icon: "info",
    title: "Resultados de las operaciones",
    html: `
      <strong>Números introducidos:</strong> ${num1} y ${num2} <br><br>
       <strong>Suma:</strong> ${suma} <br>
      <strong>Resta:</strong> ${resta} <br>
       <strong>Multiplicación:</strong> ${multi} <br>
      <strong>División:</strong> ${div}
    `,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#3085d6"
  });
}


*/