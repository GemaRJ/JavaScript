let baraja = [];
let palos = ["C", "T", "R", "P"];

for (let index = 0; index < palos.length; index++) {
  for (let i = 1; i <= 13; i++) {
    switch (i) {
      case 11:
        baraja.push(new carta("J" + palos[index]));
        break;
      case 12:
        baraja.push(new carta("Q" + palos[index]));
        break;
      case 13:
        baraja.push(new carta("K" + palos[index]));
        break;

      default:
        baraja.push(new carta(i + palos[index]));
        break;
    }
  }
}

console.log(baraja);

let carta0 = new carta("10C");
let carta1 = new carta("7C");
let carta2 = new carta("9C");
let carta3 = new carta("3C");

console.log(`El valor de la carta es ${carta0.valor}`);
console.log(`La imagen de la carta es ${carta0.imagen}`);

console.log(`El valor de la carta es ${carta1.valor}`);
console.log(`La imagen de la carta es ${carta1.imagen}`);

console.log(`El valor de la carta es ${carta2.valor}`);
console.log(`La imagen de la carta es ${carta2.imagen}`);

console.log(`El valor de la carta es ${carta3.valor}`);
console.log(`La imagen de la carta es ${carta3.imagen}`);

baraja = _.shuffle(baraja);
console.log(baraja);

// Empezara a jugar: La banca juega hasta que tenga una cuenta de 17 o más

// Asíncrono: Hacer dos cosas a la vez, primero una y luego la otra:
/* setTimeout: Postergo la ejecición de una acción
setTimeout (() => {
    console.log ("Ejecución postergada");
    }, 3000);
 
 seInterval: Ejecuta una acción cada X segundos
seInterval (()=> {
    console.log ("Ejecución ");
    },2000); 
*/
let cuentaBanca = 0;
while (cuentaBanca < 17) {
  cuentaBanca += baraja.pop().valor;
}
console.log(`La banca para de jugar porque tiene ${cuentaBanca}`);

// Repito el proceso para el jugador
// Misma lógica
// La Banca tiene menos de 21, el jugador gana
// Si la Banca tiene más de 22: Comparo puntuaciones y decido ganador
