
/*
    Máquina de Café y Mate
    Escriba un programa que simule una máquina dispensadora de café y mate
    El mate cuesta 3 pesos
    EL café cuesta 2 pesos
    La máquina debe mostrar un menú, con los productos disponibles y los precios
    Igualmente, debe mostrar una opción de 'Salir' 
    El menú debe repetirse siempre que el usuario no seleccione la opción de salir

    Una vez el usuario ha seleccionado el producto que quiere, 
    el sistema debe pedir que ingrese un monto de dinero

    Si el usuario ingresa un monto mayor, el sistema debe mostrar el cambio entregado 
    Si el usuario ingresa un monto menot, el sistema debe mostrar de nuevo la opción para ingresar dinero


    La máquina solo acepta dinero en denominaciones de: 
    1,2, 5 y 10 pesos. 
    
    El sistema debe mostrar errores cuando: 

    * El usuario ingresa una opción no válida en el menú
    * El uusuario ingresa un monto no numérico 
    * El usuario ingresa un monto no aceptado por la máquina
    

*/

  mostrarMenu();

  function mostrarMenu()
  {
     let opcion = 0;
     while(opcion!==3)
    {
        opcion = Number(prompt(`Ingrese una opcion:
                                1. Mate (1 peso)
                                2. Café (2 pesos)
                                3. Fin`));
       
        switch(opcion)
        {
            case 1: 
            {
                venderMate();
                break;
            }
            case 2:
            {
                venderCafe();
                break;
            }
            case 3: 
            {
                alert("Gracias");
                break;
            }
            default:
                {
                    alert("Opcion Invalida");
                    break;
                }

        }
    }

  }


  function venderMate(){

     cobrar(1);
     alert("Gracias por su compra de MATE")

  }

  function venderCafe(){

    cobrar(2);
    alert("Gracias por su compra de CAFE")

 }

 function cobrar(valorDelProducto)
 {
    let dineroIngresado = 0;

    while(dineroIngresado<valorDelProducto){
        
        dineroIngresado+=Number(prompt(`El valor de su compra es ${valorDelProducto}
        Ingrese dinero:`));


    }

    alert(`Su cambio es: ${dineroIngresado-valorDelProducto}`)
 }