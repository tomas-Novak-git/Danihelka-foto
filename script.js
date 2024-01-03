const header = document.querySelector("#nav-bar");
const svgOne = document.querySelector("#svg-icon1")
const svgTwo = document.querySelector("#svg-icon2")
const images = document.querySelector(".icons")
const sectionOne = document.querySelector(".hero");

const sectionOneOptions= {
    rootMargin: "-175px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
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

sectionOneObserver.observe(sectionOne);