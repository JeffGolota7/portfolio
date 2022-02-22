// Variables
const hamburger = document.querySelector("#hamburger");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector("#mobile");
const mobileLinks = document.querySelector(".links");

window.addEventListener("click", outsideClick);
hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    mobileMenu.style.left = "-1000px";
    mobileLinks.style.opacity = "0";
    hamburger.classList.remove("active");
  } else {
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "all";
    mobileLinks.style.opacity = "1";
    mobileMenu.style.left = "0";
    hamburger.classList.add("active");
  }
});
mobileLinks.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    mobileMenu.style.left = "-1000px";
    mobileLinks.style.opacity = "0";
    hamburger.classList.remove("active");
  }
});
function outsideClick(e) {
  if (e.target == overlay) {
    if (hamburger.classList.contains("active")) {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      mobileMenu.style.left = "-1000px";
      mobileLinks.style.opacity = "0";
      hamburger.classList.remove("active");
    }
  }
}
