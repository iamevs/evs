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

const container = document.querySelector(".calendar");

GitHubCalendar(container, "iamevs");

GitHubCalendar(container, "iamevs", { responsive: true });


//projects

let xPos = 0;

gasp.timeline()
    .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
      backgroundImage:(i)=>'url(https://picsum.photos/id/'+(i+32)+'/600/400/)',
      backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden'
    })    
    .from('.img', {
      duration:1.5,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    })
    .add(()=>{
      $('.img').on('mouseenter', (e)=>{
        let current = e.currentTarget;
        gasp.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
      })
      $('.img').on('mouseleave', (e)=>{
        gasp.to('.img', {opacity:1, ease:'power2.inOut'})
      })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
      

function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gasp.set('.ring', {cursor:'grabbing'})
  $(window).on('mousemove touchmove', drag);
}


function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gasp.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUpdate:()=>{ gasp.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
  });
  
  xPos = Math.round(e.clientX);
  console.log(xPos);
}


function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
  gasp.set('.ring', {cursor:'grab'});
}


function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  return ( 100-gasp.utils.wrap(0,360,gasp.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}
