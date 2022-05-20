"use strict";

/*
CONSIGNA: Negocio de relojes de pared y cuadros artesanales
1) Ingresar producto --> Reloj Circular, Rectangular, Tríptico, Cuadro o Cuadro Tríptico (1,2,3,4 o 5)
2) Ingresar Medida --> Circular(25cm, 30cm o 35cm de diámetro). El resto --> 20x30cm 30x40cm o 40x60cm
3) Ingresar Cantidad.
--------------- SE REPITEN LOS PASOS 1, 2 Y 3 HASTA QUE FINALICE EL PEDIDO ---------------
4) Ingresar Código de Descuento (Código de 6 letras). Si no se completa, no hay descuento.
5) Ingresar Nombre del cliente.
6) Muestra por pantalla el pedido realizado.

*/

// ****** PRODUCTOS ******
const REL_CIRCULAR = 1;
const REL_RECTANGULAR = 2;
const REL_TRIPTICO = 3;
const CUADRO_RECTANGULAR = 4;
const CUADRO_TRIPTICO = 5;

// ****** MEDIDAS ******

// Circulares
const CIRCULAR_25 = 25;
const CIRCULAR_30 = 30;
const CIRCULAR_35 = 35;
//Rectangulares
const REC_20X30 = 1;
const REC_30X40 = 2;
const REC_40X60 = 3;

// ****** CONTADORES ******
let nCantRelCirc = 0;
let nCantRelRec = 0;
let nCantRelTri = 0;
let nCantCuadroRec = 0;
let nCantCuadroTri = 0;

//Validar el producto ingresado
function validateProduct(prod) {
    if (prod >= 1 && prod <= 5) {
        switch (prod) {
            case REL_CIRCULAR:
                console.log(`El producto seleccionado es un Reloj Circular`);
                break;

            case REL_RECTANGULAR:
                console.log(`El producto seleccionado es un Reloj Rectangular`);
                break;

            case REL_TRIPTICO:
                console.log(`El producto seleccionado es un Reloj Tríptico`);
                break;

            case CUADRO_RECTANGULAR:
                console.log(
                    `El producto seleccionado es un Cuadro Rectangular`
                );
                break;

            case CUADRO_TRIPTICO:
                console.log(`El producto seleccionado es un Cuadro Tríptico`);
                break;

            default:
                break;
        }

        return true;
    } else {
        return false;
    }
}

//Ingresar Medida
function productSize(prod, medida) {
    do {
        medida = Number(
            prompt(
                "¿En qué tamaño lo quiere llevar?\n" +
                    "25 = Reloj Circular 25cm de diámetro \n" +
                    "30 = Reloj Circular 30cm de diámetro \n" +
                    "35 = Reloj Circular 35cm de diámetro \n" +
                    "1 =  Rectangular de 20x30cm \n" +
                    "2 = Rectangular de 30x40cm \n" +
                    "3 = Rectangular de 40x60cm"
            )
        );

        if (prod === REL_CIRCULAR) {
            // ** Circular **
            if (
                medida === CIRCULAR_25 ||
                medida === CIRCULAR_30 ||
                medida === CIRCULAR_35
            ) {
                //Medida Correcta
                return true;
            } else {
                alert(
                    "La medida ingresada no es correcta. Deberá ingresarla nuevamente."
                );
                medida = 0;
            }
        } else {
            //------------------------------------------------
            // ** Rectangular **
            if (
                medida === REC_20X30 ||
                medida === REC_30X40 ||
                medida === REC_40X60
            ) {
                //Medida Correcta
                return true;
            } else {
                alert(
                    "La medida ingresada no es correcta. Deberá ingresarla nuevamente."
                );
                medida = 0;
            }
        }
    } while (medida === 0);
}

function makeAnOrder() {
    let medida = 0;
    let cantidad = 0;

    do {
        //Ingresar Producto
        let producto = Number(
            prompt(
                "¿Qué producto desea comprar? \n" +
                    "1 = Reloj Circular \n" +
                    "2 = Reloj Rectangular \n" +
                    "3 = Reloj Tríptico \n" +
                    "4 = Cuadro Rectangular \n" +
                    "5 = Cuadro Tríptico \n" +
                    "0 = Finalizar Pedido"
            )
        );

        //Validar el producto ingresado
        if (!validateProduct(producto)) {
            if (producto === 0) {
                alert(`El pedido ha finalizado`);
            } else if (producto >= 6) {
                alert(`El producto ingresado no está entre nuestros artículos`);
            }
        } else {
            //Ingresar Medida
            if (productSize(producto, medida)) {
                cantidad = 1;
            }
        }
    } while (producto != 0);
}

// ****** Comienza el programa ******
makeAnOrder();
