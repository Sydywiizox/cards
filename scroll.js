gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  y: "10vh",
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".container",
    start: "10% 60%", // when the top of the trigger hits the top of the viewport
    end: "80% 60%",
    scrub: true,
    markers: false,
  },
});

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
