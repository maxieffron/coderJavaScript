
 //Scope

 let a = 0;

 function miFuncion()
 {
     let c = 1;
     console.log("c", c); //1
     console.log("a", a); //1

     function miFuncion3()
     {

     }
 }

 miFuncion();
 console.log("a", a); //0

 //Scope

 var b = 0;
 function miFuncion2()
 {
     var b = 1;
     console.log("b", b); //1
 }

 miFuncion2();
 console.log("b", b); //0