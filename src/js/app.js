"use strict";
// ALL Element
const header = document.querySelector(".header");
const btnMobNav = document.querySelector(".btn-mobile-nav");

// Mobile Navigation Menu
btnMobNav.addEventListener("click", function () {
   header.classList.toggle("nav-open");
});
