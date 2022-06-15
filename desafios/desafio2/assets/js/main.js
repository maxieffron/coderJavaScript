"use strict";

// ****** CARRITO DE COMPRAS ******
//let boton_mas; // = document.getElementById("btn-add");
//let boton_menos; // = document.getElementById("btn-sustract");

//-------------------------------------------------------

function loadingProducts() {
    for (const prod of products) {
        //Almacenamos todos los productos en un array
        aProductos.push(new Productos(prod));
    }
}

//Llenamos la grilla con los productos de forma dinámica
function loadingGrid() {
    //Cargamos los productos en la grilla
    let container_Productos = document.getElementById("container-products");

    //let nombreCliente = prompt(`Hola!! \n¿Cuál es su nombre?`);
    let nombreCliente = "Homero Simpson";
    container_Productos.innerHTML += `
    <h2>Hola <span>${nombreCliente}!!</span></h2>`;

    //Creamos una lista
    let lista = document.createElement("ul");
    lista.className = "products-list";
    container_Productos.appendChild(lista);

    for (let prod of aProductos) {
        lista.innerHTML += ` 
        
            <li id="idProd" class="products">

                <div class="cont-images">
                    <img class="img-Product" src="${prod.imagen}" alt="${prod.nombre}">
                </div>

                <div class="cont-info-prod">
                    <h3>${prod.nombre}</h3>
                    <h3>${prod.descripcion}</h3>
                    <h3 id="h3-price">$${prod.precio}</h3>
                    <button onclick="getIdProd(this)" id=buy${prod.idProducto} class="btn-Buy">Comprar</button>
                </div>

            </li>`;
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
        //Producto Encontrado. Lo agregamos al localStorage
        localStorage.setItem(idElegido, aProductos[idElegido - 1]);

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
    window.addEventListener("load", loadingProducts());

    //Llenamos la grilla con los productos de forma dinámica
    loadingGrid();
}

main();
