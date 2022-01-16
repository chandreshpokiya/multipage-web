const menuBtn = document.querySelector(".menu-icon");
const clsBtn = document.querySelector(".cls-btn");
const menu = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("d-none");
  menu.classList.remove("d-none");
});

clsBtn.addEventListener("click", () => {
  menuBtn.classList.remove("d-none");
  menu.classList.add("d-none");
});
