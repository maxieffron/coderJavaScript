

console.log("REST PARAMETERS")
const mascotas = ["firulais", "coco", "sarna", "vainilla", "garrafa", "cerveza", "comotu"];
console.log(...mascotas);

console.log("SPREAD DE  OBJETOS")
const producto1 = {id:1, nombre:"leche", precio:1000, promocion:"20%"}; 
console.log("PRODUCTO1", producto1);

const producto2 = {...producto1, id:2};
producto2.nombre="CERVEZA"
console.log("PRODUCTO1", producto1); // leche
console.log("PRODUCTO2", producto2); // cerveza

const producto3 = {...producto2, id:3, marca:"Quilmes"};

console.log("PRODUCTO1", producto1); // leche
console.log("PRODUCTO2", producto2); // cerveza
console.log("PRODUCTO3", producto3); // cerveza