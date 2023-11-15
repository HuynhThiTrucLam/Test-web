// const { log } = require("gulp-clean/utils");

//JS của sidebar
const sidebarExit = document.querySelector(".sidebar-exit");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

const toggle = document.querySelector(".fa-solid.fa-bars");

toggle.addEventListener("click", clickToggle);
function clickToggle() {
  sidebar.style.transform = "translateX(0)";
  overlay.style.display = "block";
}

sidebarExit.addEventListener("click", clickSidebarExit);
function clickSidebarExit() {
  sidebar.style.transform = "translateX(calc(-100% - 41px))";
  overlay.style.display = "none";
}

//JS của noti
const noti = document.querySelector(".noti");
const shopping = document.querySelector(".header-shopping-wrap");

shopping.addEventListener("click", clickShopping);
function clickShopping() {
  noti.style.transform = "translateY(0)";
  overlay.style.display = "block";
}

overlay.addEventListener("click", clickOverlay);
function clickOverlay() {
  noti.style.transform = "translateY(calc(-100% - 120px))";
  overlay.style.display = "none";
}
