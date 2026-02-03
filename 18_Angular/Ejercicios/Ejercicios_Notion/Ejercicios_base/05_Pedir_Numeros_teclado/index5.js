/* 
. Pedir dos números por teclado y mostrar en una alerta todos las operaciones posibles para dichos números (suma, resta, multiplicación y división).
Adicionalmente el programa hará lo siguiente:
- Si se introduce números menores que 0 o letras que salte una alerta indicando el error y el programa parará
- Tras mostrar todas las operaciones se pedirá confirmación al usuario para que indique si quiere continuar realizando operaciones:
en caso positivo el programa volverá a empezar. 
En caso negativo el programa parará
si se detecta que alguna de las operaciones es negativa el programa parará tras realizar todas las operaciones de los números

*/

let continuar = true;

while (continuar) {
    // Pedimos los números
    let numero1 = parseInt(prompt("Introduce el primer número (>=0):"));
    let numero2 = parseInt(prompt("Introduce el segundo número (>=0):"));

    // Validación
    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
        Swal.fire({
            title: "Error",
            text: "Debes introducir números válidos mayores o iguales a 0.",
            icon: "error",
            confirmButtonText: "Aceptar"
        });
        break; // Detenemos el programa
    }

    // Calculamos operaciones
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : "No se puede dividir entre 0";

    // Mostramos resultados en SweetAlert2
    Swal.fire({
        title: "Resultados",
        html: `
            <p><strong>Suma:</strong> ${suma}</p>
            <p><strong>Resta:</strong> ${resta}</p>
            <p><strong>Multiplicación:</strong> ${multiplicacion}</p>
            <p><strong>División:</strong> ${division}</p>
        `,
        icon: "info",
        confirmButtonText: "Aceptar"
    }).then(() => {
        // Comprobamos si alguna operación (excepto división) es negativa
        if (resta < 0 || multiplicacion < 0 || suma < 0) {
            Swal.fire({
                title: "Programa detenido",
                text: "Se ha detectado una operación negativa. El programa se detiene.",
                icon: "warning",
                confirmButtonText: "Aceptar"
            });
            continuar = false; // Detenemos el bucle
        } else {
            // Preguntamos si quiere continuar
            continuar = confirm("¿Quieres continuar realizando operaciones?");
            if (!continuar) {
                Swal.fire({
                    title: "Programa finalizado",
                    text: "Gracias por usar el programa.",
                    icon: "success",
                    confirmButtonText: "Aceptar"
                });
            }
        }
    });

    // Esperamos a que se cierre SweetAlert antes de continuar
    // Usamos un break temporal para controlar la ejecución secuencial
    // Esto evita que el bucle se repita antes de que se cierre la alerta
    break;
}

