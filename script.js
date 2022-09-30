const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  header.classList.toggle("active");
});

// Working tabbed button of Portfolio section

const p_btns = document.querySelector(".portfolio-btn");
const p_btn = document.querySelectorAll(".p-btn");
const overlay_img = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((element) => element.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn-${btn_num}`);

  overlay_img.forEach((element) => {
    element.classList.add("p-btn-notActive");
  });

  img_active.forEach((element) => {
    element.classList.remove("p-btn-notActive");
  });
});

// Animate counter section

const counterNum = document.querySelectorAll(".counter_num");

const speed = 200;

counterNum.forEach((e) => {
  const update = () => {
    const targetValue = parseInt(e.dataset.number);
    console.log(targetValue);

    const initialValue = parseInt(e.innerText);
    console.log(initialValue);

    const incrementCounter = Math.trunc(targetValue / speed);
    console.log(incrementCounter);

    if (initialValue < targetValue) {
      e.innerText = `${initialValue + incrementCounter}+`;
      setTimeout(update, 10);
    }
  };
  update();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
