
function adult (age){

    if ( typeof(age) == "number") {
        if (age >= 18 ) {
            console.log ("usted es mayor de edad")
        } else {
            console.log( "usted es menor de edad")
        }
    }
    else{
        console.log("debe ingresar un numero");
    }
}

adult (22);