var tl = gsap.timeline();

tl.from(".nav-logo img, .nav-mid h3,.nav-right h3", {
  y: -100,
  duration: 1.5,
  opacity: 0,
  stagger: 0.2,
  ease: "power4.out"
});

tl.from(".heading .animate-left, #mid-heading",{
    x:-200,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power4.out"
})
tl.from(".img1,.img2,.img3>img",{
    scale:0,
    opacity: 0,
    stagger: 0.4,
})
