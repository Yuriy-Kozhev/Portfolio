const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  overlay = document.querySelector(".menu__overlay"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    menu.classList.remove("active");
  }
});
