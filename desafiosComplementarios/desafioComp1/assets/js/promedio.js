/*
- Se ingresa el nombre de un alumno, la materia y la cantidad de exámenes.
- A medida que se van ingresando las notas, se van imprimiendo por consola.
- Al final se indica en un "Alert" la sumatoria de las notas, la cantidad de exámenes rendidos y el promedio obtenido.
*/

let sNombreAlumno = prompt("Ingrese el nombre del alumno");
let sMateria = prompt("Ingrese la materia");
let nCantExamenes = Number(prompt("Ingrese la cantidad de exámenes"));
let nNota = 0;
let nSumaNotas = 0;
let nPromedio = 0;

if (isNaN(nCantExamenes)) {
    alert(
        "El dato ingresado no es válido. No es posible comenzar con los cálculos."
    );
} else {
    console.log(`¿Cómo le fue a ${sNombreAlumno} en ${sMateria}?`);
    for (let i = 1; i <= nCantExamenes; i++) {
        do {
            nNota = Number(
                prompt(`DEL 1 AL 10: Ingrese la nota del exámen Nº${i}:`)
            );

            if (isNaN(nNota)) {
                alert("El dato ingresado no es válido. Intente nuevamente.");
            } else if (nNota < 1 || nNota > 10) {
                alert("La nota debe estar comprendida entre 1 y 10.");
            }
        } while (isNaN(nNota) || nNota < 1 || nNota > 10);

        console.log(`Exámen Nº${i}: ${nNota} `);
        nSumaNotas = nSumaNotas + nNota;
    } //Fin del for

    nPromedio = (nSumaNotas / nCantExamenes).toFixed(2);

    if (nPromedio < 6) {
        alert(
            `Suma total de las notas acumuladas: ${nSumaNotas} 
        Cantidad total de exámenes rendidos: ${nCantExamenes} 
        ${sNombreAlumno} obtuvo en ${sMateria} un promedio de ${nPromedio}
        Desaprobaste la materia.
        `
        );
    } else if (nPromedio >= 6 && nPromedio < 10) {
        alert(
            `Suma total de las notas acumuladas: ${nSumaNotas}
        Cantidad total de exámenes rendidos: ${nCantExamenes}
        ${sNombreAlumno} obtuvo en ${sMateria} un promedio de ${nPromedio}
        Aprobaste la materia. Felicitaciones!!!!
        `
        );
    } else {
        alert(
            `Suma total de las notas acumuladas: ${nSumaNotas}
        Cantidad total de exámenes rendidos: ${nCantExamenes}
        ${sNombreAlumno} obtuvo en ${sMateria} un promedio de ${nPromedio}
        Sos crack!!!!.
        `
        );
    }
} //fin del else principal
