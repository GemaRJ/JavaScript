/* 
Escribe un programa que cree un string que represente un tabledo de 8 × 8, usando caracteres de nueva línea para separar las líneas.
En cada posición del tabledo hay un espacio o un carácter "#".
Los caracteres deberían de formar un tablero de ajedrez. 
*/


let size = 8; // Tamaño del tablero
let tablero = "";

// Construimos el tablero
for (let fila = 0; fila < size; fila++) {
    for (let col = 0; col < size; col++) {
        // Si la suma fila+col es par, ponemos "#", si no, un espacio
        tablero += (fila + col) % 2 === 0 ? "#" : " ";
    }
    tablero += "\n"; // Salto de línea al final de cada fila
}

// console.log(tablero);     // mostrar en consola

// Mostramos el tablero en un SweetAlert
Swal.fire({
    title: 'Tablero de Ajedrez 8x8',
    html: `<pre style="font-size:16px;">${tablero}</pre>`,
    width: 300,
    scrollbarPadding: false
});