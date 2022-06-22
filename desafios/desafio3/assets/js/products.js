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

function loadingCart() {
    //Verificamos si al recargar la página ya habían productos cargados en el carrito. De haberlos, los agregamos
    debugger;
    if (!localStorage.length == 0) {
        for (let ind = 0; localStorage.length; ind++) {
            const clave = localStorage.key(ind);
            let loadProducts = localStorage.getItem(clave);
            loadProducts = JSON.parse(loadProducts);
            //Aquí cargamos dinámicamente en el carrito los productos que ya estaban
            //almacenados en el storage.

            addToCart(loadProducts, loadProducts.idProducto);
        }
    }
}

//Llenamos la grilla con los productos de forma dinámica
function loadingGrid() {
    //Cargamos los productos en la grilla
    let container_Productos = document.getElementById(
        "container-shopping-products"
    );

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
    const bExistProduct = aProductos.some(
        (elem) => elem.idProducto === Number(idElegido)
    );
    if (bExistProduct) {
        //Verificamos si este producto ya fue agregado al carrito
        if (localStorage.getItem(idElegido) === null) {
            //Le agregamos al objeto el atributo Cantidad de Productos
            const addedProduct = { ...aProductos[idElegido - 1], cantidad: 1 };

            //Producto Encontrado. Lo agregamos al localStorage
            localStorage.setItem(idElegido, JSON.stringify(addedProduct));
            //Agregamos el producto al carrito
            addToCart(addedProduct, idElegido);
        } else {
            alert(
                `El producto ${
                    aProductos[idElegido - 1].nombre
                } ya fue agregado al carrito de compras`
            );
        }
    }
}

//Agregamos el producto al carrito
function addToCart(prodComprado, idElegido) {
    let shoppingCart = document.getElementById("container-shopping-cart");

    //Creamos el div que contiene la info del producto y la foto
    let buy = document.createElement("div");
    buy.className = "container-selected-products";
    buy.setAttribute("id", `producto${idElegido}`);
    shoppingCart.appendChild(buy);

    //Creamos el div de la foto
    let div_photo_product = document.createElement("div");
    div_photo_product.className = "selected-product-photo";
    buy.appendChild(div_photo_product);
    div_photo_product.innerHTML = `<img id="cart-photo${idElegido}" src="${prodComprado.imagen}"> </img>`;

    //buy = document.querySelector(".container-selected-products");

    buy.innerHTML += `
    <div class="list-selected-product">

        <button id="btn-remove${idElegido}" class="btnRemoveItem" onclick="removeProduct(this)">X</button>
        <div class="selected-product">
            <h3 class = "cart-name"> <span>Nombre:</span> ${prodComprado.nombre} </h3>
            <h3 class="cart-description"><span>Descripción:</span> ${prodComprado.descripcion} </h3>
            <h3 class="cart-price"><span>Precio:</span> $${prodComprado.precio}</h3>
        </div>
    
        <div class="cart-buttons">
            <button onclick="getIdBtn(this,false)" id="btn-sus${idElegido}" class="btn-sustract">-</button> 
            <h3 id="cant-products${idElegido}"> 1 </h3> 
            <button onclick="getIdBtn(this,true)" id="btn-add${idElegido}" class="btn-add">+</button>
        </div>
    
    </div>`;

    //Mostramos popup con Toastify al agregar un producto al carrito
    Toastify({
        text: `Agregaste al carrito el producto ${prodComprado.nombre}`,
        gravity: "top",
        position: "right",
        style: {
            background: "#337cae",
        },
        duration: 3000,
    }).showToast();

    //Verificamos si hay productos en el carrito
    buyActive();
}

function getIdBtn(botonBuy, bSuma) {
    let contador; // = document.getElementById("cant-products");
    let cant = 0; // contador.innerText;
    let idBotonBuy = botonBuy.id.toString();
    idBotonBuy = Number(idBotonBuy.substr(7, idBotonBuy.length - 1));

    contador = document.getElementById(`cant-products${idBotonBuy}`);
    cant = contador.innerText;

    //Transformamos el string en un objeto para poder actualizar la cantidad
    let actualProduct = localStorage.getItem(idBotonBuy);
    actualProduct = JSON.parse(actualProduct);

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
    actualProduct.cantidad = cant;
    //Actualizamos el localStorage
    localStorage.setItem(idBotonBuy, JSON.stringify(actualProduct));
}

function removeProduct(btnRemoveP) {
    //Función que elimina del localStorage y de HTML un ítem del carrito de compras.

    let idBotonRemove = btnRemoveP.id;
    idBotonRemove = idBotonRemove.substr(10, idBotonRemove.length - 1);

    //Obtenemos el nombre del producto que vamos a quitar del carrito
    let nombreElem = document.querySelector(
        `#producto${idBotonRemove} > .list-selected-product > .selected-product > .cart-name`
    );
    nombreElem = nombreElem.innerText;
    nombreElem = nombreElem.substr(8, nombreElem.length - 1);

    localStorage.removeItem(idBotonRemove);
    //Borramos el producto del DOM
    const removeProd = document.getElementById(`producto${idBotonRemove}`);
    removeProd.remove();

    //Mostramos popup con Toastify al agregar un producto al carrito
    Toastify({
        text: `Quitaste de carrito el producto ${nombreElem}`,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#ff8800",
        },
        duration: 3000,
    }).showToast();

    //Verificamos si hay productos en el carrito
    buyActive();
}

function inputNameUser() {
    let container_Produ = document.getElementById(
        "container-shopping-products"
    );

    let nombre = getUser();
    container_Produ.innerHTML += `
    <h2>Hola <span>${nombre}</span></h2>`;
}

function buyActive() {
    //Verificamos si hay productos en el carrito

    const btnCheckOut = document.querySelector("#btn-checkout");

    localStorage.length === 0
        ? //Si no hay productos, deshabilitamos el botón "Finalizar Compra"
          (btnCheckOut.disabled = true)
        : //Si no hay productos, habilitamos el botón "Finalizar Compra"
          (btnCheckOut.disabled = false);
}

function finishedPurchase() {
    let button_Checkout = document.getElementById("btn-checkout");
    button_Checkout.addEventListener("click", () => {
        Swal.fire("Any fool can use a computer");

        /*
        //Confirmamos o no la compra
        Swal.fire({
            title: "¿Realmente desea finalizar la compra?",
            icon: "warning",
            iconColor: "#337cae",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonColor: "#337cae",
            cancelButtonColor: "#ff8800",
            confirmButtonText: "Sí!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¿Realmente desea finali",
                    icon: "warning",
                    iconColor: "#337cae",
                    showCancelButton: false,
                });
            }
        });
        */
    });
}

function main() {
    if (isUserLogged()) {
        //Carga de Productos
        window.addEventListener("load", loadingProducts());

        //Ingresamos el nombre del cliente
        inputNameUser();

        //Llenamos la grilla con los productos de forma dinámica
        loadingGrid();

        //Verificamos si hay productos en el carrito
        buyActive();

        //Verificamos si al recargar la página ya habían productos cargados en el carrito. De haberlos, los agregamos
        loadingCart();
        ///}

        //Finalizar Compra
        finishedPurchase();
    }
}

main();
