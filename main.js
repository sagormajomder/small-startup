const openBtn = document.querySelector(".bi-list");
const closeBtn = document.querySelector(".bi-x-lg");
const navbar = document.querySelector(".navbar");

openBtn.addEventListener("click", function () {
   openBtn.classList.toggle("hidden");
   closeBtn.classList.toggle("hidden");
   navbar.classList.toggle("hide-navbar");
});
closeBtn.addEventListener("click", function () {
   openBtn.classList.toggle("hidden");
   closeBtn.classList.toggle("hidden");
   navbar.classList.toggle("hide-navbar");
});
