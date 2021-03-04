const clean = () => {
    document.querySelectorAll(".inputText").forEach ( function (input) { input.value = null; })
} 


function onBoxClick () {
    console.log("la caja fue clickeada");
}


function onBoxEnter () {
    console.log("El mouse entro a la caja");
    document.querySelector(".box").classList.add("over");
}


function onBoxOut () {
    console.log("El mouse entro a la caja");
    document.querySelector(".box").classList.remove("over");
}

function onBoxMove() {

    console.log("EL MOUSE SE MOVIO");

}