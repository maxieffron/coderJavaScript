
  const producto1 = {id:1, nombre:"leche", precio:1000, promocion:"20%"}; 
  const producto2 = {id:2, nombre:"pan", precio:200}; 

  const {id,nombre,precio} = producto1;
  const {id: idProducto2,nombre: nombreProducto2} = producto2;

  console.log(id, nombre, precio);
  console.log(idProducto2, nombreProducto2);