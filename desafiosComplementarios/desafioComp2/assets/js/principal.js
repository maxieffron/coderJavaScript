"use strict";

let nombreCliente = "";
let bPurchase = false;
let codDescuento = "";
let precioTotal = 0; //Precio CON descuento
let precioSubTotal = 0; //Precio SIN descuento
let porcDescuento = 0;
//Aquí se van guardando los productos que se van seleccionando
let aPedidos = [];
let aProductos = [];

function main() {
    //Instancia de productos
    uploadProducts();

    //Realizar la compra
    makeAPurchase();

    if (bPurchase) {
        alert("Su compra ha finalizado");
        console.log(`Su compra ha finalizado`);

        //Ingresar Descuento
        let desc = enterDiscount();
        //Hay pedido
        calculatePrice(desc);

        //Se imprime detalle de la compra por pantalla:
        armarDetalle();
    } else {
        alert(
            "Usted ha abandonado el local sin haber realizado ninguna compra."
        );
    }
}

/****** COMIENZA A CORRER EL PROGRAMA  ******/
function makeAPurchase() {
    let producto = 0;
    let idMedida = 0;
    let cantProductos = 0;

    nombreCliente = prompt("¿Cuál es su nombre?");
    console.log(`Hola ${nombreCliente}!! ¿Cómo estás?`);

    do {
        //Ingresar Producto
        producto = Number(
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
            } else {
                alert(`El producto ingresado no está entre nuestros artículos`);
            }
        } else {
            bPurchase = true; //Hay al menos un producto en el pedido.
            //Ingresar Medida
            idMedida = productSize(producto);
            //Ingresar cantidad del producto seleccionado
            cantProductos = cantProducts(producto, idMedida);

            //Realizar el pedido
            makeAnOrder(idMedida, cantProductos);

            let bOtherProduct = confirm("¿Desea llevar algo más?");
            if (!bOtherProduct) {
                //Si no quiero llevar más nada, salimos del bucle.
                producto = 0;
            }
        }
    } while (producto != 0);
}

//Validar el producto ingresado
function validateProduct(prod) {
    if (aTiposProducto.some((tipo) => tipo.idTipoProd === prod)) {
        //OK
        return true;
    } else {
        return false;
    }
}

//Ingresar Medida
function productSize(prod) {
    let med = 0;
    do {
        if (aTiposProducto[0].idTipoProd === prod) {
            // ** Circular **

            med = Number(
                prompt(
                    "¿En qué tamaño lo quiere llevar?\n" +
                        "1 = Reloj Circular 25cm de diámetro \n" +
                        "2 = Reloj Circular 30cm de diámetro \n" +
                        "3 = Reloj Circular 35cm de diámetro \n"
                )
            );

            //Es correcta la medida ingresadda?
            if (aMedidas.some((elem) => elem.idMedida === med)) {
                console.log(
                    `Usted ha seleccionado el ${
                        aProductos[med - 1].nombre
                    } de ${aMedidas[med - 1].descripcion}`
                );
                //Medida válida
                return med;
            } else {
                alert(
                    "La medida ingresada no es correcta. Deberá ingresarla nuevamente."
                );
                med = 0;
            }
        } else {
            //------------------------------------------------
            // ** Rectangular **

            med = Number(
                prompt(
                    "¿En qué tamaño lo quiere llevar?\n" +
                        "4 =  Reloj Rectangular de 20x30cm \n" +
                        "5 = Reloj Rectangular de 30x40cm \n"
                )
            );

            //Es correcta la medida ingresadda?
            if (aMedidas.some((elem) => elem.idMedida === med)) {
                console.log(
                    `Usted ha seleccionado el ${
                        aProductos[med - 1].nombre
                    } de ${aMedidas[med - 1].descripcion}`
                );
                //Medida válida
                return med;
            } else {
                alert(
                    "La medida ingresada no es correcta. Deberá ingresarla nuevamente."
                );
                med = 0;
            }
        }
    } while (med === 0);
}

//Ingresar la cantidad de productos
function cantProducts(prod, idMedida) {
    let nCantRelojes = 0;
    do {
        nCantRelojes = Number(
            prompt(
                `Producto seleccionado:\n
                ${aTiposProducto[prod - 1].tipoProducto}\n
                Medida: ${aMedidas[idMedida - 1].descripcion}\n
                Precio: $${aMedidas[idMedida - 1].precio}\n
                ¿Qué cantidad desea llevar?
                `
            )
        );

        if (nCantRelojes <= 0) {
            alert("Debe llevar al menos un producto seleccionado.");
        }
    } while (nCantRelojes <= 0);

    console.log(`Usted ha decidido llevar ${nCantRelojes} relojes`);
    return nCantRelojes;
}

function makeAnOrder(idMedida, cantProd) {
    let item = 0;
    let searchedProd = null;

    //Antes de guardar en el array un nuevo item, veremos si ya existe en mi pedido.
    if (aPedidos.length > 0) {
        //El idMedida coincide con el Id del Producto
        searchedProd = aPedidos.find(
            (elem) => elem.producto.idProducto === idMedida
        );
    }

    if (
        aPedidos.length === 0 ||
        searchedProd === undefined ||
        searchedProd === null
    ) {
        //Creamos un nuevo ítem (Producto)
        item = new Items(getIdItem(), aProductos[idMedida - 1], cantProd);
        //Guardar en un Array los productos que se van pidiendo.
        aPedidos.push(item);

        console.log(
            `Usted ha añadido a su carrito de compras el producto seleccionado`
        );
    } else {
        // ** Si el producto existe, actualizamos la cantidad de productos pedidos **
        aPedidos[searchedProd.idItem - 1].cantidad =
            aPedidos[searchedProd.idItem - 1].cantidad + cantProd;
    }
}

//Obtenemos un nuevo id por cada item generado en el pedido
function getIdItem() {
    if (aPedidos.length === 0) {
        return 1;
    } else {
        const ultId = aPedidos[aPedidos.length - 1]; //Esto me guarda el último item del array
        return ultId.idItem + 1; //Le sumo 1 al último id
    }
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

    let firstLetter = desc.substr(0, 1);
    //La paso a mayúscula
    firstLetter = firstLetter.toUpperCase();

    switch (firstLetter) {
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
            //10% de Descuento
            porcDescuento = 10;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tiene un 10% de descuento sobre el total de su compra."
            );
            break;

        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
            //20% de Descuento
            porcDescuento = 20;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tiene un 20% de descuento sobre el total de su compra."
            );
            break;

        case "K":
        case "L":
        case "M":
        case "N":
        case "Ñ":
        case "O":
            //30% de Descuento
            porcDescuento = 30;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tiene un 30% de descuento sobre el total de su compra."
            );
            break;

        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
            //40% de Descuento
            porcDescuento = 40;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tiene un 40% de descuento sobre el total de su compra."
            );
            break;

        case "U":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
            //50% de Descuento
            porcDescuento = 50;
            precioTotal = subTotal(porcDescuento);
            console.log(
                "Felicitaciones!! Tiene un 50% de descuento sobre el total de su compra."
            );
            break;
        default:
            //No tenes descuento
            console.log("Esta compra no contiene ningún descuento.");
            porcDescuento = 0;
            precioTotal = subTotal(porcDescuento);
            break;
    }
}

function subTotal(porcD) {
    let descAplicado = 0;

    for (const products of aPedidos) {
        //Total sin el descuento
        precioSubTotal =
            precioSubTotal + products.cantidad * products.producto.precio;
    }

    //Aplicando descuento...
    descAplicado = precioSubTotal - (precioSubTotal / 100) * porcD;

    //Devolvemos el importe con el descuento ya aplicado.
    return descAplicado;
}

//Armado del detalle de la compra
function armarDetalle() {
    let sMensaje = "";

    sMensaje = `${nombreCliente}, el detalle de su compra es el siguiente: \n`;

    for (const detalle of aPedidos) {
        sMensaje =
            sMensaje +
            `${detalle.producto.nombre} de ${detalle.producto.descripcion}      Cantidad: ${detalle.cantidad}      Precio Unitario: $${detalle.producto.precio}\n`;
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

//Comienzo
main();
