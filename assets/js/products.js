"use strict";

//Array de Productos
let aProductos = [];
//Array de Productos que se van agregando al carrito de compras
let aProductsCart = [];

// ****** CLASE PRODUCTOS ******
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

//-----------------------------------------------------------------------------------------

function loadingProducts() {
    /****** Levantamos los productos a través de un fetch.
     * La ruta relativa del fetch se arma partiendo de la ruta en donde se encuentra
     * este mismo archivo.
     * Los productos se encuentran en un JSON local. Una vez obtenidos los productos, los
     * agregamos a un array para poder utilizarlos.
     *
     * La promesa nos devuelve un objeto de tipo Response. Pero para acceder al contenido
     * de ese objeto (Todos los productos), hay que hacer otro ".then"
     *  ******/

    fetch("../js/products_Definition.json")
        .then((response) => response.json())
        .then((JSONProductos) => {
            //Guardamos en el array cada uno de los productos
            for (const dataProd of JSONProductos.productos) {
                aProductos.push(new Productos(dataProd));
            }

            //Ingresamos el nombre del cliente
            inputNameUser();

            //Llenamos la grilla con los productos de forma dinámica
            loadingGrid();
        })

        //La promesa devuelve un error
        .catch((error) => {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `Error ${error}`,
                showConfirmButton: false,
                timer: 4000,
            });
        });
}

function loadingCart() {
    /************************************************************************************************************
Verificamos si al recargar la página ya habían productos cargados en el carrito. De haberlos, los agregamos
*************************************************************************************************************/
    if (!(localStorage.getItem("productos") === null)) {
        aProductsCart = JSON.parse(localStorage.getItem("productos"));

        for (const prod of aProductsCart) {
            addToCart(prod, prod.idProducto);
        }
    }
}

function loadingGrid() {
    /************************************************************************************************************
Llenamos la grilla con los productos de forma dinámica
*************************************************************************************************************/

    //Cargamos los productos en la grilla
    let container_Productos = document.getElementById(
        "container-shopping-products"
    );

    //Creamos una lista
    let lista = document.createElement("ul");
    lista.className = "products-list";
    container_Productos.appendChild(lista);

    //Se recorre todo el array de productos y se van agregando a la lista de productos en pantalla
    for (let prod of aProductos) {
        lista.innerHTML += ` 
        
            <li class="idProd products">

                <div class="cont-images">
                    <img class="img-Product" src="${prod.imagen}" alt="${
            prod.nombre
        }">
                </div>

                <div class="cont-info-prod">
                    <h3>${prod.nombre}</h3>
                    <h3>${prod.descripcion}</h3>
                    <h3 id="h3-price">$${prod.precio.toFixed(2)}</h3>
                    <button onclick="getIdProd(this)" id=buy${
                        prod.idProducto
                    } class="btn-Buy">Comprar</button>
                   
                   
                </div>

            </li>`;
    }
}

function getIdProd(btnComprar) {
    /************************************************************
     ****** Con esto, se obteine el ID del botón "Comprar" ******
     ************************************************************/

    //Nos guardamos el Id del Producto
    let idElegido = btnComprar.id.toString();
    idElegido = idElegido.substr(3, idElegido.length - 1);

    //Buscamos el producto correcto para luego agregarlo al carrito
    getProduct(idElegido);
}

function getProduct(idElegido) {
    /***************************************************************************
     ****** Buscamos el producto correcto para luego agregarlo al carrito ******
     **************************************************************************/

    //Primero verificamos que el producto existe.
    const bExistProduct = aProductos.some(
        (elem) => elem.idProducto === Number(idElegido)
    );

    if (bExistProduct) {
        //Verificamos si este producto ya fue agregado al carrito
        //Para ello, verificamos en el array de productos si existe.

        //if (localStorage.getItem(aProductos[idElegido - 1].nombre) === null) {
        // USAR ESTO EN EL FUTURO:
        if (!bexistProductCart(aProductos[idElegido - 1].nombre)) {
            /** Si el producto NO fue agregado al carrito, lo agregamos  **/

            //Le agregamos al objeto el atributo Cantidad de Productos
            const addedProduct = {
                ...aProductos[idElegido - 1],
                cantidad: 1,
                precioParcial: aProductos[idElegido - 1].precio,
            };

            //Lo agregamos al array de productos agregados al carrito
            saveProductsCart(addedProduct);

            //Agregamos el producto al carrito
            addToCart(addedProduct, idElegido);
        } else {
            /** El producto YA EXISTE en el carrito  **/
            Swal.fire({
                position: "center",
                icon: "warning",
                title: `El producto ${
                    aProductos[idElegido - 1].nombre
                } ya fue agregado al carrito de compras`,
                showConfirmButton: false,
                timer: 3000,
            });
        }
    }
}

function addToCart(prodComprado, idElegido) {
    /***************************************************************
     *** Hacemos el renderizado del producto agregado al carrito ***
     ***************************************************************/

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
            <h3 class = "cart-name"> <span>Nombre:</span> ${
                prodComprado.nombre
            } </h3>
            <h3 class="cart-description"><span>Descripción:</span> ${
                prodComprado.descripcion
            } </h3>
            <h3 class="cart-price"><span>Precio:</span> $${prodComprado.precio.toFixed(
                2
            )}</h3>
        </div>
    
        <div class="cart-buttons">
            <div id="dataProduct">
            <button onclick="getIdBtnSumaResta(this,false)" id="btn-sus${idElegido}" class="btn-sustract">-</button> 
            <h3 id="cant-products${idElegido}"> ${prodComprado.cantidad} </h3> 
            <button onclick="getIdBtnSumaResta(this,true)" id="btn-add${idElegido}" class="btn-add">+</button>
            </div>

            <div id="precioParcial${idElegido}">
            <h3>Precio: $${
                //prodComprado.precio * prodComprado.cantidad
                prodComprado.precioParcial.toFixed(2)
            }</h3></div>
        </div>
        
    
    </div>`;

    //Total de la compra
    let TotalPrice = document.getElementById("totalPrice");
    TotalPrice.innerText = `Total: $${getTotalPrice().toFixed(2)}`;

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

function getIdBtnSumaResta(botonBuy, bSuma) {
    /**************************************************************************************
     *** Esta función suma o resta un producto en el carrito, según el botón presionado ***
     *************************************************************************************/

    let contador; // = document.getElementById("cant-products");
    let cant = 0; // contador.innerText;
    let idBotonBuy = botonBuy.id.toString();
    idBotonBuy = Number(idBotonBuy.substr(7, idBotonBuy.length - 1));

    //Cantidad de Productos
    contador = document.getElementById(`cant-products${idBotonBuy}`);
    cant = contador.innerText;

    //Precio Parcial
    let divPrecioParcial = document.querySelector(
        `#precioParcial${idBotonBuy} > h3`
    );
    let parcial = 0;

    //Transformamos el string en un objeto para poder actualizar la cantidad
    //let actualProduct = localStorage.getItem(idBotonBuy);
    //actualProduct = JSON.parse(actualProduct);

    if (bSuma) {
        //Es una suma
        cant++;
        contador.innerText = cant;
    } else {
        //Es una resta
        cant--;

        if (cant < 1) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "No es posible seguir quitando productos del carrito",
                showConfirmButton: false,
                timer: 3000,
            });
            cant = 1;
        } else {
            contador.innerText = cant;
        }
    }

    //Parcial de la compra
    parcial = updateProductsCart(idBotonBuy, false, cant);
    divPrecioParcial.innerText = `Precio: $${parcial.toFixed(2)}`;

    //Total de la compra
    let TotalPrice = document.getElementById("totalPrice");
    TotalPrice.innerText = `Total: $${getTotalPrice().toFixed(2)}`;
}

function getTotalPrice() {
    //Obtenemos el total de la compra
    let suma = 0;
    for (const prod of aProductsCart) {
        suma += prod.precioParcial;
    }

    return suma;
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

    //** BORRAMOS EL PRODUCTO DEL CARRITO **/
    updateProductsCart(idBotonRemove, true, 0);

    //Borramos el producto del DOM
    const removeProd = document.getElementById(`producto${idBotonRemove}`);
    removeProd.remove();

    //Total de la compra
    let TotalPrice = document.getElementById("totalPrice");
    TotalPrice.innerText = `Total: $${getTotalPrice().toFixed(2)}`;

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

function finishedPurchase() {
    /* ****** Verificamos si hay productos en el carrito ******
  Si hay productos, consultamos si se quiere finalizar o no la compra ****** */

    const btnCheckOut = document.querySelector("#btn-checkout");

    btnCheckOut.addEventListener("click", () => {
        if (aProductsCart.length > 0) {
            //Swal.fire(`Su compra ha finalizado.\n Gracias por elegirnos!!`);

            //Confirmamos o no la compra
            Swal.fire({
                title: "¿Realmente desea finalizar la compra?",
                icon: "warning",
                //iconColor: "#337cae",
                showCancelButton: true,
                cancelButtonText: "No",
                confirmButtonColor: "#337cae",
                cancelButtonColor: "#ff8800",
                confirmButtonText: "Sí",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: `Su compra ha finalizado.\n Gracias ${getUser().toUpperCase()} por elegirnos!!`,
                        icon: "success",
                        //iconColor: "#337cae",
                        confirmButtonColor: "#ff8800",
                        showCancelButton: false,
                    });
                }
            });
        }
    });
}

function buyActive() {
    /*Se verifica si hay productos cargados en el arrito. En base a eso, habilitamos o deshabilitamos el botón "Finalizar Compra" */
    const btnCheckOut = document.querySelector("#btn-checkout");

    if (aProductsCart.length === 0) {
        //Si no hay productos, deshabilitamos el botón "Finalizar Compra"
        btnCheckOut.disabled = true;
        btnCheckOut.setAttribute("style", "background-color:#c4c4c4;");
    } else {
        //Si no hay productos, habilitamos el botón "Finalizar Compra"
        btnCheckOut.disabled = false;
        btnCheckOut.setAttribute("style", "background-color:#ff8800;");
    }
}

function main() {
    if (isUserLogged()) {
        //Agregamos el botón "Cerrar Sesión"
        createButtonCloseSession();

        //Carga de Productos
        window.addEventListener("load", loadingProducts());

        /*
        //Ingresamos el nombre del cliente
        inputNameUser();

        //Llenamos la grilla con los productos de forma dinámica
        loadingGrid();
        */

        //Verificamos si hay productos en el carrito
        buyActive();
        // finishedPurchase();

        //Verificamos si al recargar la página ya habían productos cargados en el carrito. De haberlos, los agregamos
        loadingCart();
    }

    //Total de la compra
    let TotalPrice = document.getElementById("totalPrice");
    TotalPrice.innerText = `Total: $${getTotalPrice().toFixed(2)}`;

    //Finalizar Compra
    //finishedPurchase();
    //}
}

main();
finishedPurchase();
dieSession("../../index.html");
