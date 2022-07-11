/* 
    SISTEMA CRUD USUARIOS
    Create 
    Read
    Update
    Delete 

 */
 class Usuario{
     constructor(id,nombre,apellido)
     {
         this.id=id;
         this.nombre=nombre;
         this.apellido=apellido;
     }
 }

 const usuario1 = new Usuario(1, "Natalia", "Chiara");
 const usuario2 = new Usuario(2, "Diego", "Del Hoyo");
 const usuario3 = new Usuario(3, "Alejandro", "Lombardi");
 const usuario4 = new Usuario(4, "Diego", "Castro");
 const usuario5 = new Usuario(5, "Gabriel", "Odirozola");
 const usuario6 = new Usuario(6, "Juan", "Ferrari");


 const usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6];
 console.log("INICIAL:", usuarios);

 mostrarMenu();


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
                            6. Filtrar Listado
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
            break;
        }
        case 3: 
        {
            modificarUsuario();
            break;
        }
        case 4:
        {
            listarUsuarios();
            break;
        }
        case 5:
        {
               const encontrado= buscarUsuario();

               if(encontrado)
               {
                   alert(`El usuario es: 
                          ID: ${encontrado.id}
                          NOMBRE: ${encontrado.nombre}
                          APELLIDO: ${encontrado.apellido}`)
               }
               else
               {
                   alert("NO LO ENCONTRÉ");
               }


                break;
        }
        case 6:
        {
                const filtrados = filtrarListado();
                console.log("FILTRADOS");
                console.table(filtrados);
                break;
        }
        case 10:
        {
                alert("GRACIAS");
                break;
        }
        default:{
            alert("opcion inválida");
            break;
        }
       
    }

    }
 }

 function agregarUsuario()
 {      
     let nombre= prompt("Ingrese el nombre del usuario");
     let apellido = prompt("Ingrese el apellido del usuario");
     let usuario = new Usuario(getId(),nombre,apellido);
     usuarios.push(usuario);

     console.log("USUARIO AGREGADO:")
     console.table(usuarios);
 }

 function getId()
 {
     if(usuarios.length===0)
     {
         return 1;
     }
     else
     {
        const ultimo = usuarios[usuarios.length-1];
        return ultimo.id+1;
     }
 }

 

 function listarUsuarios()
 {
       console.log("LISTAR USUARIOS:");
       usuarios.forEach((usuario)=>{
            console.log(usuario.nombre+" "+usuario.apellido);
       });
 }

 function eliminarUsuario(){

    const id = Number(prompt("Ingrese el id del que quiere borrar"));

    const esta = usuarios.some((usuario)=>usuario.id===id);

    if(esta)
    {   
        const soloIds = usuarios.map((usuario)=>usuario.id)
        let indice = soloIds.indexOf(id);

        usuarios.splice(indice,1);
        alert("Usuario borrado");

        console.log("BORRADO");
        console.table(usuarios);
    }
    else
    {
        alert("Usuario no encontrado");
    }
    

 }
 
 function buscarUsuario()
 {
    let idABuscar = Number(prompt("Ingrese el id del usuario:"));
    
    return usuarios.find((usuario)=>idABuscar===usuario.id);
                          /*
                            Función de comparación
                            el retorno de la función es un booleano
                            y se puede formar de manera simple o 
                            compuesta (usando && ó ||)
                          */
 }


 function modificarUsuario()
 {
    

 }


 function filtrarListado()
 {
    let abuscar = prompt("Ingrese un texto para buscar");

    return usuarios.filter((usuario)=>
    
       usuario.nombre.indexOf(abuscar)!==-1 ||
       usuario.apellido.indexOf(abuscar)!==-1

    )

    

 }