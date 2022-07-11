
  let nombre = prompt("Ingrese su nombre"); 

 const h1 = document.getElementsByTagName("h1")[0];
 h1.innerText = `¡Bienvenido, ${nombre}!`;

 const div = document.getElementById("miContenido");
 div.innerHTML = `<b>Esto es negrita</b><br/>
                  Esto no es negrita<br/>
                  <i>Esto es itálica</i><br/>
                  <p>Esto es un párrafo</p>`;


                 