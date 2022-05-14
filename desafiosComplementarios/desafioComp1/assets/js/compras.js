/*
- Se ingresa el nombre de un cliente y este va pidiendo productos.
- Se eligen entre 4 productos. Si uno no es válido, se avisa.
- Cada producto ya viene con un precio establecido.
- Se van acumulando la cantidad de cada producto llevado.

Al final se muestra por pantalla:
- Cantidad llevada de cada producto
- Cantidad total de productos
- Importe total gastado
- Promedio de precio por producto
*/

let bFinPedido = false;
let sQuieroMas;
let sProducto;
let nCantProductos = 0;

//Productos
const PRECIO_TOMATE = 10;
const PRECIO_LECHUGA = 5;
const PRECIO_CEBOLLA = 8;
const PRECIO_AJO = 6;

//Cantidad de Productos
let nCantTomate = 0;
let nCantLechuga = 0;
let nCantCebolla = 0;
let nCantAjo = 0;
//Precio Total por Producto
let dTotal_Tomate = 0;
let dTotal_Lechuga = 0;
let dTotal_Cebolla = 0;
let dTotal_Ajo = 0;

//Totales
let nTotalProductos = 0;
let dPrecioTotal = 0;

let sNomCliente = prompt("Ingrese su nombre");

while (!bFinPedido) {
    sProducto = prompt(
        "Ingrese el producto que desea llevar (TOMATE, LECHUGA, CEBOLLA o AJO "
    );

    switch (sProducto) {
        case "TOMATE":
            nCantProductos = Number(prompt("Ingrese la cantidad"));
            nCantTomate = nCantTomate + nCantProductos;
            break;

        case "LECHUGA":
            nCantProductos = Number(prompt("Ingrese la cantidad"));
            nCantLechuga = nCantLechuga + nCantProductos;
            break;

        case "CEBOLLA":
            nCantProductos = Number(prompt("Ingrese la cantidad"));
            nCantCebolla = nCantCebolla + nCantProductos;
            break;

        case "AJO":
            nCantProductos = Number(prompt("Ingrese la cantidad"));
            nCantAjo = nCantAjo + nCantProductos;
            break;

        default:
            alert("El producto ingresado no es válido");
            break;
    }

    sQuieroMas = prompt("¿Algo más? SI/NO");
    if (sQuieroMas == "SI") {
        bFinPedido = false;
    } else {
        bFinPedido = true;
    }
}

//Subtotales
dTotal_Tomate = nCantTomate * PRECIO_TOMATE;
dTotal_Lechuga = nCantLechuga * PRECIO_LECHUGA;
dTotal_Cebolla = nCantCebolla * PRECIO_CEBOLLA;
dTotal_Ajo = nCantAjo * PRECIO_AJO;

//Totales
nTotalProductos = nCantTomate + nCantLechuga + nCantCebolla + nCantAjo;
dPrecioTotal = dTotal_Tomate + dTotal_Lechuga + dTotal_Cebolla + dTotal_Ajo;

alert(` ${sNomCliente} compró: \n 
Tomates: ${nCantTomate} a $${PRECIO_TOMATE} cada uno \n
Lechuga: ${nCantLechuga} a $${PRECIO_LECHUGA} cada una \n
Cebolla: ${nCantCebolla} a $${PRECIO_CEBOLLA} cada una \n
Cabezas de Ajo: ${nCantAjo} a $${PRECIO_AJO} cada una \n

Total de productos: ${nTotalProductos} \n
Total gastado: $${dPrecioTotal} \n
Precio promedio: $${(dPrecioTotal / nTotalProductos).toFixed(
    2
)} por producto.`);
