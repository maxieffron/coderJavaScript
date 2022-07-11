
 /*Escriba un programa que permita simular una calculadora. 
 El usuario debe ingresar una de las siguientes opciones: 
 1. Suma 
 2. Resta
 3. Mul 
 4. Div 
 5. Fin
 El menú debe mostrarse, siempre que el usuario no ingrese la opción 5
 El programa debe mostrar error en los siguientes casos: 
    A. El usuario no selecciona una opción válida de 1 a 5 
    B. El usuario no ingresa datos válidos para operar
    C. El usuario ingresa un '0' como segundo operando para la división
*/
   
  function mostrarMenu()
  {
      let opcion = 0;
      
      while(opcion!==5)
      {
          opcion = Number(prompt(`Ingrese una opción: 
                                 1. SUMA
                                 2. RESTA
                                 3. MUL
                                 4. DIV
                                 5. FIN`));
        let a =0;
        let b=0;
        if(opcion===1 || opcion===2 || opcion===3 || opcion===4)
        {
          a = Number(prompt("Ingrese un numero"));
          b = Number(prompt("Ingrese otro numero"));
        } 

          switch(opcion)
          {
            
            case 1:{
                
                sumar(a, b);
                break;
              }
              case 2:{

                restar(a, b);
                break;
              }
              case 3:{
                multiplicar(a, b);
                break;
              }
              case 4:{
                let res =dividir(a, b);
                alert("DIV " +res);
                  break;
              }
              case 5:{
                alert("Gracias por usar nuestros servicios")
                break;
              }
              default: 
              {
                  alert("Ingrese una opción válida")
                  break;
              } 
          }
      }
  }

  // Créditos a Lucas Kripper
  function sumar(a,b)
  {
      alert("La suma es "+ (a+b));
  }

  function restar(a,b)
  {
    alert("La resta es "+(a-b));
  }
  function multiplicar(a,b)
  {
    alert("La  multiplciacion es "+(a*b));
  }
  function dividir(a,b)
  {
      let resultado = a/b;
      return resultado;
  }


  /*BLOQUE PRINICPAL */
  mostrarMenu();