    /*
        Escriba un programa que pida al usuario:
        Una operacion: SUMA / MUL 
        2 números
        e imprima en consola, el resultado de la operación.
        
        Complete el ejercicio, con DIVISION y RESTA. 

        SI TRATA DE DIVIDIR POR 0; MUESTRE UN ERROR

    */ 


    const operacion = prompt(`INGRESE UNA OPERACION: 
        SUMA 
        MUL
        DIV
        RESTA`);

    const numero1 = Number(prompt("Ingrese un número"));
    const numero2 = Number(prompt("Ingrese otro número"));

    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("NUMEROS NO VALIDOS")
    }
    else
    {
        switch(operacion)
        {
            case "SUMA": // if(operacion == "SUMA")
            {
                console.log("LA SUMA ES: "+ (numero1+numero2));
                break;
            }
            case "MUL":
            {
                    console.log("LA MUL ES: "+ (numero1*numero2));
                    break;
            }
            case "RESTA":
            {
                console.log("LA RESTA ES: "+ (numero1-numero2));
                break;
            }
            case "DIV":
            {

                if(numero2===0)
                {
                     alert("NO PUEDO DIVIDIR POR 0");
                }
                else
                {
                    console.log("LA DIV ES: "+ (numero1/numero2));
                } 
                break;
            }
            default: // else final
            {
                console.log("OPERACION INVÁLIDA");
                break;
            }
        }
        /*
        if(operacion==="SUMA")
        {
           console.log("LA SUMA ES: "+ (numero1+numero2));
         }
         else if(operacion==="MUL")
         {
            console.log("LA MUL ES: "+ (numero1*numero2));
         }
        else if(operacion==="RESTA")
        {
            console.log("LA RESTA ES: "+ (numero1-numero2));
        }
        else if(operacion==="DIV")
        {
            if(numero2===0)
            {
                 alert("NO PUEDO DIVIDIR POR 0");
            }
        else
        {
            console.log("LA DIV ES: "+ (numero1/numero2));
        } 
    }
        else 
        {
            console.log("OPERACION INVÁLIDA");
        }*/
    }
