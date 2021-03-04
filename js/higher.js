//Creas una funcion que devuelva el mayor numero dentro de un array.

function higher(arr) {
    let max=0;
    
    arr.forEach( function (number) {
        if(number>max){
            max=number;
        }    
    })
    console.log(max);
}

higher([3,7,4,8,12,5]);