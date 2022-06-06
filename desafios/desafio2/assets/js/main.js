"use strict";

// ****** CARRITO DE COMPRAS ******
//let boton_mas; // = document.getElementById("btn-add");
//let boton_menos; // = document.getElementById("btn-sustract");

//-------------------------------------------------------

//Función que crea una instancia de cada producto
function uploadProducts() {
    // ****** PRODUCTOS ******
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

    aProductos = [
        relCircular25,
        relCircular30,
        relCircular35,
        relRectangular20x30,
        relRectangular30x40,
    ];
}
function loadingGrid() {
    //Cargamos los productos en la grilla
    let container_Productos = document.getElementById("container-products");

    let nombreCliente = prompt(`Hola!! \n¿Cuál es su nombre?`);

    container_Productos.innerHTML =
        container_Productos.innerHTML +
        `
    <h2>Hola <span>${nombreCliente}!!</span></h2>
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
                    <li id="precioProd" class="products">$${li_PrecioProducto}</li>
                    <li class="products"> <button onclick="getIdProd(this)" id=buy${li_IdProducto} class="btn-Buy">Comprar</button></li>
                    
                </ul>
        `;
    }
}

//Con esto, obtengo el ID del botón "Comprar"
function getIdProd(btnComprar) {
    //Nos guardamos el Id del Producto
    let idElegido = btnComprar.id.toString();
    idElegido = idElegido.substr(3, idElegido.length - 1);

    //Buscamos el producto correcto para luego agregarlo al carrito
    getProduct(idElegido);
}

function getProduct(idElegido) {
    if (aProductos.some((elem) => elem.idProducto === Number(idElegido))) {
        //Producto Encontrado

        //Agregamos el producto al carrito
        addToCart(aProductos[idElegido - 1], idElegido);
    }
}

//Agregamos el producto al carrito
function addToCart(prodComprado, idElegido) {
    let buy = document.querySelector(".container-selected-products");

    buy.innerHTML = `
    <ul class="list-selected-product">
    <li class="selected-product cart-name"> <h3>Nombre: ${prodComprado.nombre} </h3></li>
    <li class="selected-product cart-description"> <h3>Descripción: ${prodComprado.descripcion} </h3></li>
    <li class="selected-product cart-price"> <h3>Precio: $${prodComprado.precio}</h3></li>
    <li class="selected-product">
        <div class="cart-buttons">
            <button onclick="getIdBtn(this,false)" id="btn-sus${idElegido}" class="btn-sustract">-</button> 
            <h3 id="cant-products${idElegido}"> 1 </h3> 
            <button onclick="getIdBtn(this,true)" id="btn-add${idElegido}" class="btn-add">+</button>
        </div>
    </li>
</ul>`;

    /*
    boton_mas = document.getElementById(`btn-add${idElegido}`);
    boton_menos = document.getElementById(`btn-sus${idElegido}`);
    contador = document.getElementById(`cant-products${idElegido}`);
    cant = contador.innerText;
    */
}

function getIdBtn(botonBuy, bSuma) {
    let contador; // = document.getElementById("cant-products");
    let cant = 0; // contador.innerText;
    let idBoton = botonBuy.id.toString();
    idBoton = Number(idBoton.substr(7, idBoton.length - 1));

    contador = document.getElementById(`cant-products${idBoton}`);
    cant = contador.innerText;

    if (bSuma) {
        //Es una suma
        cant++;
        contador.innerText = cant;
    } else {
        //Es una resta
        cant--;

        if (cant < 1) {
            alert("No es posible seguir quitando productos del carrito");
            cant = 1;
        } else {
            contador.innerText = cant;
        }
    }
}

function main() {
    //Carga de Productos
    window.addEventListener("load", uploadProducts());

    //Llenamos la grilla con los productos
    loadingGrid();
}

main();
