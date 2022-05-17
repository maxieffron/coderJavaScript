"use strict";

function sumar(a, b) {
    alert(`la suma de ${a} y ${b} es: ${a + b}`);
}

function restar(a, b) {
    alert(`la resta de ${a} y ${b} es: ${a - b}`);
}

function multiplicar(a, b) {
    alert(`la multiplicación de ${a} y ${b} es: ${a * b}`);
}

function dividir(a, b) {
    alert(`la división entre ${a} y ${b} es: ${a / b}`);
}

function mostrarMenu() {
    let opcion = 0;
    let num1 = 0;
    let num2 = 0;

    while (opcion !== 5) {
        opcion = Number(
            prompt(
                "Ingrese la operación (1 = SUMA, 2 = RESTA, 3 = MULT, 4 = DIV, 5 = FIN)"
            )
        );

        if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4) {
            num1 = Number(prompt("Ingrese un número"));
            num2 = Number(prompt("Ingrese otro número"));
        }
        switch (opcion) {
            case 1:
                sumar(num1, num2);
                break;
            case 2:
                restar(num1, num2);
                break;
            case 3:
                multiplicar(num1, num2);
                break;
            case 4:
                dividir(num1, num2);
                break;
            case 5:
                alert("Gracias por usar nuestra calculadora");
                break;

            default:
                alert("La operación ingresada no es correcta");
                break;
        }
    }
}

//Llamado a la función
mostrarMenu();
