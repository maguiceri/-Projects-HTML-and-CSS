let x="n";

if (typeof x=="string") {
    if (x=="a" || x=="e" || x=="i" || x=="o" || x=="u") {
        console.log("la letra " +x+ " es una vocal");
    }
    else{
        console.log("la letra " +x+ " no es una vocal");
    }

}
else{
    console.log("debe ingresar una letra");
}

