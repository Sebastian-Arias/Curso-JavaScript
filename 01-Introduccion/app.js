//Comentario de una sola linea //
//alert('Hola');  

/*Comentario multiples lineas */
/*
const saludo = prompt("Cual es tu nombre?");
document.querySelector(".contenido").innerHTML = `${saludo} Esta aprendiendo javascrpit`;    
*/

// Se pueden crear variables e imprimirlas
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún error
console.error("Algo salió mal");

// Limpiar la consola
//console.clear();

// O enviar advertencias
console.warn("Eso no esta permitido");


// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); 
//console.warn("Eso no esta permitido"); 
//console.warn("Eso no esta permitido");
//console.warn("Eso no esta permitido");
console.timeEnd('Hola');
   