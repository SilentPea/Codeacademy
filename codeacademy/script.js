const menu = document.querySelector(".menu");
const hamburgerButton = document.querySelector(".hamburger");
menu.classList.add("hidden");

hamburgerButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
