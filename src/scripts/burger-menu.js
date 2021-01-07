//burger nav

const nav = document.querySelector(".menu_list");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const close = document.querySelector(".close-btn");

burger.addEventListener("click", () => {
  nav.classList.toggle("menu_list-open");
  // burger.classList.toggle("toggle");
  close.classList.toggle("close-btn--close");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("menu_list-open");
    // burger.classList.toggle("toggle");
    close.classList.toggle("close-btn--close");
  });
});

close.addEventListener("click", () => {
    nav.classList.toggle("menu_list-open");
    // burger.classList.toggle("toggle");
    close.classList.toggle("close-btn--close");
  });

