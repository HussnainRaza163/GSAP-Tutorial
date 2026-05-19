let lt = gsap.timeline({
    paused:true,
});
lt.to(".box", {
     y:-50,
    duration: 1,
    ease: "power2.out",
})
.to(".box", {
     x:200,
    duration: 1,
    ease: "power2.out",
})
.to(".box", {
     y:-200,
    duration: 1,
    ease: "bounce.out",
})
