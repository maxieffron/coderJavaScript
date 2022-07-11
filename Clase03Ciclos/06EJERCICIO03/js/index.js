/*
 Escriba un programa que calcule el 
 factorial de un número ingresado por el usuario

 El factorial está definido como: 

 fact(n) = n*(n-1)*(n-2)*(n-3)*.... *1

*/

let n = Number(prompt("Ingrese un número"))
let resultadoFactorial = 1;

  for(let numeroI=1;numeroI<=n;numeroI++)
  {
     //resultadoFactorial=resultadoFactorial*numeroI;
     resultadoFactorial*=numeroI;
  }

  alert("El resultado es: "+ resultadoFactorial);
