// gsap.to(".box",{
//     x:800,
//     duration:4

// })

// from
// gsap.from(".box",{
//     x:800,
//     duration:4
        
// })

gsap.fromTo(".box",{
    //start
    x:200,
    opacity:0
}
,
{
    // end
    x:800,
    opacity:1,
    duration:4
}
)