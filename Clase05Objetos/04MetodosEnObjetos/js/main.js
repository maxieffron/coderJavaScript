
//Constructor con funciones
function Producto(id, nombre, precio)
{
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;

    this.obtenerIva =  function ()  {
        const iva = this.precio*0.2;
        return iva;
    }

    this.obtenerPrecioFinal =  () => this.precio+this.obtenerIva();
    
}

 const producto = new Producto(0,"carne", 200);
 console.log("IVA:", producto.obtenerIva());
 console.log("PRECIOFINAL:", producto.obtenerPrecioFinal());

 // OPERADOR IN

 console.log("Precio", "precio" in producto); 

 // recorrer propiedades

 for(let prop in producto)
 {
     console.log(prop);
 }