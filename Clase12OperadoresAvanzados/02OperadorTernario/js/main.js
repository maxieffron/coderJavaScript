
 let edad = Number(prompt("Ingrese se edad"));
 let mensaje=""
 if(edad>18)
 {
    mensaje = "Puede comprar cerveza";
 }
 else
 {
    mensaje = "No puede comprar cerveza";
 }
 alert(mensaje);

  let mensaje2 = edad>18 ? 
                 "[T] Puede comprar cerveza" : 
                 "[T] No puede comprar cerveza";
  alert(mensaje2);


