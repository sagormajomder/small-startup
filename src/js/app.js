"use strict";
const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header__container");
const headerBtn = document.querySelector(".header__btn");

headerBtn.addEventListener("click", function () {
   headerContainer.classList.toggle("header__nav-open");
});

const heroEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
   function (entries) {
      const ent = entries[0];

      if (ent.isIntersecting === false) {
         document.body.classList.add("sticky");
      }

      if (ent.isIntersecting === true) {
         document.body.classList.remove("sticky");
      }
   },
   {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
   }
);
obs.observe(heroEl);
