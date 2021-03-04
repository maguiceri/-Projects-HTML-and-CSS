let notas = [ 8, 3, 10, 9, 2, 5 ];
sumatoria=0;

for ( let i=0; i<notas.length; i++) {
sumatoria= (sumatoria + notas[i]);
}

let promedio = sumatoria/notas.length;

console.log( "el promedio de las notas es: " + promedio);