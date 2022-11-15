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
  'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA', 'Svelte', 'Astro', 'Next js', 'Three js', 'D3 js', 'PHP', 'NPM', '🖤'
];

var tagCloud = TagCloud('.Sphere', filename, {

  radius: (window.innerWidth > 768) ? 250 : 190,
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
function down(x, y) {
  x.addEventListener("click", function () {
    y.style.display = "block";
    x.classList.add("enable");
  });
  document.addEventListener("click", (e) => {
    if (e.target !== x && e.target !== y) {
      y.style.display = "none";
      x.classList.remove("enable");
    }
  });
}
function innerdown(x, y) {
  x.addEventListener("mouseover", function () {
    y.style.display = "block";
    x.classList.add("enable");
  });
  document.addEventListener("click", (e) => {
    if (e.target !== x && e.target !== y) {
      y.style.display = "none";
      x.classList.remove("enable");
    }
  });
}
const adown = document.querySelector('.a');
const content = document.querySelector(".a1");
down(adown, content);
const jsdown = document.querySelector('.js');
const jscontent = document.querySelector(".js-lib");
innerdown(jsdown, jscontent);
const bdown = document.querySelector('.b');
const bcontent = document.querySelector(".b1");
down(bdown, bcontent);
const cdown = document.querySelector('.c');
const ccontent = document.querySelector(".c1");
down(cdown, ccontent);
const ddown = document.querySelector('.d');
const dcontent = document.querySelector(".d1");
down(ddown, dcontent);
const dvdown = document.querySelector('.d-v');
const dvcontent = document.querySelector(".d-v-content");
innerdown(dvdown, dvcontent);

// github calendar





if(window.innerWidth < 768 ){
  var svg = document.querySelector(".js-calendar-graph-svg");
  svg.setAttribute("height", "200");
  svg.setAttribute("viewBox", "555 0 288 168");
}

//projects

