// class {
// atributo (private, public y protected): Lo marcamos con # si es privada: #Valor #la imagen y si quiere utilizarla desde fuera, utilizamos su getter y su setter
// constructor (La representación de la carta){
// this.imagen= './${representacion}.png'
// this.valor= representacion.substring(0,representacion.lenght-1)
//}
// métodos
// getter and setter
//}

class carta {
  valor;
  imagen;

  constructor(representacion) {
    this.imagen = `./${representacion}.png`;
    this.valor = representacion.substring(0, representacion.length - 1);

    //Se puede utilizar estas dos formas:

    // if (this.valor=="J" || this.valor=="K" || this.valor=="Q") {
    // this.valor =10;
    // else {
    // this.valor=Number(this.valor);}

    switch (this.valor) {
      case "J":
      case "Q":
      case "K":
        this.valor = 10;
        break;

      default:
        this.valor = Number(this.valor);
        break;
    }
  }
}
