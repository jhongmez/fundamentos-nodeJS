/*
   ? Variables de entorno con process
   * Esto lo podemos enviar en la consola antes de correr nuestra consola
   * O simplemente sin datos y quedaran con los parametros que le definimos
*/
let saludo = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web'

console.log(`Hola ${saludo}`);
console.log(`Mi pagina es ${web}`);