//SetItem
 
sessionStorage.setItem("nombreDeUsuario", "lucas.kripper");
sessionStorage.setItem("color", "rojo");
sessionStorage.setItem("figura", "cuadrado");


//GetItem
alert(sessionStorage.getItem("nombreDeUsuario"));

//Recorrer Storage
for(let i=0;i<sessionStorage.length; i++)
{
     let key = sessionStorage.key(i);
     console.log(sessionStorage.getItem(key));
}

