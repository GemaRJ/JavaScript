/* 
 isNaN() y some(isNaN)
=======================

 isNaN significa “Is Not A Number”.
   → Devuelve TRUE si el valor **NO** es numérico.
   → Devuelve FALSE si el valor **sí** es un número o puede convertirse en uno.

-------------------------------------------------------------
 1️.  Uso básico con una sola variable
-------------------------------------------------------------
Sirve para comprobar si el usuario introduce un número válido antes de continuar.

Ejemplo:
----------------------------------
let numero = prompt("Introduce un número:");

if (isNaN(numero)) {
    alert(" Error: eso no es un número válido.");
} else {
    alert(` Has introducido el número ${numero}`);
}
----------------------------------
 Si el usuario escribe algo como “hola” o deja el campo vacío → `isNaN(numero)` devuelve TRUE.
 Si escribe un número como “15” o “3.5” → devuelve FALSE, y el código continúa.

-------------------------------------------------------------
 2️.  Uso con dos variables
-------------------------------------------------------------
Podemos usar `isNaN()` junto con operadores lógicos (||) para validar varios valores:

Ejemplo:
----------------------------------
let numero1 = prompt("Introduce el primer número:");
let numero2 = prompt("Introduce el segundo número:");

// Comprobamos si alguno NO es un número
if (isNaN(numero1) || isNaN(numero2)) {
    alert(" Por favor, introduce solo números válidos.");
} else {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    alert(`La suma es: ${suma}`);
}
----------------------------------
 Si cualquiera de los dos no es un número → muestra el mensaje de error.
 Si ambos son válidos → realiza la suma.

-------------------------------------------------------------
3️.  Uso con arrays: calificaciones.some(isNaN)
-------------------------------------------------------------
Cuando tenemos varios valores dentro de un array, no queremos comprobar uno por uno.
Para eso usamos el método `.some()` junto con `isNaN`:

Ejemplo:
----------------------------------
let calificaciones = [];

for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Introduce la calificación ${i + 1}:`));
    calificaciones.push(nota);
}

// Comprobamos si alguna NO es un número
if (calificaciones.some(isNaN)) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, introduce solo números válidos para las calificaciones.'
    });
} else {
    // Si todo es correcto, calculamos el promedio
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    let promedio = suma / calificaciones.length;
    let estado = promedio >= 5 ? "Aprobado" : "Suspendido";

    Swal.fire({
        icon: estado === "Aprobado" ? 'success' : 'error',
        title: estado,
        html: `Tu promedio es <strong>${promedio.toFixed(2)}</strong>`
    });
}
----------------------------------
 `.some(isNaN)` recorre todo el array y devuelve TRUE si **al menos una nota no es un número**.
 Es una forma rápida y limpia de validar todos los datos a la vez.

-------------------------------------------------------------
 DIFERENCIA ENTRE AMBOS
-------------------------------------------------------------
| Situación                              | Mejor opción               |
|----------------------------------------|-----------------------------|
| Validar 1 solo número                  | isNaN(variable)             |
| Validar 2 números concretos            | isNaN(var1) || isNaN(var2)  |
| Validar una lista o array de valores   | array.some(isNaN)           |

 En resumen:
- Usa `isNaN()` → para comprobar valores individuales.
- Usa `array.some(isNaN)` → para comprobar si dentro de un array hay algún valor no numérico.
*/
