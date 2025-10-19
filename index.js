const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");
const hamMenu = document.getElementById("ham-menu");

menuBtn.addEventListener("click", () => {
  nav.classList.add("open-nav");
  hamMenu.classList.add("menu-btn");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open-nav");
  hamMenu.classList.remove("menu-btn");
});

// Close hamburger menu when a nav link is clicked
const navLinks = document.querySelectorAll(".header__link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open-nav");
    hamMenu.classList.remove("menu-btn");
  });
});

// Logo click → go to home
const headerLogoContainer = document.querySelector(".header__logo-container");
headerLogoContainer.addEventListener("click", () => {
  location.href = "../index.html";
});
