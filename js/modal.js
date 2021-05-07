const button = document.getElementById ("button");
const modal = document.getElementById ("modal");

//button.onclick = toggleMenu;

/*function toggleMenu() {
    if(modal.classList.contains("open")) {
        modal.classList.remove("open");
    }else{
        modal.classList.add("open");
    }
}*/

button.onclick = function toggleMenu(){
    modal.classList.toggle("open")
}
