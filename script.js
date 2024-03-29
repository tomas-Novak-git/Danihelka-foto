const header = document.querySelector("#nav-bar");
const svgOne = document.querySelector("#svg-icon1")
const svgTwo = document.querySelector("#svg-icon2")
const images = document.querySelector(".icons")
const sectionOne = document.querySelector(".hero");
const hamburger = document.querySelector("#dropdown");
const linkOne = document.querySelector("#link-1")
const linkTwo = document.querySelector("#link-2")
const linkThree = document.querySelector("#link-3")
const linkFour = document.querySelector("#link-4")
const linkFive = document.querySelector("#link-5")
const navLogo = document.querySelector('.nav-logo')
const sectionOneOptions= {
    rootMargin: "-250px 0px 0px 0px"
};

// Scroll menu background change
const sectionOneObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
            svgOne.classList.remove("icon-white")
            svgTwo.classList.remove("icon-white")
        } else {
            header.classList.remove("nav-scrolled");
            svgOne.classList.add("icon-white");
            svgTwo.classList.add("icon-white");
        }
    })
}, sectionOneOptions);



const hamMenu = document.querySelector(".ham-menu");

const navMenu = document.querySelector(".nav-menu");

// hamburger closer
const hamburgerCloser = () => {
    if(window.innerWidth <= 769){
    hamMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    }
}
hamMenu.addEventListener('click', hamburgerCloser)
navMenu.addEventListener('click', hamburgerCloser)
sectionOneObserver.observe(sectionOne);