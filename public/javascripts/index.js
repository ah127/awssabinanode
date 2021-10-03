let showMenu = false;
let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
    showMenu = !showMenu;
    let ham_top = document.getElementById('ham_top');
    let ham_middle = document.getElementById('ham_middle');
    let ham_bottom = document.getElementById('ham_bottom');
    let navbar = document.getElementsByClassName('navbar');
    if(showMenu){
        navbar[0].style = "display:flex";
        ham_top.style = "transform:rotateZ(45deg)";
        ham_bottom.style = "transform:rotateZ(-45deg)";
        ham_middle.style = "width:0px";
    } else {
        navbar[0].style = "display:none";
        ham_top.style = "transform:rotateZ(0deg)";
        ham_bottom.style = "transform:rotateZ(0deg)";
        ham_middle.style = "width:100%";
    }
})