

init();

function init()
{
   agregarAccionConToastify();
   agregarAccionConToastifyStyled();
   agregarAccionConToastifyAction();
   agregarAccionConToastifyDestiny();

}

function agregarAccionConToastify()
{
   const btn = document.getElementById("btnTOAST");
   btn.addEventListener("click", ()=>{

      Toastify({
         text: 'Esto es un toast', 
         duration: 3000,
      }).showToast();

   })
}

function agregarAccionConToastifyStyled()
{
   const btn = document.getElementById("btnTOAST2");
   btn.addEventListener("click", ()=>{

      Toastify({
         text: 'Esto es un toast', 
         gravity: 'bottom',
         position: 'left',
         style: {
            background: 'purple'
         },
         duration: 3000,
      }).showToast();

   })
}

function agregarAccionConToastifyAction(){

   const btn = document.getElementById("btnTOAST3");
   btn.addEventListener("click", ()=>{

      Toastify({
         text: 'Esto es un toast', 
         gravity: 'bottom',
         position: 'left',
         style: {
            background: 'purple'
         },
         duration: 3000,
         onClick: ()=>{
            alert("ESTA ES ACCION DE TOAST");
         },
      }).showToast();

   })


}

function agregarAccionConToastifyDestiny()
{
   const btn = document.getElementById("btnTOAST4");
   btn.addEventListener("click", ()=>{

      Toastify({
         text: 'Esto es un toast', 
         gravity: 'top',
         position: 'left',
         duration: 3000,
         destination: 'http://www.google.com'
      }).showToast();

   })
}
