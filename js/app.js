/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Counts the number of independent sections present 
const mainSection = document.getElementsByTagName("main")[0];
const sectionLength = mainSection.childElementCount;
// Selects the unordered list with id navbar__list (To be used as parent element while creating the navbar list)
const navList = document.getElementsByTagName("ul")[0];

const navbarMenu = document.getElementsByClassName('navbar__menu');
const parentNavbar = document.getElementsByClassName('page__header');

// For sticky navbar
const navbar = document.getElementsByClassName("page__header")[0];
const sticky = navbar.offsetTop;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * 
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar(){
  for(let sectionNumber = 1; sectionNumber < sectionLength; sectionNumber++){
      // Creating an ordered list of Section Number
      const newList = document.createElement("li");
      // Setting attribute to the list
      newList.setAttribute("class", "sec" + sectionNumber);
      // Appending to parent element
      navList.appendChild(newList);
      // Adding anchor tag
      const aTag = document.createElement('a');
      // Setting attribute to the anchor tag
      aTag.setAttribute('href', '#section' + sectionNumber);
      // Adding inner text to the anchor tag (seen as display on the Navbar)
      aTag.innerText = "Section " + sectionNumber;
      // Appending the anchor tag the newly formed list
      const newNavList = document.getElementsByTagName("ul")[0];
      newList.appendChild(aTag);
  }
}

// Adding Logo to the navbar FEND (Front-End Developer Nanodegree) logo
function addLogo() {
  const newDivLogo = document.createElement("div");
  newDivLogo.textContent = "FEND";
  newDivLogo.setAttribute("class", "logo");
  parentNavbar[0].insertBefore(newDivLogo, navbarMenu[0]);
}

// Adding Hamburger for Mobile Screen 
function addHamburger() {
  const newDivBars = document.createElement("div");
  newDivBars.setAttribute("class", "menu-toggle");
  const bars = document.createElement("i");
  // Setting icon for hamburger 
  bars.setAttribute("class", "fas fa-bars");
  newDivBars.appendChild(bars);
  parentNavbar[0].appendChild(newDivBars);
}

// Toggle Feature for Hamburger
function addToggleToHamburger() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
      if (nav.className != 'active') {
          nav.className = 'active';
        }
      else {
        nav.className = '';
        }
  });
}

// Sticky navbar feature 
function navbarSticky() {
    if (window.pageYOffset >= sticky) { 
        navbar.classList.add("sticky");
    }   
    else {
        navbar.classList.remove("sticky");
    }
}

// Add class 'active' to section when near top of viewport
  function scrollSec1() {
    window.scrollTo({top: 2650, behavior: "smooth"});
  }

  function scrollSec2() {
    window.scrollTo({top: 1250, behavior: "smooth"});
  }

  function scrollSec3() {
    window.scrollTo({top: 1850, behavior: "smooth"});
  }

  function scrollSec4() {
    window.scrollTo({top: 2800, behavior: "smooth"});
  }

  function scrollWin() {
    window.scrollTo({top: 0, behavior: "smooth"});;
  }

//Navbar Click event to smooth scroll to respective sections
function scrollOnClick() {
  document.getElementsByClassName("sec1")[0].addEventListener('click', scrollSec1);
  document.getElementsByClassName("sec2")[0].addEventListener('click', scrollSec2);
  document.getElementsByClassName("sec3")[0].addEventListener('click', scrollSec3);
  document.getElementsByClassName("sec4")[0].addEventListener('click', scrollSec4);
}

// Button Click to scroll to the top of the page
function scrollToPageTop() {
  document.getElementById("btn").addEventListener('click', scrollWin);
}

function setNavbarActive(){
  window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;
    navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    });   
}
// Scroll to anchor ID using scrollTO event
//Active navigation on scroll
function setSectionActive() {
    window.addEventListener('scroll', event => {
        let sectionLinks = document.querySelectorAll('main section');
        const sectionClassName = document.getElementsByClassName("sectionLinks")[0];
        let fromTop = window.scrollY;
        sectionLinks.forEach(id => {
        if (
        id.offsetTop <= fromTop &&
        id.offsetTop + id.offsetHeight > fromTop
        ) {
        id.classList.add('your-active-class');
        } else {
            id.classList.remove('your-active-class');
        }
    });
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbar();

addLogo();

addHamburger();

addToggleToHamburger();

navbarSticky();

// Scroll to section on link click
setNavbarActive();

scrollOnClick();

scrollToPageTop();

// Set sections as active

setSectionActive();
