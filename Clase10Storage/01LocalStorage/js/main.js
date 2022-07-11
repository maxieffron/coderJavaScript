//SetItem
localStorage.setItem("almacenamiento", "GALLETITAS");

localStorage.setItem("autos", "chevrolet");

  //let edad = Number(prompt("Ingrese su edad:"))
  //localStorage.setItem("edadUsuario", edad);


  let edadUsuario = localStorage.getItem("edadUsuario");

  const nodo = document.createElement("div");
  nodo.innerHTML=`<h1>${edadUsuario}</h1>`;
  
  document.body.appendChild(nodo);




