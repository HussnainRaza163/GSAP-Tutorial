//list as many as you'd like
gsap.registerPlugin(ScrollTrigger);

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  gsap.to(card, {
    scrollTrigger:{
        trigger: card,
        start: "top 5%",
        end: "+=500px",
        scrub: true,
        markers: true
    },
     scale:0.5,
     opacity:0,
     duration: 1,
     rotate:20,
     ease: "power1.inOut",
  });
});
