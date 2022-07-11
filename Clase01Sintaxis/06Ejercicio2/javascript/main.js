
/*
    Escriba un programa que le pida a un usuario 2 números y muestre:

    A. El resultado de la suma en la consola
    B. El resultado de la multiplicaión en un alert


    Debe indicarle al usuario la operación ejecutada. 

    Por ejemplo, si el usuario ingresa los números 8 y 10

    Debe mostrar un alert que diga: 
    "La multiplicación de los números ingresados es: 80"

    Y en la consola: 
    "La suma de los números ingresados es: 18"



*/

 let num1 = Number(prompt("Escrib un numero"));
 let num2 = Number(prompt("Escriba otro numero"));

 let suma = num1+num2;
 let mul = num1*num2;

 alert ("La multiplicación es: "+mul);
 console.log("La suma es:"+suma);