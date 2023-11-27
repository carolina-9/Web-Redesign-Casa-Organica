// js libraries
// parallax library
var rellax = new Rellax('.rellax');
gsap.registerPlugin(ScrollTrigger);


// TRANSITION ANIMATION
let button = document.querySelector("button");
let header = document.querySelector("h1");
let squareone = document.querySelector("#square1");
let squaretwo = document.querySelector("#square2");
let mexico = document.querySelector(".landing-page p");
let visitSection = document.querySelector(".visit");
// let dot = document.querySelector(".open::before");
let purposeSection = document.querySelector(".purpose");
let purposeText = document.querySelector(".purpose-text");
let infoSection = document.querySelector(".information");
let footer = document.querySelector("footer");




addEventListener("load", () => {
    gsap.fromTo(header, { opacity:0 }, { opacity:1, delay:0.5, duration: 0.5, ease: "power1.out"});
    gsap.fromTo(mexico, { opacity:0 }, { opacity:1, delay:0.5, duration: 0.5, ease: "power1.out"});
});



button.addEventListener("click", ()  => { 


    // text
    gsap.to(header, { opacity:0, duration: 0.3, ease: "power1.out"});
    gsap.to(mexico, { opacity:0, duration: 0.4, ease: "power1.out"});

    // squares
    gsap.fromTo(squareone, {height: 0} , {duration: 0.5, delay: 0.2, height:"100vh", ease: "power1.out"});
    gsap.fromTo(squaretwo, {height: 0} , {duration: 0.5, delay: 0.5, height:"100vh", ease: "power1.out"});


    // visit section
    gsap.fromTo(visitSection, { opacity:0, zIndex:5 }, { opacity:1, delay:1.5, duration: 0.9, ease: "power1.out"});
    // gsap.to(dot, { boxShadow: "0 0 10px 5px #f00",repeat:-1, yoyo:true, duration: 0.5, ease: "power1.out"});

    // purpose section
    gsap.to(purposeSection, { opacity:1, display:'block', delay:1.5, duration: 0.9, ease: "power1.out"});

    // info section
    gsap.to(infoSection, { opacity:1, display:'block', delay:1.5, duration: 0.9, ease: "power1.out"});

    // footer 
    gsap.to(footer, { opacity:1, display:'block', delay:1.5, duration: 0.9, ease: "power1.out"});

});

// Info/purpose section text fade ins

gsap.fromTo(purposeText, { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: purposeText, start: "top 80%", end: "bottom 50%", scrub: true } });






