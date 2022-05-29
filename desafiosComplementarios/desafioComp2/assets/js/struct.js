"use strict";
/*
Aquí se definen las clases y las constantes que corresponden al negocio
*/

/*
 ************************
 ****** CONSTANTES ******
 ************************
 */

// ****** PRODUCTOS ******
// Circulares
const CIRCULAR_25 = 1;
const CIRCULAR_30 = 2;
const CIRCULAR_35 = 3;
//Rectangulares
const REC_20X30 = 4;
const REC_30X40 = 5;
//-----------------------------------------------------------------------

/*
 ********************
 ****** CLASES ******
 ********************
 */

class TiposProducto {
    builder(idTipoProd, tipoProducto) {
        this.idTipoProd;
        this.tipoProducto;
    }
}

class medidas {
    builder(idMedida, medida, descripcion, precio) {
        this.idMedida;
        this.medida;
        this.descripcion;
        this.precio;
    }
}

class Productos {
    builder(idProducto, nombre, descripcion, medida, precio) {
        this.idProducto;
        this.nombre;
        this.descripcion;
        this.medida;
        this.precio;
    }
}

class Items {
    builder(idItem, producto, cantidad) {
        this.idItem;
        this.producto;
        this.cantidad;
    }
}
/*
class Pedidos {
    builder(idPedido, nomCliente, item) {
        this.idPedido;
        this.nomCliente;
        this.item;
    }
}
*/
//-----------------------------------------------------------------------

// ****** TIPOS DE PRODUCTO ******
const tipoProdCirc = new TiposProducto(1, "Reloj Circular");
const tipoProdRec = new TiposProducto(2, "Reloj Rectangular");
aTiposProducto = [tipoProdCirc, tipoProdRec];

// ****** MEDIDAS ******
const med25 = new medidas(1, "25", "25 cm de diámetro", 100);
const med30 = new medidas(2, "30", "30 cm de diámetro", 200);
const med35 = new medidas(3, "35", "35 cm de diámetro", 300);
const med20x30 = new medidas(4, "20x30", "20x30 cm", 500);
const med30x40 = new medidas(5, "30x40", "30x40 cm", 800);
const aMedidas = [med25, med30, med35, med20x30, med30x40];

// ****** PRODUCTOS ******
//const aProductos = [];
//-----------------------------------------------------------------------

//Función que crea una instancia de cada producto
function uploadProducts() {
    const relCircular25 = new Productos(
        CIRCULAR_25,
        aTiposProducto[0].tipoProducto,
        aMedidas[0].descripcion,
        aMedidas[0].medida,
        aMedidas[0].precio
    );

    const relCircular30 = new Productos(
        CIRCULAR_30,
        aTiposProducto[0].tipoProducto,
        aMedidas[1].descripcion,
        aMedidas[1].medida,
        aMedidas[1].precio
    );

    const relCircular35 = new Productos(
        CIRCULAR_35,
        aTiposProducto[0].tipoProducto,
        aMedidas[2].descripcion,
        aMedidas[2].medida,
        aMedidas[2].precio
    );

    const relRectangular20x30 = new Productos(
        REC_20X30,
        aTiposProducto[1].tipoProducto,
        aMedidas[3].descripcion,
        aMedidas[3].medida,
        aMedidas[3].precio
    );

    const relRectangular30x40 = new Productos(
        REC_30X40,
        aTiposProducto[1].tipoProducto,
        aMedidas[4].descripcion,
        aMedidas[4].medida,
        aMedidas[4].precio
    );
}
