import { menu } from "./menu.js";
// import { GitHubCalendar } from "./github.js";

menu();

// about-text animation

const text = document.querySelector(".text");
// replace span to .text except the id static
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const eavbsi = document.querySelector("#static");
// console.log(eavbsi);


const element = document.querySelectorAll("span");

for (let i = 0; i < element.length; i++) {
  if (element[i].children.length == 0) {
    element[i].addEventListener("mouseover", function () {
      this.classList.add("active-text");
    });
  }
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

  radius: (window.innerWidth > 768) ? 250 : 190,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true

});

var color = '#3a86ff';
document.querySelector('.Sphere').style.color = color;

// custom context menu


document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById(
    "contextMenu").style.display = "none"
}

hideMenu();

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
    // console.log(e.pageX, e.pageY);
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

// const container = document.getElementById("calender");

// GitHubCalendar(container, "iamevs");

// new GitHubCalendar(container, "iamevs", { responsive: true });

// var iframe = document.getElementById('calender');
// var style = document.createElement('style');
// style.textContent =
//   '* {' +
//   '  background-color: #212529 !important;' +
//   '}' 
// ;
// console.log(style);
// iframe.contentDocument.head.appendChild(style);


// var obj = {
//   fname: "",
//   lname: "",
//   email: "",
//   contact: "",
//   textarea: "",
// };
// var fname = document.getElementById("fname");
// var lname = document.getElementById("lname");
// var email = document.getElementById("email");
// var contact = document.getElementById("contact");
// var textarea = document.getElementById("textarea");
// var submit = document.getElementById("submit");

// function appendData(obj) {
//   var fs = require("fs");
//   fs.readFile("data.json", function (err, data) {
//     if (err) throw err;
//     var json = JSON.parse(data);
//     json.push(obj);
//     fs.writeFile("data.json", JSON.stringify(json), function (err) {
//       if (err) throw err;
//       console.log("Data is appended to file successfully.");
//     });
//   });
// }



// submit.addEventListener("click", function () {
//   // prevent reload
//   event.preventDefault();
//   obj.fname = fname.value;
//   obj.lname = lname.value;
//   obj.email = email.value;
//   obj.contact = contact.value;
//   obj.textarea = textarea.value;
//   // console.log(obj);
//   var str = JSON.stringify(obj);
//   console.log(str);

//   fs.writeFile("data.json", str, function (err) {
//     if (err) throw err;
//     console.log("Data is appended to file successfully.");
//   });

//   // appendData(obj);
// });



