"use strict";
const header = document.querySelector(".header");
const btnMobNav = document.querySelector(".btn-mobile-nav");

btnMobNav.addEventListener("click", function () {
   header.classList.toggle("nav-open");
});
