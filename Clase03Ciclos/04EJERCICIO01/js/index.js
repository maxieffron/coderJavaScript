/*
 Escriba un programa que muestre 
 la configuración inicial de un tablero de ajedrez: 
 TCARRACT
 PPPPPPPP
 00000000
 00000000
 00000000
 00000000
 PPPPPPPP
 TCARRACT
*/

    for(let linea=1;linea<=8;linea++)
    {
        if(linea===1 || linea===8)
        {
            console.log("TCARRACT");
        }
        else if(linea ===2 || linea===7)
        {
            console.log("PPPPPPPP");
        }
        else
        {
             console.log("00000000");
        }
    }