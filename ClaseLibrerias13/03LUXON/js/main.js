
const luxonDateTime = luxon.DateTime;
init();

function init()
{
  crearDateTimeLocal();
  crearDateTimeConArgumentos();
  crearDateAPartirDeUnObjeto();

}

function crearDateTimeLocal()
{
  const hoy = luxonDateTime.local(); 
  console.log("HOY", hoy);

  
}

function crearDateTimeConArgumentos()
{
  const otroDia = luxonDateTime.local(1992, 12, 14, 23, 0);
  console.log("CUMPLEAÑOS JUAN", otroDia);
}

function crearDateAPartirDeUnObjeto()
{
  const dt = luxonDateTime.fromObject(
    {day: 4, month:3, year:1998},
    {zone: 'America/Bogot'},
  );

  console.log("CUMPLEAÑOS NATALIA", dt);

}