
 
  const usuarios = [
      {id:1,nombre:"Santi", apellido:"Avila"},
      {id:2,nombre:"Franco", apellido:"Pipieri"},
      {id:3,nombre:"Gonzalo", apellido:"Ulloa"},
      {id:4,nombre:"Bruno", apellido:"Cocco"},
      {id:5,nombre:"Agustín", apellido:"Sánchez", rol:{id:1,label:"estudiante"}},
  ];

  let idIngresado = Number(prompt("Ingrese el id que quiere buscar"));

  const buscado = usuarios.find(element=>element.id===idIngresado);

  

  console.log(buscado?.nombre);
  console.log("DESPUES DE BUSCAR");

  console.log(buscado?.rol?.label);
  console.log("DESPUES DE BUSCAR ROL");