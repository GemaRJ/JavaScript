import { Carta } from "./carta.js";

export class Baraja {
  constructor() {
    this.palos = ["C", "D", "T", "P"];
    this.valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    this.cartas = [];
    this.crear();
    this.mezclar();
  }

  crear() {
    this.cartas = [];
    for (let palo of this.palos) {
      for (let valor of this.valores) {
        this.cartas.push(new Carta(valor, palo));
      }
    }
  }

  mezclar() {
    for (let i = this.cartas.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
    }
  }

  sacar() {
    return this.cartas.pop();
  }
}
