
 const usuario = {
     id:1,
     nombre:"Juanito", 
     apellido: "Gomez",
 }

 localStorage.setItem("usuario", JSON.stringify(usuario));

 console.log(JSON.parse(localStorage.getItem("usuario")));