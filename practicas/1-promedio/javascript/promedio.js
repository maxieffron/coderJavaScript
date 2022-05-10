//Ejercicio: Calcular el promedio de gol del jugador ingresado

let nomJugador = prompt("Ingrese el nombre y apellido del jugador");
let cantPartidos = Number(prompt("Ingrese la cantidad de partidos jugados"));
let cantGoles = Number(prompt("Ingrese la cantidad de goles convertidos"));

let promedioGol = cantGoles / cantPartidos;

alert(
    "El promedio de gol de " +
        nomJugador +
        " es: " +
        promedioGol +
        " goles por partido."
);
