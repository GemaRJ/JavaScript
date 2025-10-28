// ==============================
// FECHAS Y CADENAS EN JAVASCRIPT
// ==============================

// ======== FECHAS ========

// Crear fecha actual
let fechaActual = new Date();
console.log("Fecha actual:", fechaActual);

// Crear fecha específica: Año, Mes (0-11), Día, Hora, Minutos, Segundos
let fechaEspecifica = new Date(2025, 9, 28, 12, 30, 0); // 28 octubre 2025 12:30:00
console.log("Fecha específica:", fechaEspecifica);

// Obtener componentes de la fecha
console.log("Año:", fechaActual.getFullYear());
console.log("Mes:", fechaActual.getMonth() + 1); // Mes empieza en 0
console.log("Día del mes:", fechaActual.getDate());
console.log("Día de la semana:", fechaActual.getDay()); // 0: Domingo, 6: Sábado
console.log("Horas:", fechaActual.getHours());
console.log("Minutos:", fechaActual.getMinutes());
console.log("Segundos:", fechaActual.getSeconds());

// Convertir fecha a cadena
console.log("toUTCString():", fechaActual.toUTCString());
console.log("toISOString():", fechaActual.toISOString());

// Modificar fecha
fechaActual.setMonth(0); // Enero
console.log("Mes modificado:", fechaActual.getMonth() + 1);

// ======== CADENAS ========

let texto = "Hola Mundo";

// Mayúsculas y minúsculas
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// Longitud de la cadena
console.log("Longitud:", texto.length);

// Caracter en posición específica
console.log("Caracter en posición 0:", texto.charAt(0));

// Código ASCII
console.log("Código ASCII de 'H':", texto.charCodeAt(0));

// Concatenar cadenas
let texto2 = " desde JavaScript";
let textoCompleto = texto.concat(texto2, "!");
console.log(textoCompleto);

// Buscar posición de un carácter
console.log("Posición de 'M':", texto.indexOf('M'));

// Eliminar espacios al inicio y final
let textoConEspacios = "    Hola mundo    ";
console.log("Trim:", textoConEspacios.trim());

// Subcadena
console.log("Substr(0,4):", texto.substr(0, 4));

// Dividir cadena
let palabras = "Esto es una prueba".split(" ");
console.log("Array de palabras:", palabras);
console.log("Número de palabras:", palabras.length);
