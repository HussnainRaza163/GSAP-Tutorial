const text =["Developer","Designer","Freelancer","Blogger"];
const textElement = document.getElementById("animation-text");
let index=0;


function animateText(){ 
    const word = text[index];
    textElement.textContent = word;
    //start
    gsap.fromTo(textElement,{
        y:50,
        opacity:0
    }
    ,
    {
        y:0,opacity:1,
        duration:1,
        ease:"elastic.out(1,0.5)",}
    )
    //end
    gsap.to(textElement,{
        y:-50,
        opacity:0,
        delay:2,
        duration:0.8,
        ease:"power2.in",
            onComplete: () =>{
                index =(index+1)%text.length;
                animateText();
            },
    });

}
animateText();
