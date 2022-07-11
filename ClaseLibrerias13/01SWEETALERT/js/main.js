init();


function init() {
    saludarConSweetAlert();
    alertSinBotonDeConfirmacion();
    alertConImagenes();
    alertConEventos();
    ejercicioPedirDatos();

}

function ejercicioPedirDatos()
{
    const boton = document.getElementById("btnSweet5");
    boton.addEventListener("click", () => {

        let nombre = prompt("Ingresa tu nombre")

        Swal.fire({
            title: `¡Hola, ${nombre}!`,
            text: 'Esto es un saludo con Sweet Alert',
            icon: 'success',
            confirmButtonText: '¡Está muy Piola!',
        })


    })

}
function saludarConSweetAlert() {

    const boton = document.getElementById("btnSweet");
    boton.addEventListener("click", () => {

        Swal.fire({
            title: '¡Hola, a todos!',
            text: 'Esto es un saludo con Sweet Alert',
            icon: 'error',
            confirmButtonText: '¡Está muy Piola!',
        })


    })




}

function alertSinBotonDeConfirmacion() {
   
    const boton = document.getElementById("btnSweet2");
    boton.addEventListener("click", () => {

        Swal.fire({
            title: '¡Hola, a todos!',
            text: 'Esto es un saludo con Sweet Alert',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
        })


    })
}

function alertConImagenes() {

    const boton = document.getElementById("btnSweet3");
    boton.addEventListener("click", () => {

        Swal.fire({
            title: '¡Hola, a todos!',
            text: 'Esto es un saludo con Sweet Alert',
            icon: 'success',
            imageUrl: 'https://jw-webmagazine.com/wp-content/uploads/2021/09/howl003.jpeg', 
            imageWidth: 200, 
            background: 'aqua',
        })


    })

}

function alertConEventos() {

    const boton = document.getElementById("btnSweet4");
    boton.addEventListener("click", () => {

        Swal.fire({
            title: '¡Hola, a todos!',
            text: 'Esto es un saludo con Sweet Alert',
            icon: 'success',
            imageUrl: 'https://jw-webmagazine.com/wp-content/uploads/2021/09/howl003.jpeg', 
            imageWidth: 200, 
            showCancelButton: true,
            confirmButtonText: '¡VAMOS!', 
            cancelButtonText: '¡NO QUIERO!',
        }).then((resultado)=>{

            if(resultado.isConfirmed){
                alert("QUÉ BIEN");
            }
            else {
                alert("QUÉ MAL");
            }

        })


    })
}
