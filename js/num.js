//Dada una variable "x" la cual contiene un numero, determinar si es un numero positivo o negativo. Si es 0 mostrar otro mensaje.

let num=-8;

if(typeof num=="number"){
    if (num>0){
        console.log("el numero es positivo");
    }
    else if(num<0){
        console.log("el numero es negativo");
    }
    else{
        console.log("El numero es cero");
    }
}
else{
    console.log("debe ingresar un numero");
}

