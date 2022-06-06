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
    constructor(idTipoProd, tipoProducto) {
        this.idTipoProd = idTipoProd;
        this.tipoProducto = tipoProducto;
    }
}

class medidas {
    constructor(idMedida, medida, descripcion, precio) {
        this.idMedida = idMedida;
        this.medida = medida;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Productos {
    constructor(idProducto, nombre, descripcion, medida, precio) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.medida = medida;
        this.precio = precio;
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

// ****** PRODUCTOS ******
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

    let aProductos = [
        relCircular25,
        relCircular30,
        relCircular35,
        relRectangular20x30,
        relRectangular30x40,
    ];

    //Cargamos los productos en la grilla
    let container_Productos = document.getElementById("container-products");

    container_Productos.innerHTML = `<h1>Dalet Design</h1>
    <ul class="products-title-table">
        <li class="products-title">Id</li>
        <li class="products-title">Nombre</li>
        <li class="products-title">Descripción</li>
        <li class="products-title">Medida</li>
        <li class="products-title">Precio</li>
    </ul>`;

    for (let prod of aProductos) {
        //id
        let li_IdProducto = prod.idProducto;

        //nombre
        let li_NomProducto = prod.nombre;

        //Descripción
        let li_DescripProducto = prod.descripcion;

        //Medida
        let li_MedidaProducto = prod.medida;

        //Precio
        let li_PrecioProducto = prod.precio;

        container_Productos.innerHTML =
            container_Productos.innerHTML +
            `
                <ul class="products-list">
                    <li id="idProd" class="products">${li_IdProducto}</li>
                    <li id="nombreProd" class="products">${li_NomProducto}</li>
                    <li id="descriProd" class="products">${li_DescripProducto}</li>
                    <li id="medidaProd" class="products">${li_MedidaProducto}</li>
                    <li id="precioProd" class="products">${li_PrecioProducto}</li>
                </ul>
        `;
    }
}

uploadProducts();
