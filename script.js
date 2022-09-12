const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  header.classList.toggle("active");
});
