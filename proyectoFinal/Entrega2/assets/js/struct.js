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

/*
class TiposProducto {
    constructor(idTipoProd, tipoProducto) {
        this.idTipoProd = idTipoProd;
        this.tipoProducto = tipoProducto;
    }
}
*/

/*
class medidas {
    constructor(idMedida, medida, descripcion, precio) {
        this.idMedida = idMedida;
        this.medida = medida;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
*/
//Array de Productos
let aProductos = [];
class Productos {
    /*
    constructor(idProducto, nombre, descripcion, medida, precio) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.medida = medida;
        this.precio = precio;
    }
    */
    constructor(obj) {
        this.idProducto = obj.idProducto;
        this.nombre = obj.nombre;
        this.categoria = obj.categoria;
        this.tipoProd = obj.tipoProd;
        this.descripcion = obj.descripcion;
        this.medida = obj.medida;
        this.imagen = obj.imagen;
        this.precio = obj.precio;
    }
}

class Items {
    constructor(idItem, producto, cantidad) {
        this.idItem = idItem;
        this.producto = producto;
        this.cantidad = cantidad;
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

/*
// ****** TIPOS DE PRODUCTO ******
const tipoProdCirc = new TiposProducto(1, "Reloj Circular");
const tipoProdRec = new TiposProducto(2, "Reloj Rectangular");
const aTiposProducto = [tipoProdCirc, tipoProdRec];

// ****** MEDIDAS ******
const med25 = new medidas(1, "25", "25 cm de diámetro", 100);
const med30 = new medidas(2, "30", "30 cm de diámetro", 200);
const med35 = new medidas(3, "35", "35 cm de diámetro", 300);
const med20x30 = new medidas(4, "20x30", "20x30 cm", 500);
const med30x40 = new medidas(5, "30x40", "30x40 cm", 800);
const aMedidas = [med25, med30, med35, med20x30, med30x40];
//-----------------------------------------------------------------------
*/
