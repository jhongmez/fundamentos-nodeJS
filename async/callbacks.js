/* 
   * Función asincrona
*/
const hola = (nombre, miCallback) => {
   
   setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      miCallback();
   }, 1000)
}

const adios = (nombre, otroCallback) => {
   setTimeout(() => {
      console.log(`Adios ${nombre}`);
      otroCallback();
   }, 1000)
}

console.log('Inicia el proceso');

hola('Jhon', () => {
   adios('Jhoncito', () => {
      console.log('Termina el proceso');
   });
});

