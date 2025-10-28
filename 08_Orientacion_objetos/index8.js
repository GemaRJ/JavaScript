// ==============================
// OBJETOS EN JAVASCRIPT
// ==============================

// Crear un objeto con notación JSON
let persona = {
    nombre: "Gema",
    apellido: "Rodríguez",
    edad: 37,
    carnet: true,
    mostrarDatos: function() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Carnet: ${this.carnet}`);
    }
};

// Acceder a propiedades
console.log(persona.nombre);
console.log(persona['apellido']);

// Llamar a un método
persona.mostrarDatos();

// Crear propiedad dinámica
persona.altura = 1.73;
console.log("Altura añadida:", persona.altura);

// Eliminar propiedad
delete persona.carnet;
console.log("Después de eliminar carnet:", persona);

// Convertir objeto a array de pares clave-valor
let paresClaveValor = Object.entries(persona);
console.log("Objeto convertido a array:", paresClaveValor);

// Recorrer array de pares clave-valor
paresClaveValor.forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});

// Función que retorna un objeto
function crearObjeto(nombre, apellido) {
    return { nombre, apellido };
}

let nuevoObjeto = crearObjeto("Luis", "Pérez");
console.log("Nuevo objeto creado:", nuevoObjeto);

// Desestructuración de objetos
function mostrarEquipo({ nombre, fundacion, estadio }) {
    console.log("Nombre:", nombre);
    console.log("Fundación:", fundacion);
    console.log("Estadio:", estadio);
}

let equipo = { nombre: "Barcelona", fundacion: 1890, estadio: "Camp Nou" };
mostrarEquipo(equipo);

// Intento incorrecto de pasar parámetros normales
// mostrarEquipo("Barcelona", 1890, "Camp Nou"); //  Esto da error
