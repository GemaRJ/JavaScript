// ==============================
// ARRAYS EN JAVASCRIPT
// ==============================

// Crear arrays
let numeros = [1, 2, 3, 4, 5];
let palabras = ["Hola", "que", "tal"];
let mixto = [1, "hola", true, null];

// Acceso a elementos
console.log(numeros[0]); // 1
console.log(palabras[2]); // "tal"

// Modificación de elementos
numeros[0] = 10;
console.log("Array modificado:", numeros);

// Longitud del array
console.log("Longitud:", numeros.length);

// Recorrer con for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// Recorrer con forEach
palabras.forEach(p => console.log(p));

// Métodos comunes
let nombres = ["Borja", "Luis", "Jesús"];
nombres.push("Ana");          // Añadir al final
nombres.unshift("Marta");     // Añadir al inicio
nombres.pop();                // Eliminar último
nombres.shift();              // Eliminar primero

console.log("Array después de modificaciones:", nombres);

// Ordenar y revertir
nombres.sort();
console.log("Array ordenado:", nombres);
nombres.reverse();
console.log("Array invertido:", nombres);

// Concatenar arrays
let array1 = [1, 2];
let array2 = [3, 4];
let combinado = array1.concat(array2);
console.log("Arrays concatenados:", combinado);

// Encontrar índice
let idx = nombres.indexOf("Luis");
if (idx >= 0) console.log("Luis está en índice:", idx);
else console.log("Luis no está presente");

// Convertir a string
console.log("Array a string:", nombres.join(", "));

// Splice para eliminar
let arrayEliminar = [1, 2, 3, 4, 5];
arrayEliminar.splice(2, 2); // Elimina 2 elementos desde índice 2
console.log("Array tras splice:", arrayEliminar);
