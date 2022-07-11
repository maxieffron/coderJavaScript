
 /* 
   Ingresar usuarios en un sistema
 */

 const usuarios = [
    {id:0, nombre:"Natalia", apellido:"Chiara"},
    {id:1, nombre:"Edgar", apellido:"Aranda"},
    {id:2, nombre:"Diego", apellido:"Del Hoyo"},
    {id:3, nombre:"Nicolás", apellido:"Santa Cruz"},
    {id:4, nombre:"Marcelo", apellido:"Gallardo"},
 ];

 const usuariosSimple = [
  "Natalia",
  "Edgar",
  "Diego",
  "Nicolás",
  "Marcelo"
];

 /*Busca usuario dado su nombre */

 let datoABuscar = prompt("Ingrese un nombre");

 let esta = usuariosSimple.includes(datoABuscar);

 if(esta)
 {
    alert("USUARIO EXISTE");
 }
 else
 {
    alert("Usuario no existe");
 }

 console.log(esta);

 
 let posicion = usuariosSimple.indexOf("Diego");
 console.log(posicion);


 const numeros = [1,2,3,4,5,6,7];
 /*Saber la suma de todos los elementos del array*/
   let suma=0;
   for(let i=0; i<numeros.length;i++)
   {
      suma+=numero[i];
   }
   console.log(suma)//28


