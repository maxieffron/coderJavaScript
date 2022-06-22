/*
 ********************
 ****** CLASES ******
 ********************
 */

//Array de Productos
let aProductos = [];
class Productos {
    /*
    constructor(idProducto, nombre, descripcion, medida, precio) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.medida = medida;
        this.precio = precio;
    }
    */
    constructor(obj) {
        this.idProducto = obj.idProducto;
        this.nombre = obj.nombre;
        this.categoria = obj.categoria;
        this.tipoProd = obj.tipoProd;
        this.descripcion = obj.descripcion;
        this.medida = obj.medida;
        this.imagen = obj.imagen;
        this.precio = obj.precio;
    }
}

const products = [
    {
        idProducto: 1,
        nombre: "Reloj Circular - Avengers",
        categoria: "Superhéroes",
        tipoProd: "Reloj Circular",
        descripcion: "25 cm de diámetro",
        medida: "25",
        imagen: "../images/products/CI_AVENGERS_001.jpg",
        precio: 100,
    },
    {
        idProducto: 2,
        nombre: "Reloj Circular - Arrow",
        categoria: "Superhéroes",
        tipoProd: "Reloj Circular",
        descripcion: "30 cm de diámetro",
        medida: "30",
        imagen: "../images/products/CI_ARROW_001.jpg",
        precio: 200,
    },
    {
        idProducto: 3,
        nombre: "Reloj Circular - The Flash",
        categoria: "Superhéroes",
        tipoProd: "Reloj Circular",
        descripcion: "35 cm de diámetro",
        medida: "35",
        imagen: "../images/products/CI_FLASH_001.jpg",
        precio: 300,
    },
    {
        idProducto: 4,
        nombre: "Reloj Rectangular - Goku",
        categoria: "Anime",
        tipoProd: "Reloj Rectangular",
        descripcion: "20x30 cm",
        medida: "20x30",
        imagen: "../images/products/REC_GOKU_001.jpg",
        precio: 500,
    },
    {
        idProducto: 5,
        nombre: "Reloj Rectangular - Naruto",
        categoria: "Anime",
        tipoProd: "Reloj Rectangular",
        descripcion: "20x30 cm",
        medida: "20x30",
        imagen: "../images/products/REC_NARUTO_001.jpg",
        precio: 500,
    },
    {
        idProducto: 6,
        nombre: "Reloj Rectangular - Batman 001",
        categoria: "Vintage",
        tipoProd: "Reloj Rectangular",
        descripcion: "20x30 cm",
        medida: "20x30",
        imagen: "../images/products/REC_BATMAN_001.jpg",
        precio: 500,
    },
    {
        idProducto: 7,
        nombre: "Reloj Rectangular - Batman 002",
        categoria: "Vintage",
        tipoProd: "Reloj Rectangular",
        descripcion: "30x40 cm",
        medida: "30x40",
        imagen: "../images/products/REC_BATMAN_002.jpg",
        precio: 800,
    },
    {
        idProducto: 8,
        nombre: "Reloj Rectangular - Autos 001",
        categoria: "Autos",
        tipoProd: "Reloj Rectangular",
        descripcion: "30x40 cm",
        medida: "30x40",
        imagen: "../images/products/REC_AUTOS_001.jpg",
        precio: 800,
    },
    {
        idProducto: 9,
        nombre: "Reloj Rectangular - Autos 002",
        categoria: "Autos",
        tipoProd: "Reloj Rectangular",
        descripcion: "30x40 cm",
        medida: "30x40",
        imagen: "../images/products/REC_AUTOS_002.jpg",
        precio: 800,
    },
];
