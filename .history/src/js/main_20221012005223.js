// import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";   

menu();
hoverChangeDescription(
  ".html",
  "HTML is the standard markup language for creating Web pages."
);
hoverChangeDescription(
  ".css",
  "CSS is the language we use to style an HTML document."
);
hoverChangeDescription(
  ".js",
  "JavaScript is the programming language of HTML and the Web."
);
hoverChangeDescription(
  ".sass",
  "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library for building user interfaces."
);
hoverChangeDescription(
  ".next",
  "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
);
hoverChangeDescription(
  ".styled",
  "Styled Components is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
);



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