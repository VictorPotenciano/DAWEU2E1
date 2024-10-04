function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Victor Potenciano", "Desarrollador Web"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDely: 2000
});
