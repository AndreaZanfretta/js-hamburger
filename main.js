let hamburger = document.querySelector(".header-right > a");
let close = document.querySelector(".hamburger-menu a > i");
let active = document.querySelector(".hamburger-menu");


hamburger.addEventListener("click", show);
close.addEventListener("click", hide);

function show(){
    active.classList.add("active")
};
function hide(){
    active.classList.remove("active")
};