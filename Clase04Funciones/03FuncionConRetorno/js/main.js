
 //funcion con retorno

  function multiplicacion(x,y)
  {
      const resultado = x*y;
      return resultado;

  }

  const num1 = Number(prompt("Ingrese un num"));
  const num2 = Number(prompt("Ingrese otro num"));

  let res = multiplicacion(num1,num2);

  console.log(`La mul es ${res}`);