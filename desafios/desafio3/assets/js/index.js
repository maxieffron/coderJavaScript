"use strict";

/*
 ****** Aquí irá toda la implementación dinámica de la página principal *****
 */

//let nameUser = "";

function login() {
    const btn_Login = document.getElementById("btn-Login");

    btn_Login.addEventListener("click", () => {
        Swal.fire({
            title: `Hola!!\n Bienvenida/o a Dalet Design!!`,
            input: "text",
            inputLabel: "¿Cuál es tu nombre?",
            showCancelButton: false,

            //color: "#ff8800",
            imageUrl: "./assets/images/logo_DaletDesign.png",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Logo Dalet Design",
            confirmButtonText: "Ingresar",
            confirmButtonColor: "#337cae",
            inputValidator: (nombreCliente) => {
                // Si el valor es válido, debes regresar undefined. Si no, una cadena
                if (!nombreCliente) {
                    return "Por favor escribe tu nombre";
                }
                Swal.fire({
                    imageUrl: "./assets/images/logo_DaletDesign.png",
                    imageWidth: 200,
                    imageHeight: 200,
                    title: `Hola ${nombreCliente}!!`,
                    text: "Ingresando a nuestro shopping...",
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    setUser(nombreCliente); //Guardamos el usuario en el localStorage
                    createButtonCloseSession();
                    location.href = "./assets/pages/products.html";
                }, 3000);
            },
        });
    });
}

login();
//dieSession("index.html");
