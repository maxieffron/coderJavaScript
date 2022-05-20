"use strict";

/*
CONSIGNA: Negocio de relojes de pared y cuadros artesanales
1) Ingresar producto --> Reloj Circular, Rectangular (1 o 2)
2) Ingresar Medida --> Circular(25cm, 30cm o 35cm de diámetro). El resto --> 20x30cm o 30x40cm
3) Ingresar Cantidad.
--------------- SE REPITEN LOS PASOS 1, 2 Y 3 HASTA QUE FINALICE EL PEDIDO ---------------
4) Ingresar Código de Descuento (Código de 6 letras). Si no se completa, no hay descuento.
5) Ingresar Nombre del cliente.
6) Muestra por pantalla el pedido realizado.

*/

//Validar el producto ingresado
function validateProduct(prod) {
    if (prod === 1) {
        //OK
        return true;
    } else if (prod === 2) {
        //OK
        return true;
    } else {
        return false;
    }
}

//Ingresar Medida
function productSize(prod, medida) {
    do {
        if (prod === REL_CIRCULAR) {
            // ** Circular **

            medida = Number(
                prompt(
                    "¿En qué tamaño lo quiere llevar?\n" +
                        "25 = Reloj Circular 25cm de diámetro \n" +
                        "30 = Reloj Circular 30cm de diámetro \n" +
                        "35 = Reloj Circular 35cm de diámetro \n"
                )
            );

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

            medida = Number(
                prompt(
                    "¿En qué tamaño lo quiere llevar?\n" +
                        "1 =  Reloj Rectangular de 20x30cm \n" +
                        "2 = Reloj Rectangular de 30x40cm \n"
                )
            );

            if (medida === REC_20X30 || medida === REC_30X40) {
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

//Ingresar la cantidad
function productosAcumulados(prod, med, cant) {
    if (prod === REL_CIRCULAR) {
        //Medidas
        switch (med) {
            case CIRCULAR_25:
                console.log(
                    "El producto seleccionado es un Reloj Circular de 25cm de diámetro"
                );
                nCantRelCirc25 = nCantRelCirc25 + cant;
                break;

            case CIRCULAR_30:
                console.log(
                    "El producto seleccionado es un Reloj Circular de 30cm de diámetro"
                );
                nCantRelCirc30 = nCantRelCirc30 + cant;
                break;

            case CIRCULAR_35:
                console.log(
                    "El producto seleccionado es un Reloj Circular de 35cm de diámetro"
                );
                nCantRelCirc35 = nCantRelCirc35 + cant;
                break;

            default:
                break;
        }
    } else if (prod === REL_RECTANGULAR) {
        actualizarCantProductos(med, cant);
    }
}

function actualizarCantProductos(med, cant) {
    //Medidas

    if (med === REC_20X30) {
        //Reloj Rectangular 20x30 cm
        console.log(
            "El producto seleccionado es un Reloj Rectangular de 20x30cm"
        );
        nCantRelRec20_30 = nCantRelRec20_30 + cant;
    } else if (med === REC_30X40) {
        //Reloj Rectangular 30x40 cm
        console.log(
            "El producto seleccionado es un Reloj Rectangular de 30x40cm"
        );
        nCantRelRec30_40 = nCantRelRec30_40 + cant;
    }
}

/****** COMIENZA A CORRER EL PROGRAMA  ******/
function makeAnOrder() {
    nombre = prompt("¿Cuál es su nombre?");
    console.log(`Hola ${nombre}!! ¿Cómo estás?`);

    do {
        //Ingresar Producto
        let producto = Number(
            prompt(
                "¿Qué producto desea comprar? \n" +
                    "1 = Reloj Circular \n" +
                    "2 = Reloj Rectangular \n" +
                    "0 = Finalizar Pedido"
            )
        );

        //Validar el producto ingresado
        if (!validateProduct(producto)) {
            if (producto === 0) {
                break;
            } else if (producto >= 3) {
                alert(`El producto ingresado no está entre nuestros artículos`);
            }
        } else {
            bPurchase = true; //Hay al menos un producto en el pedido.
            //Ingresar Medida
            if (productSize(producto, medida)) {
                productosAcumulados(producto, medida, cantidad);
            }
        }
    } while (producto != 0);
}

//Ingresar Descuento
function enterDiscount() {
    codDescuento = prompt(
        "Ingrese su cupón de descuento de 6 letras (Opcional)"
    );
    //Validamos que tenga 6 dígitos
    while (codDescuento.length != 6) {
        if (!isNaN(codDescuento)) {
            //Es Número
            alert("El código debe tener únicamente 6 letras");
        } else {
            //Son Letras
            if (codDescuento.length == null) {
                return "";
                //break;
            } else {
                alert("El código debe tener únicamente 6 letras");
            }
        }
        codDescuento = prompt(
            "Ingrese su cupón de descuento de 6 letras (Opcional)"
        );
    }

    return codDescuento;
}

function calculatePrice(desc) {
    //Primera letra
    let firstLetter = desc.prototype.substring(0, 1);
    //La paso a mayúscula
    firstLetter = firstLetter.prototype.toUpperCase();

    switch (firstLetter) {
        case ("A", "B", "C", "D", "E"):
            //10% de Descuento
            porcDescuento = 10;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tenes un 10% de descuento sobre el total de tu compra."
            );
            break;

        case ("F", "G", "H", "I", "J"):
            //20% de Descuento
            porcDescuento = 20;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tenes un 20% de descuento sobre el total de tu compra."
            );
            break;

        case ("K", "L", "M", "N", "Ñ", "O"):
            //30% de Descuento
            porcDescuento = 30;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tenes un 30% de descuento sobre el total de tu compra."
            );
            break;

        case ("P", "Q", "R", "S", "T"):
            //40% de Descuento
            porcDescuento = 40;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tenes un 40% de descuento sobre el total de tu compra."
            );
            break;

        case ("U", "V", "W", "X", "Y", "Z"):
            //50% de Descuento
            porcDescuento = 50;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tenes un 50% de descuento sobre el total de tu compra."
            );
            break;
        default:
            //No tenes descuento
            porcDescuento = 0;
            precioTotal = subTotal(porcDescuento);
            break;
    }
}

function subTotal(porcD) {
    let descAplicado = 0;
    let sumaCirc = 0;
    let sumaRec = 0;

    //Total Circular
    sumaCirc =
        nCantRelCirc25 * PRECIO_CIRC_25 +
        nCantRelCirc30 * PRECIO_CIRC_30 +
        nCantRelCirc35 * PRECIO_CIRC_35;

    //Total Rectangular
    sumaRec =
        nCantRelRec20_30 * PRECIO_REC_20x30 +
        nCantRelRec30_40 * PRECIO_REC_30x40;

    //Precio sin descuento
    precioSubTotal = sumaCirc + sumaRec;
    //Aplicando descuento...
    descAplicado = precioSubTotal - (precioSubTotal / 100) * porcD;

    //Devolvemos el importe con el descuento ya aplicado.
    return descAplicado;
}

//Armado del detalle de la compra
function armarDetalle() {
    let sMensaje = "";

    sMensaje = `${nombre}, el detalle de su compra es el siguiente: \n`;

    if (nCantRelCirc25 > 0) {
        sMensaje =
            sMensaje +
            `Reloj Circular de 25cm de diámetro: ${nCantRelCirc25}      Precio Unitario:$${PRECIO_CIRC_25} \n `;
    }

    if (nCantRelCirc30 > 0) {
        sMensaje =
            sMensaje +
            `Reloj Circular de 30cm de diámetro: ${nCantRelCirc30}      Precio Unitario:$${PRECIO_CIRC_30} \n `;
    }

    if (nCantRelCirc35 > 0) {
        sMensaje =
            sMensaje +
            `Reloj Circular de 35cm de diámetro: ${nCantRelCirc35}      Precio Unitario:$${PRECIO_CIRC_35} \n `;
    }

    if (nCantRelRec20_30 > 0) {
        sMensaje =
            sMensaje +
            `Reloj Rectangular de 20x30 cm: ${nCantRelRec20_30}      Precio Unitario:$${PRECIO_REC_20x30} \n `;
    }

    if (nCantRelRec30_40 > 0) {
        sMensaje =
            sMensaje +
            `Reloj Rectangular de 30x40 cm: ${nCantRelRec30_40}      Precio Unitario:$${PRECIO_REC_30x40} \n `;
    }

    sMensaje = sMensaje + `Subtotal: $${precioSubTotal} \n`;

    if (porcDescuento != 0) {
        sMensaje = sMensaje + `Descuento aplicado: ${porcDescuento}% \n`;
    }

    sMensaje = sMensaje + `Total: $${precioTotal} \n`;

    sMensaje =
        sMensaje + `****** MUCHAS GRACIAS POR CONFIAR EN NOSOTROS ******`;

    //Mostramos el ticket por pantalla
    alert(sMensaje);
}

// **********************************
// ****** Comienza el programa ******
// **********************************

// ****** PRODUCTOS ******
const REL_CIRCULAR = 1;
const REL_RECTANGULAR = 2;

// ****** MEDIDAS ******

// Circulares
const CIRCULAR_25 = 25;
const CIRCULAR_30 = 30;
const CIRCULAR_35 = 35;
//Rectangulares
const REC_20X30 = 1;
const REC_30X40 = 2;

// ****** PRECIOS ******

//Circulares
const PRECIO_CIRC_25 = 100;
const PRECIO_CIRC_30 = 200;
const PRECIO_CIRC_35 = 300;

//Rectangulares
const PRECIO_REC_20x30 = 500;
const PRECIO_REC_30x40 = 800;

// ****** CONTADORES ******
//Circulares
let nCantRelCirc25 = 0;
let nCantRelCirc30 = 0;
let nCantRelCirc35 = 0;

//Relojes Rectangulares
let nCantRelRec20_30 = 0;
let nCantRelRec30_40 = 0;

//Variables
let bPurchase = false; //Hay o no hay compra
let producto = 0;
let medida = 0;
let cantidad = 0;
let nombre = "";
let codDescuento = "";
let precioTotal = 0; //Precio CON descuento
let precioSubTotal = 0; //Precio SIN descuento
let porcDescuento = 0;

makeAnOrder();

if (bPurchase) {
    alert("Su compra ha finalizado");
    //Ingresar Descuento
    let desc = enterDiscount();
    //Hay pedido
    calculatePrice(desc);

    //Se imprime detalle de la compra por pantalla:
    armarDetalle();
} else {
    alert("Usted ha abandonado el local sin haber realizado ninguna compra.");
}
