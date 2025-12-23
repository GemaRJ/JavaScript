// ESTRUCTURAS DE CONTROL Y BUCLES

// IF / ELSE
let nota = 7;

if (nota < 5) {
  console.log("Alumno SUSPENDIDO");
} else if (nota < 8) {
  console.log("Alumno APROBADO con buena nota");
} else {
  console.log("Alumno APROBADO con excelente nota");
}

// IF ternario (operador condicional)
let edad = 20;
let puedeEntrar = edad >= 18 ? "Entrada permitida" : "Entrada denegada";
console.log(puedeEntrar);

// SWITCH
let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("Fin de semana");
    break;
}

// BUCLE WHILE
let contador = 5;
while (contador > 0) {
  console.log("Contador WHILE:", contador);
  contador--;
}

// BUCLE DO...WHILE
let contadorDo = 3;
do {
  console.log("Contador DO...WHILE:", contadorDo);
  contadorDo--;
} while (contadorDo > 0);

// BUCLE FOR
for (let i = 0; i < 5; i++) {
  console.log("Contador FOR:", i);
}

// BUCLE FOREACH (arrays)
let frutas = ["Manzana", "Plátano", "Cereza"];
frutas.forEach((fruta, index) => {
  console.log(`Fruta ${index}: ${fruta}`);
});

// BUCLE FOR...OF
for (let fruta of frutas) {
  console.log("FOR...OF:", fruta);
}

// BUCLE FOR...IN (objetos)
let persona = { nombre: "Ana", edad: 30, ciudad: "Madrid" };
for (let key in persona) {
  console.log(`${key}: ${persona[key]}`);
}

// Medición de tiempo de ejecución
console.time("Bucle");
for (let i = 0; i < 1000000; i++) {
  // operación pesada simulada
}
console.timeEnd("Bucle");
