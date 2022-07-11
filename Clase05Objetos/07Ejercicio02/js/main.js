 
  /*
    Cree el modelo para un juego de UNO, 
    que contenga los siguientes elementos: 
    1. Carta (id,  color, valor, tipo)
    2. Jugador (id, alias, cartasEnMano)
    3. Juego (id, cartasEnMesa, CartasEnMazo, jugadores)

    Escriba una función que le permita 'inicializar' el mazo de cartas. 
    Es decir, crear todas las cartas disponibles en el juego: 
    8 cartas 'toma 2' [CHECK]
    8 cartas 'reverse'
    8 cartas 'salte' 
    4 cartas 'cambie de color'
    4 cartas 'toma 4'
    8 cartas (1-8) para cada color
  
  */

  // Constructor de la clase Carta
  function Carta(id, valor, color, tipo)
        {
            this.id=id;
            this.valor=valor;
            this.color=color;
            this.tipo=tipo;
        
    }

  //Créditos a Natalia Chiara
  class Jugador {
    constructor(id, alias, cartasEnMano) {
        this.id = id;
        this.alias = alias;
        this.cartasEnMano = cartasEnMano;
    }
}

//Créditos a Diego del Hoyo
class Juego{
 constructor (id, cartasEnMesa, cartasEnMazo,jugadores)
	  {
	     this.id= id;
	     this.cartasEnMesa= cartasEnMesa;
       this.CartasEnMazo= cartasEnMazo;
	     this.jugadores= jugadores;
    }
}

class Color {

  constructor(id,nombre)
  {
    this.id=id;
    this.nombre=nombre;
  }

}

class Tipo {

  constructor(id,nombre)
  {
    this.id=id;
    this.nombre=nombre;
  }



}
  const azul = new Color(0, "azul");
  const rojo = new Color(1, "rojo");
  const amarillo = new Color(2, "amarillo");
  const verde = new Color(3, "verde");

  const tomaDos = new Tipo(0, "toma dos");
  const reverse = new Tipo(1, "reverse");
  const salte = new Tipo(2, "salte");
  const tomaCuatro = new Tipo(3, "toma cuatro");
  const cambiaColor = new Tipo(4, "cambio de color");
  const normal = new Tipo(5, "normal");

  
  const colores = [azul, rojo, amarillo, verde];
  const tipos = [tomaDos, reverse, salte, tomaCuatro,cambiaColor,normal];
  const mazo = [];
  let idCarta=0;



  console.log(mazo);
  