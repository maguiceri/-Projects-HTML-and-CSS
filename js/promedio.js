

function finalNote (notas) {
    sumatoria=0;
    for ( let i=0; i<notas.length; i++) {
        sumatoria= (sumatoria + notas[i]);
        }
    let promedio = sumatoria/notas.length;
    console.log( "el promedio de las notas es: " + promedio);
}

finalNote([1,4,2,5])

