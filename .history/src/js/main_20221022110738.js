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

const skillname = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'SWIFT', 'MONGOOSE', 'REACT',
  'PYTHON', 'SASS',
  'DJANGO', 'NODEJS', 'MONGODB',
  'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA'
];

var tagCloud = TagCloud('.Sphere', skillname, {

  // Sphere radius in px
  radius: 230,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true

});

// Giving color to each text in sphere
var color = '#FF5733 ';
document.querySelector('.Sphere').style.color = color; const skillname = [
            'HTML', 'CSS', 'JAVASCRIPT',
            'SWIFT', 'MONGOOSE', 'REACT',
            'PYTHON', 'SASS',
            'DJANGO', 'NODEJS', 'MONGODB',
            'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA'
        ];

        var tagCloud = TagCloud('.Sphere', skillname, {

            // Sphere radius in px
            radius: 230,

            // animation speed
            // slow, normal, fast
            maxSpeed: 'normal',
            initSpeed: 'fast',

            // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
            direction: 135,

            // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
            keep: true

        });

        // Giving color to each text in sphere
        var color = '#FF5733 ';
        document.querySelector('.Sphere').style.color = color;