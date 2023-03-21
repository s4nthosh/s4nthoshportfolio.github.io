let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


timeline
 .to(".bg-down",3,{y: -160})
 .to(".bg-right",3,{y: -80},"-=3")
 .to(".bg-hum",3,{y:-150},"-=3")
 .fromTo(".bg",3,{y:-50},{y:0 ,duration:3},"-=3" )   
 .to(".Places",3,{top:"0%"},"-=3");


 let scene = new ScrollMagic.Scene({
    triggerElement:"section",
    duration:"300%",
    triggerHook:0,
 })
 .setTween(timeline)
 .setPin('section')
 .addTo(controller);

 const tl = gsap.timeline({defaults: {ease: "power1.out"}});

 tl.to(".slider",{x:"-100%",duration: 1.5,delay:0.5})
 tl.to(".intro",{x:"-100%",duration:1},"-=1.5");
 tl.fromTo(".title",{opacity:0},{opacity:1,duration:2},"-=.5")