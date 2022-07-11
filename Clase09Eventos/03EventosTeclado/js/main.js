
const input2 = document.getElementById("input2");
 
 //onchange
 input2.addEventListener("change", (event)=>{

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const valorTxt = input2.value;
    const found = valorTxt.match(regex);

    if(found)
    {
        alert("EMAIL VALIDO")
    }
    else
    {
        alert("EMAIL INVALIDO");
    }


 })


 //keypress


 //keydown 
 const input1 = document.getElementById("input1");
 input1.addEventListener("keydown", ()=>{
    document.body.setAttribute("style", "background-color:red");
   
 })


 //keyup
 input1.addEventListener("keyup", (event)=>{

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const valorTxt = input1.value;
    const found = valorTxt.match(regex);

    if(found)
    {
        alert("CADENA VALIDA")
    }
    else
    {
        alert("CADENA INVALIDA");
    }


 })


