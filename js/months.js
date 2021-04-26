//Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de dias correspondientes.
function GetDaysOfaMonth(month){

let days;

if(month == "enero" || month == "marzo" || month == "mayo" || month == "julio" || month == "agosto" || month == "octubre" || month == "diciembre"){
days=31;
}
else if(month == "abril" || month == "junio" || month=="septiembre" || month == "noviembre"){
days=30;
}
else if(month == "febrero"){
days=28;
}
else{
console.log("Ingrese un mes valido.");
return;
}

console.log("El mes "+month+ " tiene " +days+ " dias.");
return days;
}

GetDaysOfaMonth("junio");
GetDaysOfaMonth("julio");
GetDaysOfaMonth("agosto");


function GreetByBirtMonth(month){
const days = GetDaysOfaMonth(month);// days es igual a lo que retorne la funcion GetDaysOfaMonth;

if(days==31){
    console.log("Felicidades por cumplir en un mes tan copado");
}else if (days==30){
console.log("felicidades por cumplir en un mes no tan copado");
}else if(days==28){
console.log("Que bajon cumplir en un mes tan corto")
}
}

GreetByBirtMonth("junio");
GreetByBirtMonth("agosto");