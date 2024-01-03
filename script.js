const header = document.querySelector("#nav-bar");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions= {
    rootMargin: "-110px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        } else {
            header.classList.remove("nav-scrolled");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);