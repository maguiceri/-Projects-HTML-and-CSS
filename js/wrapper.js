const box = document.querySelector(".box2");
const boxChild = document.querySelector(".boxchild");

function enter (e) {
    boxChild.style.display = "block";
}

function leave (e) {
    
    boxChild.style.display = "none";
}