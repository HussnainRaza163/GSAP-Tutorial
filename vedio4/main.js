gsap.to(".ball",{
    y:-250,
    duration:1,
    // delay:1,
    repeat:-1,//infinite loop k lia -1 use krain ge
    yoyo:true,//reverse animation k lia use krain ge
    ease:"power1.inOut"//animation k speed ko control krne k lia use krain ge
})
gsap.to(".shadow",{
    scaleX:0.5,
    opacity:0.5,
    duration:1,
    // delay:1,
    repeat:-1,//infinite loop k lia -1 use krain ge
    yoyo:true,//reverse animation k lia use krain ge
    ease:"power1.inOut"//animation k speed ko control krne k lia use krain ge
})