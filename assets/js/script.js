/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*for bigger screens*/
function openNav() {
  document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("open");
}

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navigation-container");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});