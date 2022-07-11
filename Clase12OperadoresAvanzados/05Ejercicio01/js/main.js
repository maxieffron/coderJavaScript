/*
    Escriba un programa que le pida al usuario su nombre
    Si el usuario escribe un nombre, muestre el mensaje 
    ¡Bienvenido, ${nombreIngresado}!
    En caso contrario, muestre el mensaje: 
    Debes ingresar un nombre, y un botón que permita repetir la acción.
    Si el usuario hace 2 intentos y no ha escrito su nombre, 
    en el tercer intento se debe mostrar un mensaje que diga: 
    'No podemos continuar,
    por favor comuníquese con el administrador del sistema' 

    Debe usar operadores avanzados para esta simulación

*/
let contador = 1;
mostrarMensaje();



function mostrarMensaje() {
    document.body.innerHTML = "";

    if (contador < 3) {

        let nombre = prompt("Escriba su nombre");
        let mensaje = nombre !== "" ? `Bienvenido, ${nombre}` : `Debe Ingresar un nombre`;

        const div = document.createElement("div");
        div.innerHTML = mensaje;
        document.body.appendChild(div);

        nombre === "" && mostrarBoton();
        contador++;
    }
    else {
        mostrarMensajeAdmin();
    }

}

function mostrarBoton() {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        mostrarMensaje()
    });
    btn.innerHTML = "Intentar de nuevo"
    document.body.appendChild(btn);

}

function mostrarMensajeAdmin() {
    alert("COntacte Al Administrador")
}