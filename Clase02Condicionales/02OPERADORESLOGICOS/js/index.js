
// operadores 

const condicion0 = 1 == "1";
console.log(condicion0); // true

const condicion1 = 1 === "1";
console.log(condicion1); // false

const condicion2 = 1!=1;
console.log(condicion2); // false

const condicion3 = 1 !== "1";
console.log(condicion3); // true

const condicion4 = 2<10;
console.log(condicion4); // true

const condicion5 = 2>10;
console.log(condicion5); // false

const condicion6 = 2>=10;
console.log(condicion6); // false

const condicion7 = 2<=10;
console.log(condicion7); // true

const condicion8 = !condicion7;
console.log(condicion8);

const condicion9 = condicion7 && condicion4 ;
console.log(condicion9); // true 

const condicion10 = condicion7 || condicion4 ;
console.log(condicion10); // true 

const condicion11 = condicion7 && condicion4 || condicion7 || condicion4
console.log(condicion10); // true 

/*
if(condicion)
{
   //SE EJECUTA TODO SI CONDICION ES TRUE;
}*/