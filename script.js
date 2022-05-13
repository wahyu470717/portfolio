let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar")
let  body = document.querySelector('body');




menuBtn.onclick = function(){
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  navBar.classList.add("active");
  body.style.overflow("hidden");
}
cancelBtn.onclick = function(){
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  navBar.classList.remove("active");
  body.style.overflow("auto");
}

let nav = document.querySelector("nav");
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");
  }
}

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", ()=>{
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow("auto");
  });
}