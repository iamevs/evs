// import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";   

menu();
 

// about-text animation

const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll("span");
for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("mouseover", function () {
    this.classList.add("active-text");
  });
}


// navbar animation

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

let nav = document.querySelector("nav");
document.querySelector(".toggle").onclick = function(){
  this.classList.toggle("active");
  nav.classList.toggle("active");
}
nav.onclick = function(){
  this.classList.remove("active");
  document.querySelector(".toggle").classList.remove("active");
}
