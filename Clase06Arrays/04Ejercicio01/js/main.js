
/*
  Cree el modelo para un juego de UNO, 
  que contenga los siguientes elementos: 
  1. Carta (id,  color, valor, tipo)
  2. Jugador (id, alias, cartasEnMano)
  3. Juego (id, cartasEnMesa, CartasEnMazo, jugadores)

 
 
*/

// Constructor de la clase Carta
function Carta(id, valor, color, tipo) {
  this.id = id;
  this.valor = valor;
  this.color = color;
  this.tipo = tipo;

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
class Juego {
  constructor(id, cartasEnMesa, cartasEnMazo, jugadores) {
    this.id = id;
    this.cartasEnMesa = cartasEnMesa;
    this.CartasEnMazo = cartasEnMazo;
    this.jugadores = jugadores;
  }
}

class Color {

  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

}

class Tipo {

  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
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
const tipos = [tomaDos, reverse, salte, tomaCuatro, cambiaColor, normal];
const mazo = [];

/*
Escriba una función que le permita 'inicializar' el mazo de cartas. 
Es decir, crear todas las cartas disponibles en el juego: 
8 cartas 'toma 2' [2 rojas, 2 verdes, 2 azules, 2 amarillas]
8 cartas 'reverse' [2 rojas, 2 verdes, 2 azules, 2 amarillas]
8 cartas 'salte' [2 rojas, 2 verdes, 2 azules, 2 amarillas]
4 cartas 'cambie de color'
4 cartas 'toma 4'
8 cartas (1-8) para cada color

Sugerencia: Divida la tarea para mayor facilidad: 
  1. Crear las cartas de colores (2 x num x color)
  2. Crear las cartas especiales (toma 2, reverse, salte), que tienen colores
  3. Crear las cartas de cambie de color
  4. Crear las cartas de  tome 4
 */
let indice = 0;
crearCartasDeColores();
crearCartasEspeciales();



function crearCartasDeColores() {
  /*Crear las cartas de colores*/
  for (color of colores) {

    for (let i = 1; i <= 16; i++) {
      let valor = i;
      if (valor > 8)
        valor = i / 2;

      crearCarta(indice, valor, color, normal);
      indice++;
    }
  }
}

function crearCartasEspeciales() {
  for (let j = 0; j < tipos.length; j++) {
    if (tipos[j].nombre === "toma dos" ||
      tipos[j].nombre === "reverse" ||
      tipos[j].nombre === "salte") {
      for (let i = 0; i < colores.length; i++) {
        let contador = 0;
        while (contador < 2) {

          crearCarta(indice, null, colores[i], tipos[j]);
          indice++;
          contador++;

        }
      }
    }
    else{
      let contador=0;
      while (contador < 2) {

        crearCarta(indice, null, null, tipos[j]);
        indice++;
        contador++;

      }
    }
  }
}

function crearCartasCambieColor() {
  let contador = 0;
  while (contador < 2) {
    crearCarta(indice, null, null,);
    indice++;
    contador++
  }
}

function crearCarta(indice, valor, color, tipo) {
  let carta = new Carta(indice, valor, color, tipo);
  mazo.push(carta);
}

console.log(mazo);
