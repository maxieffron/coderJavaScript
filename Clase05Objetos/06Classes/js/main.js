  
  class Carta{

        constructor(id, valor, color, tipo)
        {
            this.id=id;
            this.valor=valor;
            this.color=color;
            this.tipo=tipo;
        }


        getColor()
        {
            return this.color;
        }


  }

  const rojoUno = new Carta(1,1,"rojo","normal");
  rojoUno.getColor();