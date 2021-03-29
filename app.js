gsap.from(".info-item", {duration: 4, x: -300, opacity: 0, scale: 0.5, delay: 2});
gsap.from(".pract-box", {duration: 4, opacity: 0, scale: 0.5, delay: 5});



// Scroll Reveal 

ScrollReveal().reveal('#hero');
ScrollReveal().reveal('#values', { delay: 500 });
ScrollReveal().reveal('#practices', { delay: 500 });
ScrollReveal().reveal('.pract-box', { delay: 1000 });
// ScrollReveal().reveal('.box2', { delay: 1100 });
// ScrollReveal().reveal('.box3', { delay: 1400 });
// ScrollReveal().reveal('.box4', { delay: 1700 });
ScrollReveal().reveal('#banner', { delay: 500 });
ScrollReveal().reveal('#team', { delay: 500 });
ScrollReveal().reveal('#reviews', { delay: 500 });
ScrollReveal().reveal('#contact', { delay: 500 });