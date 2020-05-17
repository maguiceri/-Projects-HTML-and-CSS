let x=4,y="n";

if (typeof(x,y)=="number"){
    if(x>y){
        console.log("en numero " +x+ " es mayor" );
    }
    else if (y>x){
        console.log("el numero " +y+ " es meyor");
    }
    else{
        console.log("ingreso el mismo numero");
    }
}

else{
    console.log("debe ingresar numeros");
}
