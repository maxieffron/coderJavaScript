
   console.log("UNO", "o", "VARIAS", "CADENAS", "DE", "TEXTO");


 //Función que retorna función
 function mayorQue(n)
 {
        return (m) =>  m>n ;
 }

  const mayorquediez = mayorQue(10);
 
  console.log(mayorquediez(5)); // false;



 //Función que recibe función por parámetro
  
   function porCadaUno(arr, fun)
   {
       //for(let i=0;i<arr.length;i++)
       for(const elemento of arr)
       {
            fun(elemento);
       }
   }

     porCadaUno(["HOLa", "cacerola", "cómo", "estas"], console.log);

    