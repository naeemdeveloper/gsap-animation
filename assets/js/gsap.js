
var tl = gsap.timeline()

tl.from('.header-area .logo-area', {
    y: -50,
    duration: 1,
    delay: .5,
    opacity: 0, 
    ease: 'bounce',
})

tl.from('.header-area h2', {
    y: 20,
    duration: 1,
    opacity: 0, 
    scale: .4,
})

tl.from('.header-area form', {
    y: 30,
    duration: 1,
    opacity: 0, 
    ease: 'power2',
})

gsap.from('.image-area', {
    scaleX: .5,
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: '.image-area',
        scroller: 'body',
        scrub: 1,
    }
})

gsap.to('.big-title span', {
    x: "-60%",
    scrollTrigger: {
        trigger: '.big-title',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -150%',
        scrub: 2,
        pin: true,
    }
});