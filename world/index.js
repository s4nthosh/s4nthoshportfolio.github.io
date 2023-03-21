const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text",{ y: "0%",duration: 1, stagger:0.25});
tl.to(".slider",{y:"-100%",duration: 1.5,delay:0.5})
tl.to(".intro",{y:"-100%",duration:1},"-=1.5");
tl.fromTo("video",{opacity:0},{opacity:1,duration:1},"-=.5")
tl.fromTo("nav",{opacity:0},{opacity:1,duration:1});

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click",() => {
    navlinks.classList.toggle("open");
});
