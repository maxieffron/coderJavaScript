//body
const nodoPrincipal = document.body;
console.log(nodoPrincipal);

//getElementById
const nodoDiv = document.getElementById("miContenido");
console.log("DIV", nodoDiv);

//getElementsByClassName
const nodosSpan = document.getElementsByClassName("mySpan");
console.log("SPANS", nodosSpan);

//getElementsByTagName
const nodosH1 = document.getElementsByTagName("h1");
console.log("H1s", nodosH1);

console.log("TODOS LOS SPANS");
for (let span of nodosSpan)
{
    console.log(span);
}