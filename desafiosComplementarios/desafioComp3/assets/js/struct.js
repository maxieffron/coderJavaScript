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
