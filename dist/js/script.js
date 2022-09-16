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
  const panel = document.querySelector(".sidepanel");
  // console.log(scrollY);
  if (this.scrollY > 2700) {
    percents();
  }
  if (this.scrollY > 4000) {
    panel.classList.add("hide");
  } else if (this.scrollY < 4000) {
    panel.classList.remove("hide");
  }
});

function contacts() {
  const btn = document.querySelector(".sidepanel-white-btn"),
    links = document.querySelector(".sidepanel-white"),
    background = document.querySelector(".promo");

  btn.addEventListener("click", () => {
    links.style.top = "0px";
    links.style.opacity = 1;
    btn.style.top = "-40px";
  });

  background.addEventListener("click", () => {
    links.style.top = "-50px";
    links.style.opacity = 0;
    btn.style.top = "0px";
  });
}

contacts();
