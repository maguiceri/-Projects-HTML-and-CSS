const title = document.getElementsByTagName("h1")[0];

console.log(title.innerHTML);

title.innerHTML = "buscador horrible";

const boludeces=["la torta de marcos",
"la palabra picapuerta",
"carpinchos",
"empanadas portenias",
"papas sucias",
"fruta del dragon",
"el libro gordo de petete",
"aeropuerto yorsh niuberi",
"sanguche de milanesa con pan frances",
"lechuga",
"lechuga criolla",
"lechuga repollada",
"mundo",
"el murcielago que se mando el chino del covid",
"sopa de murcielago",
"covid",
"el terraplanismo",
"el movimiento antivacunas"

];



document.getElementById("chat");

const chatInput = document.getElementById("chat");

function handleInput () {
    console.log(chatInput.value);


let results = boludeces.filter((item) => {
    if (item.includes(chatInput.value)){
        return true;
    } else{
        return false;}
    })

    console.log(results);
}
