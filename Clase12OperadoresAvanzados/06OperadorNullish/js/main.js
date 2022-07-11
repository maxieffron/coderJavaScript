
   /*EJEMPLO 1 */
   let nombreUsuario = localStorage.getItem("nombreUsuario") 

   if(!nombreUsuario)
   {
     nombreUsuario = "NO HAY USUARIO";
   }
 
   console.log(nombreUsuario)
 
   let nombreUsuario2 = localStorage.getItem("nombreUsuario") ?? "NO HAY USUARIO";
   console.log("[NULLISH]", nombreUsuario2)