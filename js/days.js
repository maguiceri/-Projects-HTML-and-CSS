//Dada una variable "y" que puede contener un numero del 1 al 7, determinar que dia de la semana corresponde. Incluir la opcion si la variable toma un valor no valido.

function days (day) {
    if(day==1){
        console.log("lunes");
    }

    else if (day==2){
        console.log("martes");
    }

    else if (day==3){
        console.log("miercoles");
    }

    else if(day==4){
        console.log("jueves");
    }

    else if(day==5){
        console.log("viernes");
    }

    else if(day==6){
        console.log("sabado");
    }

    else if(day==7){
        console.log("domingo");
    }

    else{
        console.log("valor invalido")
    }

}

days (4);
