//Dada una variable "X" la cual contiene un numero, imprimir en consola todos los numeros que esten entre el valor de la variable y 0.

let x= "t";

if (typeof x=="number") {
for(index=x; index>=0; index--){
    console.log(index);
}
}
else {
    console.log("Debes ingresar un numero");
}

