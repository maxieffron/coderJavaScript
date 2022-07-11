
  const mascotas = ["firulais", "Ringo", "silver", "jack","Frida", "Espumita"];

  const nodoH1 = document.getElementsByTagName("h1")[0];
  nodoH1.innerText="MASCOTAS";

  const elemento = document.createElement("ul");
  mascotas.forEach((mascota)=>{
    const nodoLi = document.createElement("li");
    nodoLi.setAttribute("style", "list-style-type:none;border:1px solid blue;padding:2%");

    nodoLi.innerText=mascota;

    elemento.appendChild(nodoLi);

  });
  document.body.appendChild(elemento);