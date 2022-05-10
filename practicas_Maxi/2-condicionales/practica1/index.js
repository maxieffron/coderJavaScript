const operacion = prompt(
    "Ingrese una operación matemática (SUMA/MUL/RESTA/DIV)"
);
let num1 = Number(prompt("Ingrese un número"));
let num2 = Number(prompt("Ingrese otro número"));
let resultado;

//isNaN sería como un if not number. Pregunta si NO es un número.
if (isNaN(num1) || isNaN(num2)) {
    alert("NÚMEROS NO VÁLIDOS");
} else {
    if (operacion === "SUMA") {
        resultado = num1 + num2;
        console.log(
            "La suma de " + num1 + " más " + num2 + " es: " + resultado
        );
    } else if (operacion === "MUL") {
        resultado = num1 * num2;
        console.log(
            "La multiplicación de " +
                num1 +
                " por " +
                num2 +
                " es: " +
                resultado
        );
    } else if (operacion === "RESTA") {
        resultado = num1 - num2;
        console.log(
            "La resta de " + num1 + " menos " + num2 + " es: " + resultado
        );
    } else if (operacion === "DIV") {
        if (num2 != 0) {
            resultado = num1 / num2;
            console.log(
                "La división de " + num1 + " y " + num2 + " es: " + resultado
            );
        } else {
            alert("Error. No es posible tener un cero como divisor.");
        }
    } else {
        console.log("La operación seleccionada no es válida.");
    }
}
