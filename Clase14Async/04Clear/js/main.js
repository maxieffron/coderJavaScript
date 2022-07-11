//setTimeout


const msg = document.getElementById("msg");
msg.innerHTML="MENSAJE PARA EL USUARIO";
msg.setAttribute("style", "width:200px;margin-top:10%;margin-left:auto;margin-right:auto;border:1px solid red;border-radius:20px;padding:5%")

let contador = 0;

 let intervalHanlder = setInterval(()=>{

    msg.innerHTML=`han pasado ${contador} segundos`
    contador++;

    if(contador===5)
    {
        clearInterval(intervalHanlder);
    }

 },1000)