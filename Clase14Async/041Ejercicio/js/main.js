/*
 Simule la petición de datos en una promesa, del array de usuarios definido.
 1. Pida al usuario que ingrese un valor (1 o 0)
    Si el usuario ingresa 1, la simulación debe aceptar la petición y retornar el array
    Si el uusario ingresa 0, la simulación debe rechazar la petición 
    Al final, debe mostrar un mensaje: 'Gracias por usar nuestro servicio' 
*/

const usuarios = [
    {id:1, nombre:'Juan', apellido:'Perez'},
    {id:2, nombre:'Pedro', apellido:'Gomez'},
    {id:3, nombre:'Luisa', apellido:'Gonzales'},
    {id:4, nombre:'Laura', apellido:'Muriel'},
    {id:5, nombre:'María', apellido:'Ortíz'},
]


const pedirUsuarios = (res) => new Promise((resolve, reject)=>{

    if(res===true)
    {
       resolve(usuarios)
    }
    else
    {
        reject("ERROR INDUCIDO POR MI: FALLÓ")
    }

})

const value = prompt("Ingrese resultado:")
const resDeUsuario = value ==1 ? true : false;

 pedirUsuarios(resDeUsuario).
 then((res)=>console.log(res)).
 catch((error)=> console.log(error)).
 finally(()=>console.log("GRACIAS POR USUAR NUESTRO SERVICIO")) 


 fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055').
 then((res)=>res.json())
 .then((json)=>console.log(json.results))