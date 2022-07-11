// Haga un sistema CRUD para administrar usuarios. 
// Un usuario debe tener un id, nombre y apellido. 
// El sistema debe permitir: 
// Agregar un usuario
// Eliminar un usuario dado su id
// Buscar un usuario, dado su nombre 
// Editar el nombre y apellido de un usuario, dado su id

 // Mostar un menu
 // Ingresar Datos 
 // Pedir id del que quiere eliminar
 // Pedir el nombre del que quiere buscar
 // Pedir el ide dl que quiere modificat
 // Crear clase usuario 
 


 const usuario1 = new Usuario(1, "Natalia", "Chiara");
 const usuario2 = new Usuario(2, "Diego", "Del Hoyo");
 const usuario3 = new Usuario(3, "Alejandro", "Lombardi");
 const usuario4 = new Usuario(4, "Diego", "Castro");
 const usuario5 = new Usuario(5, "Gabriel", "Odirozola");
 const usuario6 = new Usuario(6, "Juan", "Ferrari");

const usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6];
console.log("INICIAL:", usuarios);

inicializarAplicacion();
//mostrarMenu();


function mostrarMenu()
{
   let opcion = 0;
   
   while(opcion!==10)
   {
       opcion = Number( prompt(`Seleccione una acción:
                           1. Agregar Usuario 
                           2. Eliminar Usuario
                           3. Modificar Usuario
                           4. Listar usuarios
                           5. Buscar Usuario
                           6. Listar NOMBRE + APELLIDO
                           10. Salir`));

   switch(opcion)
   {
       case 1:
       {
           agregarUsuario();
           break;
       }
       case 2: 
       {
           eliminarUsuario();
       }
       case 3: 
       {
           modificarUsuario();
       }
       case 4:
       {
           listarUsuarios();
           break;
       }
       case 5:
       {
               buscarUsuario();
               break;
       }
       case 6:
       {
               listarNombreMasApellido();
               break;
       }
       default:{
           alert("opcion inválida");
           break;
       }
      
   }

   }
}









function modificarUsuario()
{
   let id= Number(prompt("Ingrese el id del usuario que quiere modificar"));

   let existe = usuarios.some((usuario)=>usuario.id===id);

   if(existe)
   {
       let encontrado = usuarios.find((usuario)=>usuario.id===id);
       let nuevoNombre = prompt("Ingrese el nuevo nombre");
       let nuevoApellido = prompt("Ingrese el nuevo apellido");

       encontrado.nombre = nuevoNombre;
       encontrado.apellido= nuevoApellido;

       console.log("MODIFICACION")
       console.log(usuarios);
   }
   else
   {
       alert("Usuario no econtrado")
   }

}


function listarNombreMasApellido()
{
   let nombresYApellidos = usuarios.map(
       (usuario)=>usuario.apellido+ " " + usuario.nombre);

   console.log("MAP:");
   console.log(nombresYApellidos);

}



