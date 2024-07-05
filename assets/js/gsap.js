
var tl = gsap.timeline()

tl.from('.header-area .logo-area', {
    y: -50,
    duration: .7,
    delay: .3,
    opacity: 0, 
    ease: 'bounce',
})

tl.from('.header-area h2', {
    duration: .7,
    opacity: 0, 
    scale: .9,
    ease: 'power3',
})

tl.from('.header-area form', {
    duration: .7,
    opacity: 0, 
    ease: 'power2',
})

gsap.from('.image-area', {
    scaleX: .6,
    duration: .7,
    delay: .3,
    scrollTrigger: {
        trigger: '.image-area',
        scroller: 'body',
        scrub: 2,
        start: 'top 0%',
        end: 'top: -100%'
    }
})

gsap.to('.big-title span', {
    x: "-70%",
    scrollTrigger: {
        trigger: '.big-title',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -100%',
        scrub: 6,
        pin: true,
    }
});

var cursorArea = document.querySelector('.cursor-area');
var cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: .7,
        ease: 'back.out',
    })
}) 


var navbarOpen = document.querySelector('.navbar-open');
var navbarClose = document.querySelector('.navbar-close');

var menuArea = gsap.timeline()

menuArea.to('.menu-area', {
    right: 0,
    duration: .5,
})

menuArea.from('.menu-area li', {
    x: 70,
    duration: .5,
    stagger: .2,
    opacity: 0,
})

menuArea.pause()

navbarOpen.addEventListener('click', function(){
    menuArea.play()
})

navbarClose.addEventListener('click', function(){
    menuArea.reverse()
})


// Function to handle smooth scrolling
function smoothScroll(event) {
    event.preventDefault();

    // Determine the scroll amount (you can adjust the multiplier for speed)
    const scrollAmount = event.deltaY * 2;

    // Get the current scroll position
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Use GSAP to animate the scroll position
    gsap.to(window, {
        duration: 0.5,
        scrollTo: {
            y: currentScroll + scrollAmount,
            autoKill: true  // Ensures that the animation is killed if the user scrolls manually
        },
        ease: "power2.out"
    });
}

// Add the event listener for mouse wheel events
window.addEventListener('wheel', smoothScroll, { passive: false });
