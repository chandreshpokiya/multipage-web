const menuBtn = document.querySelector(".menu-icon");
const clsBtn = document.querySelector(".cls-btn");
const menu = document.querySelector(".hamburger");
const body = document;

var scrollButton = document.querySelector(".scrollTop");

if (scrollButton) {
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// menuBtn.addEventListener("click", () => {
//   menuBtn.classList.add("d-none");
//   menu.classList.remove("d-none");

// });

// clsBtn.addEventListener("click", () => {
//   menuBtn.classList.remove("d-none");
//   menu.classList.add("d-none");
// });

menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
  menuBtn.classList.add("hide");
});

clsBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  menuBtn.classList.remove("hide");
});
