export class Carta {
  constructor(valor, palo) {
    this._valor = valor;
    this._palo = palo;
  }

  get valor() {
    return this._valor;
  }
  get palo() {
    return this._palo;
  }

  get puntos() {
    if (this.valor === "A") return 1;
    if (["J", "Q", "K"].includes(this.valor)) return 11;
    return Number(this.valor);
  }

  get nombre() {
    return `${this.valor}${this.palo}`;
  }
}
