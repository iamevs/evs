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

"use strict";

var parse = require("github-calendar-parser"),
  $ = require("elly"),
  addSubtractDate = require("add-subtract-date"),
  formatoid = require("formatoid");

var DATE_FORMAT1 = "MMM D, YYYY",
  DATE_FORMAT2 = "MMMM D";

var MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function printDayCount(dayCount) {
  return dayCount + " " + (dayCount === 1 ? "day" : "days");
}

function addTooltips(container) {
  var tooltip = document.createElement("div");
  tooltip.classList.add("day-tooltip");
  container.appendChild(tooltip);

  // Add mouse event listener to show & hide tooltip
  var days = container.querySelectorAll(".js-calendar-graph-svg rect.ContributionCalendar-day");
  days.forEach(function (day) {
    day.addEventListener("mouseenter", function (e) {
      var contribCount = e.target.getAttribute("data-count");
      if (contribCount === "0") {
        contribCount = "No contributions";
      } else if (contribCount === "1") {
        contribCount = "1 contribution";
      } else {
        contribCount = contribCount + " contributions";
      }
      var date = new Date(e.target.getAttribute("data-date"));
      var dateText = MONTH_NAMES[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
      tooltip.innerHTML = "<strong>" + contribCount + "</strong> on " + dateText;
      tooltip.classList.add("is-visible");
      var size = e.target.getBoundingClientRect(),
        leftPos = size.left + window.pageXOffset - tooltip.offsetWidth / 2 + size.width / 2,
        topPos = size.bottom + window.pageYOffset - tooltip.offsetHeight - 2 * size.height;
      tooltip.style.top = topPos + "px";
      tooltip.style.left = leftPos + "px";
    });
    day.addEventListener("mouseleave", function () {
      tooltip.classList.remove("is-visible");
    });
  });
}

/**
 * GitHubCalendar
 * Brings the contributions calendar from GitHub (provided username) into your page.
 *
 * @name GitHubCalendar
 * @function
 * @param {String|HTMLElement} container The calendar container (query selector or the element itself).
 * @param {String} username The GitHub username.
 * @param {Object} options An object containing the following fields:
 *
 *    - `summary_text` (String): The text that appears under the calendar (defaults to: `"Summary of
 *      pull requests, issues opened, and commits made by <username>"`).
 *    - `proxy` (Function): A function that receives as argument the username (string) and should return a promise resolving the HTML content of the contributions page.
 *      The default is using @Bloggify's APIs.
 *    - `global_stats` (Boolean): If `false`, the global stats (total, longest and current streaks) will not be calculated and displayed. By default this is enabled.
 *    - `responsive` (Boolean): If `true`, the graph is changed to scale with the container. Custom CSS should be applied to the element to scale it appropriately. By default this is disabled.
 *    - `tooltips` (Boolean): If `true`, tooltips will be shown when hovered over calendar days. By default this is disabled.
 *    - `cache` (Number) The cache time in seconds.
 *
 * @return {Promise} A promise returned by the `fetch()` call.
 */
module.exports = function GitHubCalendar(container, username, options) {

  container = $(container);

  options = options || {};
  options.summary_text = options.summary_text || "Summary of pull requests, issues opened, and commits made by <a href=\"https://github.com/" + username + "\" target=\"blank\">@" + username + "</a>";
  options.cache = (options.cache || 24 * 60 * 60) * 1000;

  if (options.global_stats === false) {
    container.style.minHeight = "175px";
  }

  var cacheKeys = {
    content: "gh_calendar_content." + username,
    expire_at: "gh_calendar_expire." + username

    // We need a proxy for CORS
  }; options.proxy = options.proxy || function (username) {
    return fetch("https://api.bloggify.net/gh-calendar/?username=" + username).then(function (r) {
      return r.text();
    });
  };

  options.getCalendar = options.getCalendar || function (username) {
    if (options.cache && Date.now() < +localStorage.getItem(cacheKeys.expire_at)) {
      var content = localStorage.getItem(cacheKeys.content);
      if (content) {
        return Promise.resolve(content);
      }
    }

    return options.proxy(username).then(function (body) {
      if (options.cache) {
        localStorage.setItem(cacheKeys.content, body);
        localStorage.setItem(cacheKeys.expire_at, Date.now() + options.cache);
      }
      return body;
    });
  };

  var fetchCalendar = function fetchCalendar() {
    return options.getCalendar(username).then(function (body) {
      var div = document.createElement("div");
      div.innerHTML = body;
      var cal = div.querySelector(".js-yearly-contributions");
      $(".position-relative h2", cal).remove();
      //cal.querySelector(".float-left.text-gray").innerHTML = options.summary_text

      // Remove 3d visualiser div
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = div.querySelectorAll("a")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var a = _step.value;

          if (a.textContent.includes("View your contributions in 3D, VR and IRL!")) {
            a.parentElement.remove();
          }
        }

        // If 'include-fragment' with spinner img loads instead of the svg, fetchCalendar again
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (cal.querySelector("include-fragment")) {
        setTimeout(fetchCalendar, 500);
      } else {
        // If options includes responsive, SVG element has to be manipulated to be made responsive
        if (options.responsive === true) {
          var svg = cal.querySelector("svg.js-calendar-graph-svg");
          // Get the width/height properties and use them to create the viewBox
          var width = svg.getAttribute("width");
          var height = svg.getAttribute("height");
          // Remove height property entirely
          // svg.removeAttribute("height");
          // Width property should be set to 100% to fill entire container
          // svg.setAttribute("width", "200%");
          // Add a viewBox property based on the former width/height
          svg.setAttribute("viewBox", "555 0 288 168");
        }

        if (options.global_stats !== false) {
          var parsed = parse($("svg", cal).outerHTML),
            currentStreakInfo = parsed.current_streak ? formatoid(parsed.current_streak_range[0], DATE_FORMAT2) + " &ndash; " + formatoid(parsed.current_streak_range[1], DATE_FORMAT2) : parsed.last_contributed ? "Last contributed in " + formatoid(parsed.last_contributed, DATE_FORMAT2) + "." : "Rock - Hard Place",
            longestStreakInfo = parsed.longest_streak ? formatoid(parsed.longest_streak_range[0], DATE_FORMAT2) + " &ndash; " + formatoid(parsed.longest_streak_range[1], DATE_FORMAT2) : parsed.last_contributed ? "Last contributed in " + formatoid(parsed.last_contributed, DATE_FORMAT2) + "." : "Rock - Hard Place",
            firstCol = $("<div>", {
              "class": "contrib-column contrib-column-first table-column",
              html: "<span class=\"text-muted\">Contributions in the last year</span>\n                               <span class=\"contrib-number\">" + parsed.last_year + " total</span>\n                               <span class=\"text-muted\">" + formatoid(addSubtractDate.add(addSubtractDate.subtract(new Date(), 1, "year"), 1, "day"), DATE_FORMAT1) + " &ndash; " + formatoid(new Date(), DATE_FORMAT1) + "</span>"
            }),
            secondCol = $("<div>", {
              "class": "contrib-column table-column",
              html: "<span class=\"text-muted\">Longest streak</span>\n                               <span class=\"contrib-number\">" + printDayCount(parsed.longest_streak) + "</span>\n                               <span class=\"text-muted\">" + longestStreakInfo + "</span>"
            }),
            thirdCol = $("<div>", {
              "class": "contrib-column table-column",
              html: "<span class=\"text-muted\">Current streak</span>\n                               <span class=\"contrib-number\">" + printDayCount(parsed.current_streak) + "</span>\n                               <span class=\"text-muted\">" + currentStreakInfo + "</span>"
            });

          cal.appendChild(firstCol);
          cal.appendChild(secondCol);
          cal.appendChild(thirdCol);
        }

        container.innerHTML = cal.innerHTML;

        // If options includes tooltips, add tooltips listeners to SVG
        if (options.tooltips === true) {
          addTooltips(container);
        }
      }
    }).catch(function (e) {
      return console.error(e);
    });
  };

  return fetchCalendar();
};

const container = document.querySelector(".calendar");

GitHubCalendar(container, "iamevs");

GitHubCalendar(container, "iamevs", { responsive: true });

if (window.innerWidth < 768) {
  var svvg = document.querySelector(".js-calendar-graph-svg");
  svvg.setAttribute("height", "200");
  svvg.setAttribute("viewBox", "555 0 288 168");
}

//projects
