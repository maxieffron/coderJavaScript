// addEventListener
const boton = document.getElementById("miBoton1");
boton.addEventListener("click", ()=>{
        alert("HOLA, SOY EL BOTÓN 1")
    });


// onclick
const boton2 = document.getElementById("miBoton2");
boton2.onclick = ()=>{ boton2.innerHTML="SOY EL BOTÓN 2"  };
