 
  const boton1 = document.getElementById("miBoton1");

 //mouseover
  boton1.addEventListener("mouseover", ()=>{
    boton1.setAttribute("style", "background-color:green");
  })

  //mouseout
  boton1.addEventListener("mouseout", ()=>{
    boton1.setAttribute("style", "none");
  })
  

 //mousedown
 const boton2 = document.getElementById("miBoton2");
 boton2.addEventListener("mousedown", ()=>{
  document.body.setAttribute("style", "background-color:red");
})


 //mouseup
 boton2.addEventListener("mouseup", ()=>{
  document.body.setAttribute("style", "none");
})
