//Dada una variable "y" que puede contener un numero del 1 al 7, determinar que dia de la semana corresponde. Incluir la opcion si la variable toma un valor no valido.
const y=7;

if(y==1){
    console.log("lunes");
}

else if (y==2){
    console.log("martes");
}

else if (y==3){
    console.log("miercoles");
}

else if(y==4){
    console.log("jueves");
}

else if(y==5){
    console.log("viernes");
}

else if(y==6){
    console.log("sabado");
}

else if(y==7){
    console.log("domingo");
}

else{
    console.log("valor invalido")
}