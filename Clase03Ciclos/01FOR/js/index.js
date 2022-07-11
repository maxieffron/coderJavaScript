
 // Imprimir números del 1 al 10;

 //INICIO Y UN FIN


 const datoUsuario = Number(prompt("Ingresa un numero"));

 if(isNaN(datoUsuario))
 {
    alert("No ingresó un dato válido");
 }
 else
 {
    //i++ => i=i+1 => i+=1
    for(let i=1; i<=datoUsuario; i++)
    {
         console.log(i);
    }
 }

 if(!isNaN(datoUsuario))
 {
    //i++ => i=i+1 => i+=1
    for(let i=1; i<=datoUsuario; i++)
    {
         console.log(i);
    }
 }
 else
 {
     alert("No ingresó un dato válido");
 }


  /* 
    i = 1 // => 1
    i = 2 // => 2
    i = 3 // => 3
    ...
    i= 10 => 10
    i=11 => termina el ciclo

  */

