let menuLinks = document.querySelectorAll("nav .container ul li");
let timeline = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
timeline.from(".logo", {
  opacity: 0,
  delay: 0,
  x: 20,
});
timeline.from(menuLinks, {
  opacity: 0,
  x: 0,
  duration: 1,
  delay: 1.5,
  stagger: {
    amount: 1,
  },
});
gsap.utils.toArray("p").forEach((p) => {
  timeline.fromTo(
    p,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      delay: 0.1,
      scrollTrigger: p,
    }
  );
});
