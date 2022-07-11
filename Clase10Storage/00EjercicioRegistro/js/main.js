/*Realice las funciones para los formularios de registro y login: 

Para el registro: 
* Cree una clase usuario que le sirva como estructura para manejar la información 
* Valide que todos los campos estén diligenciados 
* valide que los campos de contraseña y confirmación coincidan
* Una vez el usuario tenga los campos completos, guardar la información del usuario en el local storage. 


Para el login (2)
* Valide que los campos sean completados
* Una vez se de click en login, valide con la información existente en local storage
* Si los datos de acceso son correctos, redirija al usuario a 'My Account' 


Bonus: 
Si una vez se carga la página hay una sesión activa, redirija al usuario a 'My Account' 



*/

class Usuario {
    constructor(username, password, nombre, apellido)
    {
        this.username=username;
        this.password=password
        this.nombre=nombre; 
        this.apellido=apellido;
    }
}

programarCrearCuenta();


function programarCrearCuenta()
{
    const btn = document.getElementById("submitCreate");
    btn.addEventListener("click", ()=>{
        crearUsuario();
    })
}

function crearUsuario()
{
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let pwd= document.getElementById("regPassword").value;
    let cpwd= document.getElementById("cpassword").value;
    let username= document.getElementById("regUsername").value
  
    if(nombre==="" || apellido==="" || pwd==="" || username==="")
    {
        alert("DATOS INCOMPLETOS");
    }
    else if(pwd!==cpwd)
    {
        alert("PASSWORD NO COINCIDE");
    }
    else {
        alert("USUARIO CREADO");
        const usuario = new Usuario(username, pwd, nombre, apellido);
        localStorage.setItem("usuario", JSON.stringify(usuario));
    }
}
