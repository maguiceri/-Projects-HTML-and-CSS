//Crear una funcion que diga todos los elementos que aparecen mas de una vez en un array.



function duplicates (arr) {
    const found = [];
    const duplicates = [];

    arr.map ( (num) => {
        if (found.indexOf(num) > -1) { //indexOf devuelve -1 cuando no encuentra el valor **indexOf busca la posicion del parametro que se pase
            duplicates.push(num) 
        } else {found.push(num)} //se va subiendo todo a found
    })
    return duplicates;    
}

console.log(duplicates([3,3,4,1,2,2,2,5]));