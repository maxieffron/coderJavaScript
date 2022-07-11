 
  const carta = { 
      color: "rojo", 
      numero: 3, 
      tipo: "normal"
    }

 const carta2 = { 
        color: "verde", 
        numero: 5, 
        tipo: "normal"
      }

  console.log("Objeto Completo")
  console.log(carta);

  console.log("Propiedades Individuales")
  console.log(carta.color); //rojo
  console.log(carta["numero"]); //3


  carta.color = "azul";
  carta["numero"] = 8;



  console.log(carta); //object