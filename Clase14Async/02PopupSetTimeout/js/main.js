//setTimeout


const msg = document.getElementById("msg");
msg.innerHTML="Bienvenido";
const nombre= prompt("Ingresa tu nombre")

  setTimeout(()=>{

    msg.innerHTML=`Bienvenido, ${nombre}`
       


  },2000)