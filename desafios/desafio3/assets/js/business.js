"use strict";

/*********************************************************************************
 ****** Aquí irá toda la implementación correspondiente a la capa de negocio *****
/*********************************************************************************/

/*****************************************************
 *** Métodos correspondientes al login del usuario ***
 *****************************************************/

function isUserLogged() {
    return localStorage.getItem("user") != null ? true : false;
}

function setUser(nameUser) {
    localStorage.setItem("user", nameUser);
}

function getUser() {
    return localStorage.getItem("user");
}

/*****************************************************************
 *** Métodos correspondientes al manejo del carrito de compras ***
 *****************************************************************/

function bexistProductCart(nameProducto) {
    /** Esta función indica si un producto está en array de los productos del carrito de compras **/

    const bExistProduct = aProductsCart.some(
        (elem) => elem.nombre === nameProducto
    );

    return bExistProduct;
}

function saveProductsCart(addedProduct) {
    /************************************************************************************************************
Esta función guardará en un array los productos que se van agregando al carrito de compras y el localStorage
*****************************************************************************************************************/

    aProductsCart.push(addedProduct);

    //Una vez que ya se agregó un nuevo producto en el array, sobreescribimos el localStorage con todo
    //el contenido del array. O sea, con las novedades.
    localStorage.setItem("productos", JSON.stringify(aProductsCart));
}

function updateProductsCart(idProdUpdate, bDeleteProduct, cantActual) {
    /******************************************************************************************************************
     * Esta función eliminará o actualizará el array de los productos que se van eliminando del carrito de compras y del localStorage ******************************************************************************************************************/

    let indiceUpdate = 0;
    let precioParcial = 0;

    //1)Traigo del localStorage todos los productos del carrito
    aProductsCart = JSON.parse(localStorage.getItem("productos"));

    //2)Buscamos dentro del array el objeto del producto que estoy quitando del carrito
    const prodUpdate = aProductsCart.find((elem, index) => {
        indiceUpdate = index;
        return elem.idProducto == idProdUpdate;
    });

    //3)Ahora actualizamos o borramos del array del carrito el producto que quité, accediendo con el índice, según
    //la operación que eligió el usuario

    if (bDeleteProduct) {
        //4)Precio Parcial (Cantidad * Precio)
        /*aProductsCart[indiceUpdate].precioParcial =
            aProductsCart[indiceUpdate].precio *
            aProductsCart[indiceUpdate].cantidad;
        precioParcial = aProductsCart[indiceUpdate].precioParcial;
        */

        aProductsCart.splice(indiceUpdate, 1);
    } else {
        //Cantidad actual de un mismo producto en el carrito
        aProductsCart[indiceUpdate].cantidad = cantActual;
        //4)Precio Parcial (Cantidad * Precio)
        aProductsCart[indiceUpdate].precioParcial =
            aProductsCart[indiceUpdate].precio * cantActual;
        precioParcial = aProductsCart[indiceUpdate].precioParcial;
    }

    //5)Sobreescribimos el localStorage con el carrito, pero ya sin el producto
    localStorage.setItem("productos", JSON.stringify(aProductsCart));

    //Devolvemos el importe parcial para reflejarlo en pantalla
    return precioParcial;
}

function createButtonCloseSession() {
    /* Esta función agrega un botón "Cerrar Sesión" en el menú*/
    const menuNav = document.querySelector(".menu-nav-ul");

    let itemNav = document.createElement("li");
    itemNav.className = "menu-item";
    itemNav.setAttribute("id", "btnCloseSession");
    itemNav.innerHTML += `<a href="#">Cerrar Sesión</a>`;

    //itemNav.innerText = "Cerrar Sesión";

    menuNav.appendChild(itemNav);
}

function dieSession(siteIndex) {
    /* Esta función quita el botón de "Cerrar Sesión" y elimina el usario del localStorage */

    const btnCerrarSession = document.getElementById("btnCloseSession");

    btnCerrarSession.addEventListener("click", () => {
        //Confirmamos o no si cerramos la sesión
        Swal.fire({
            title: "¿Realmente desea cerrar la sesión?",
            icon: "question",
            //iconColor: "#337cae",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonColor: "#337cae",
            cancelButtonColor: "#ff8800",
            confirmButtonText: "Sí!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `La sesión ha finalizado.`,
                    icon: "success",
                    //iconColor: "#337cae",
                    confirmButtonColor: "#ff8800",
                    showCancelButton: false,
                });

                btnCerrarSession.remove();

                //Lo quitamos del storage
                localStorage.clear();
                location.href = siteIndex;
            }
        });
    });
}
