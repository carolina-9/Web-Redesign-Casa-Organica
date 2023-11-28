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
let dot = document.querySelector(".dot");
let dotText = document.querySelector("#dot-text");
let purposeSection = document.querySelector(".purpose");
let purposeText = document.querySelector(".purpose-text");
let infoSection = document.querySelector(".information");
let infoheader = document.querySelector(".information h4");
let footer = document.querySelector("footer");
let goldHand = document.querySelector(".gold-hand");
let icon = document.querySelector(".map-icon");

let link = document.querySelector("nav a");




addEventListener("load", () => {
    gsap.fromTo(header, { opacity:0 }, { opacity:1, delay:0.5, duration: 0.5, ease: "power1.out"});
    gsap.fromTo(mexico, { opacity:0 }, { opacity:1, delay:0.5, duration: 0.5, ease: "power1.out"});
    gsap.fromTo(button, { opacity:0 }, { opacity:1, delay:0.5, duration: 0.5, ease: "power1.out"});
});



button.addEventListener("click", ()  => { 


    // text
    gsap.to(header, { opacity:0, duration: 0.3, ease: "power1.out"});
    gsap.to(mexico, { opacity:0, duration: 0.4, display: "hidden", ease: "power1.out"});
    gsap.to(button, { opacity:0, duration: 0.5, ease: "power1.out"});

    // squares
    gsap.fromTo(squareone, {height: 0} , {duration: 0.5, delay: 0.2, height:"100vh", ease: "power1.out"});
    gsap.fromTo(squaretwo, {height: 0} , {duration: 0.5, delay: 0.5, height:"100vh", ease: "power1.out"});


    // visit section
    gsap.fromTo(visitSection, { opacity:0, zIndex:5 }, { opacity:1, delay:1.5, duration: 0.9, ease: "power1.out"});
    gsap.fromTo(goldHand, { opacity:0, zIndex:5 }, { opacity:1, delay:1.5, duration: 0.9, ease: "power1.out"});
    gsap.fromTo(icon, { opacity:0, zIndex:5 }, { opacity:1, delay:1.5, duration: 0.9, ease: "power1.out"});
    // gsap.to(dot, { boxShadow: "0 0 10px 5px #f00",repeat:-1, yoyo:true, duration: 0.5, ease: "power1.out"});

    // purpose section
    gsap.to(purposeSection, { opacity:1, display:'block', delay:1.5, duration: 0.9, ease: "power1.out"});

    // info section
    gsap.to(infoSection, { opacity:1, display:'block', delay:1.5, duration: 0.9, ease: "power1.out"});

    // footer 
    gsap.to(footer, { opacity:1, display:'block', delay:1.5, duration: 0.9, ease: "power1.out"});

    // dot 
    gsap.to(dot, { opacity:1, display:'block',zIndex: 20, delay:0.9, duration: 0.9, ease: "power1.out"});
    gsap.to(dotText, { opacity:1, display:'block',zIndex: 20, delay:0.9, duration: 0.9, ease: "power1.out"});

    

});

// Info/purpose section text fade ins
// fade only happens when i open dev tools? fix later
document.addEventListener("DOMContentLoaded", function() {
   
    gsap.to(purposeText, { opacity: 1, scrollTrigger: { trigger: purposeText, start: "top 80%", end: "bottom 50%", scrub: true } });
   
    gsap.to(infoheader, { opacity: 1, scrollTrigger: { trigger: infoheader, start: "top 80%", end: "bottom 50%", scrub: true } });
   });
   

   
//    glowing dot
gsap.to(dot, {opacity: 0.9,repeat: -1, display:'block', yoyo: true,ease: "power1.inOut",duration: 0.8,});





// Gallery section ~ didt work / try this laer

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });