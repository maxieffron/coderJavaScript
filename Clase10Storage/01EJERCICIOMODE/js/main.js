  
   let modoPantalla = localStorage.getItem("MODO"); 
   let nuevoModo = "ligth"; 
   

   if(!modoPantalla)
   {
        modoPantalla = "ligth";
        nuevoModo="dark";
   }

   if(modoPantalla==="ligth")
   {
        setMode("ligth");
   }
   else
   {
        setMode("dark");
   }

   const btn = document.createElement("button");
   btn.innerText=`CAMBIAR A MODO ${nuevoModo}`;
   btn.addEventListener("click", ()=> {

       setMode(modoPantalla);
   });
   document.body.appendChild(btn);

   function setMode(modoActual)
   {
       if(modoActual==="ligth"){

       
        document.body.setAttribute("style", "background-color:black;color:white")
        localStorage.setItem("MODO", "dark");
       }
       else {
        document.body.setAttribute("style", "background-color:white;color:black")
        localStorage.setItem("MODO", "ligth");
       }
   }