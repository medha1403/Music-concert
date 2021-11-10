let hamburger = document.querySelector("#hamburger");
let navpage = document.querySelector("#navpage");
let close = document.querySelector("#close");

hamburger.addEventListener("click", function () {
  navpage.style.transform = "translateY(0)";
});
close.addEventListener("click", function () {
  navpage.style.transform = "translateY(-100%)";
});
