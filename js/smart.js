const wrapper = document.querySelector(".wrapper");
const blue = document.querySelector(".blue")


wrapper.onmouseenter = function() {
    blue.style.display = "flex";
    console.log ("el mause entro");
}

wrapper.onmouseleave = function() {
    blue.style.display = "none";
    console.log("el maouse salio");
}