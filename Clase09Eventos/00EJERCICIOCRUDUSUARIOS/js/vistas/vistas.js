/*
    Inicializa la aplicación
    Agrega H1 
    Agrega Subtítulo
*/
function inicializarAplicacion() {
    crearTitulo();
    crearMenu();


}

function crearTitulo() {
    const miTitulo = document.createElement("h1");
    miTitulo.innerText = "Sistema de Gestión de Usuarios";
    document.body.appendChild(miTitulo);
}
function crearMenu() {
    const listaOpciones = ["Listar Usuarios",
        "Agregar Usuario",
        "Buscar Usuario"
    ];


    listaOpciones.forEach((opcion) => {

        const btn = document.createElement("button");
        btn.innerText = opcion;

        switch (opcion) {
            case "Listar Usuarios":
                {
                    btn.addEventListener("click",
                        () => {
                            listarUsuarios(usuarios);
                        }
                    )
                    break;
                }
            case "Agregar Usuario":
                {
                    btn.addEventListener("click",
                        () => {
                            agregarUsuario();
                        })
                    break;
                }
            case "Buscar Usuario":
                    {
                        btn.addEventListener("click",
                            () => {
                              let encontrados =  buscarUsuario();
                              listarUsuarios(encontrados);
                              console.table();
                            })
                        break;
                    }
        }



        document.body.appendChild(btn);

    })



}
/*
    Muestra el listado de usuarios del sistema
*/
function listarUsuarios(miListaDeUsuarios) {
    let miLista = document.querySelector("#listaUsuarios");
    if (!miLista) {
        miLista = document.createElement("table");
        miLista.setAttribute("id", "listaUsuarios");
    }
    miLista.innerHTML = "";

    const encabezado = document.createElement("tr");

    const tdNombre = document.createElement("th");
    tdNombre.innerHTML = "Nombre";
    encabezado.appendChild(tdNombre);

    const tdApellido = document.createElement("th");
    tdApellido.innerHTML = "Apellido";
    encabezado.appendChild(tdApellido);

    const tdCumpleanos = document.createElement("th");
    tdCumpleanos.innerHTML = "Cumpleaños:";
    encabezado.appendChild(tdCumpleanos);

    const tdAcciones = document.createElement("th");
    tdAcciones.innerHTML = "Acciones";
    encabezado.appendChild(tdAcciones);

    miLista.appendChild(encabezado)

    miListaDeUsuarios.forEach((usuario) => {
        const nodotr = document.createElement("tr");
        let nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.nombre}`;
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.apellido}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `No reporta`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `<button id=${usuario.id}>Borrar</button> | Editar`;
        
        nodotr.appendChild(nodotd);
        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista);
    programarEventos();
}

function programarEventos()
{
    usuarios.forEach((element)=>{
        const btn = document.getElementById(element.id);
        btn.addEventListener("click", ()=>eliminarUsuario());
    })
}

function agregarUsuario() {
    let id = 1;
    if (usuarios.length > 0) {
        id = usuarios[usuarios.length - 1].id + 1;
    }

    let nombre = prompt("ingrese un nombre");
    let apellido = prompt("ingrese un apellido");
    let usuario = new Usuario(id, nombre, apellido);

    usuarios.push(usuario);
    console.table(usuarios);
    listarUsuarios(usuarios);
}

function buscarUsuario() {
    let paramBusqueda = prompt("Ingresa el nombre que quieres buscar");

    let encontrados = usuarios.filter((usuario) =>
     usuario.nombre.toLowerCase().indexOf(paramBusqueda.toLocaleLowerCase()) !== -1 || 
     usuario.apellido.toLowerCase().indexOf(paramBusqueda.toLocaleLowerCase()) !== -1);
    
    return encontrados;

}


function eliminarUsuario(){

    let id= Number(prompt("Ingrese el id del usuario que quiere eliminar"));
 
    let encontrado = usuarios.find((usuario)=>usuario.id===id);
 
   if(!encontrado)
   {
       alert("Usuario no Encontrado");
   }
   else{
 
        let index = usuarios.indexOf(encontrado);
 
        usuarios.splice(index,1);
 
        console.log("Borrar usuario");
        console.log(usuarios);
 
   }
    
 
 }