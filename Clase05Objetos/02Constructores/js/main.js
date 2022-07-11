
     function Carta(id, numero, color, tipo)
     {
           this.id = id;
           this.numero = numero;
           this.color=color;
           this.tipo=tipo;
     }

     const cartaUnoRojo = new Carta(0, 1, "rojo", "normal");
     const cartaDosRojo = new Carta(1, 2, "rojo", "normal");
     const cartaReverseRojo = new Carta(2, -1 ,"rojo", "reverse");

     console.log(cartaUnoRojo);
     console.log(cartaDosRojo);
     console.log(cartaReverseRojo);


     function CartaLiteral(objeto)
     {
           this.id = objeto.id;
           this.numero = objeto.numero;
           this.color=objeto.color;
           this.tipo=objeto.tipo;
     }

     const cartaTomeCuatro = new CartaLiteral({id:10,numero:-1,color:"", tipo:"tome4"}) ;
     console.log(cartaTomeCuatro);


     