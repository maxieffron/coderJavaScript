   /*
      Escriba un programa que pida al usuario:
      Una operacion: SUMA / MUL 
      2 números
      e imprima en consola, el resultado de la operación. 

   */ 

 ""
 ''
 ``

   const operacion = prompt(`INGRESE UNA OPERACION: 
                              SUMA 
                              MUL`);

   const numero1 = Number(prompt("Ingrese un número"));
   const numero2 = Number(prompt("Ingrese otro número"));

   if(isNaN(numero1) || isNaN(numero2))
   {
      alert("NUMEROS NO VALIDOS")
   }
   else
   {
      if(operacion==="SUMA")
      {
         console.log("LA SUMA ES: "+ (numero1+numero2));
      }
      else if(operacion==="MUL")
      {
         console.log("LA MUL ES: "+ (numero1*numero2));
      }
      else 
      {
         console.log("OPERACION INVÁLIDA");
      }
   }