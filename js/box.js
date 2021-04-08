const box= document.querySelector(".js-box");
const input = document.querySelector(".js-input");

box.onmouseenter=enter;
box.onmouseleave=leave;
input.onkeydown = inputKey;


function enter() {
    console.log("el mause entro");
}

function leave () {
    console.log("el mause salio");
}

function inputKey (event) {
    if (event.keyCode == 13) {
        box.innerHTML = input.value;
    }
}