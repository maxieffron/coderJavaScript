
    class Usuario{
        constructor(nombre, apellido, rol)
        {
            this.nombre=nombre;
            this.apellido=apellido;
            this.rol=rol;
        }
    }

   

   function crearUsuario()
   {
       let nombre = prompt("Ingrese nombre");
       let apellido = prompt("Ingrese apellido");
       let rol = prompt("Ingrese rol");
       const usuario = new Usuario(nombre, apellido, rol);
       return usuario;
   }
 
   //const usuario = crearUsuario();
   //mostrarUsuario(usuario);

   function mostrarUsuario(usuario)
   {
       const myDiv = document.createElement("div");
       myDiv.setAttribute("class", usuario.nombre);
       myDiv.classList.add("otra_clase");
       myDiv.innerHTML= `<div><b>${usuario.nombre}</b></div>
                         <p><i>${usuario.apellido}</i></p>
                         ${usuario.rol}`;
        myDiv.setAttribute("style", "border-radius:20px;border:1px solid blue; margin:2%; padding:2%;max-wdith:300px")
        
        document.body.appendChild(myDiv);
   }


   mostrarUsuario(new Usuario("Edwin", "Quintero", "Estudiante"));
   mostrarUsuario(new Usuario("Franco", "Scoccimarra", "Estudiante"));
   mostrarUsuario(new Usuario("Rodrigo", "Moreno", "Tutor"));
   mostrarUsuario(new Usuario("Diego", "Del Hoyo", "Estudiante"));