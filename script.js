// js libraries
// const simpleParallax = require('simple-parallax-js');


// TRANSITION ANIMATION
let button = document.querySelector("button");

button.addEventListener("click", ()  => { 

    let squareone = document.querySelector("#square1");
    let squaretwo = document.querySelector("#square2");


// test
    gsap.fromTo(squareone, {height: 0} , {duration: 0.6, height:"100vh", ease: "power1.out"});
    gsap.fromTo(squaretwo, {height: 0} , {duration: 0.6, delay: 0.1, height:"100vh", ease: "power1.out"});
   

});

// LANDING PAGE TEXT ANIMATION


let header = document.querySelector("h1");

button.addEventListener("click", ()  => {
    gsap.to(header, {y: "-100px", opacity:0, duration: 0.4, ease: "power1.out"});
});