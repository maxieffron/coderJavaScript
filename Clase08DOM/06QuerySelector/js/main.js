
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

   function mostrarUsuario(usuario)
   {
       const miContenido = document.querySelector("#miContenido");
       miContenido.innerHTML="HOLA";

       const miTitulo = document.querySelector(".title");
       miTitulo.innerHTML="HOLA 2";

       const misTitulos = document.querySelectorAll(".title");
       console.log( misTitulos); // NodeLIst
       
   }


   mostrarUsuario(new Usuario("hola", "cacerola", "nd"));