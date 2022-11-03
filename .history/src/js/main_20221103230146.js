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
document.querySelector(".toggle").onclick = function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
}
nav.onclick = function () {
  this.classList.remove("active");
  document.querySelector(".toggle").classList.remove("active");
}

let filename = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'Bootstrap', 'Tailwind', 'REACT',
  'PYTHON', 'SASS',
  'C/C++', 'NODEJS', 'MONGODB',
  'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA', 'Svelte', 'Astro', 'Next js', 'Three js', 'D3 js', 'PHP', 'NPM'
];

var tagCloud = TagCloud('.Sphere', filename, {

  radius: 250,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true

});

var color = '#3a86ff';
document.querySelector('.Sphere').style.color = color;


document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById(
    "contextMenu").style.display = "none"
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById(
    "contextMenu").style.display == "block")
    hideMenu();
  else {
    var menu = document
      .getElementById("contextMenu")

    menu.style.display = 'block';
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
    console.log(e.pageX, e.pageY);
  }
}


//skill section

var a = ['.a','.b','.c','.d']


const down = document.querySelector(a);
const content = document.querySelector(".skill-dropdown-content");
down.addEventListener("click",() => {
  content.style.display = "block";
  down.classList.add("enable");
});
down.addEventListener("click",() => {
  content.style.display = "none";
  down.classList.remove("enable");
});



// const close = document.querySelector(".enable");
// close.addEventListener("click",() => {
//   down.style.transform = "rotate(90deg)";
//   content.style.display = "none";
//   down.classList.remove("enable");
// });

