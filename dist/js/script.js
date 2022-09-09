const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close"),
  overlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

function percents() {
  const counter = document.querySelectorAll(".skills__rating"),
    line = document.querySelectorAll(".skills__visualisation-graph span");

  counter.forEach((item, i) => {
    line[i].style.width = item.innerHTML;
  });
}

window.addEventListener("scroll", function (e) {
  if (this.scrollY > 2700) {
    percents();
  }
});
