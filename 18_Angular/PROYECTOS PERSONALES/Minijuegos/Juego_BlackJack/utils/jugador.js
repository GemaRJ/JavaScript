export class Jugador {
  constructor(nombre) {
    this._nombre = nombre;
    this._mano = [];
  }

  get nombre() {
    return this._nombre;
  }
  get mano() {
    return this._mano;
  }

  get puntos() {
    let total = 0;
    for (let carta of this._mano) {
      total += carta.puntos;
    }
    return total;
  }

  addCarta(carta) {
    this._mano.push(carta);
  }
}
