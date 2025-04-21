let burgerMenu = document.querySelector(".burger");
let menu = document.querySelector(" nav .container ul");
let nav = document.querySelector("nav");
burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > nav.offsetHeight + 450) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

gsap.from(".logo img", {
  opacity: 0,
  delay: 1,
  x: 20,
});
