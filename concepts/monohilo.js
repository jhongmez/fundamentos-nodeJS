console.log('Hola Mundo');

let i = 0;

// Funcion asincrona
setInterval(function() {
   // ..
   console.log(i);
   i++;

   /* 
      ! Aqui se va generar un error
      * Ya que en este punto no se tiene definida la variable Z y va detener la ejecución
      * Este es lo delicado de trabajar con Monohilos y para esto se debe tener cuidado y validar errores
   */
   if(i === 5) {
      var a = 3 + z;
   }
}, 1000)