 
  const productos = [
    {
        id:1,
        nombre:"leche",
        precio:2000,
    },
    {
        id:2,
        nombre:"cerveza",
        precio:3000,

    },
    {
        id:3,
        nombre:"whisky",
        precio:200,

    }

  ]

  console.log(productos);

  //recorrer normal
  console.log("RECORRER CON FOR")
  for(let i=0;i<productos.length;i++)
  {
      console.log(productos[i]);
  }

  //FOR OF
  console.log("RECORRER CON FOR OF")
  for(let producto of productos)
  {
      console.log(producto.nombre);
  }