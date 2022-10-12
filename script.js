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

// const counterNum = document.querySelectorAll(".counter_num");

// const speed = 200;

// counterNum.forEach((e) => {
//   const update = () => {
//     const targetValue = parseInt(e.dataset.number);
//     // console.log(targetValue);

//     const initialValue = parseInt(e.innerText);
//     // console.log(initialValue);

//     const incrementCounter = Math.trunc(targetValue / speed);
//     // console.log(incrementCounter);

//     if (initialValue < targetValue) {
//       e.innerText = `${initialValue + incrementCounter}+`;
//       setTimeout(update, 10);
//     }
//   };
//   update();
// });

// Scroll To top
const Top = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Automatic sticky navbar
const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heroSection);

// Animation on numbers on scrollBehavior:
const counterNumber = document.querySelector(".section-counter-number");
const counterNumberObserver = new IntersectionObserver(
  (entries, observe) => {
    const entry = entries[0];
    // console.log(entry);
    if (entry.isIntersecting == false) return;

    const counterNum = document.querySelectorAll(".counter_num");

    const speed = 200;

    counterNum.forEach((e) => {
      const update = () => {
        const targetValue = parseInt(e.dataset.number);
        // console.log(targetValue);

        const initialValue = parseInt(e.innerText);
        // console.log(initialValue);

        const incrementCounter = Math.trunc(targetValue / speed);
        // console.log(incrementCounter);

        if (initialValue < targetValue) {
          e.innerText = `${initialValue + incrementCounter}+`;
          setTimeout(update, 10);
        }
      };
      update();
    });
    observer.unobserve(counterNumber);
  },
  {
    root: null,
    threshold: 0,
  }
);

counterNumberObserver.observe(counterNumber);

// Swiper JS
// new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// function myJsmedia(widthSize) {
//   if (widthSize.matches) {
//     new Swiper(".mySwiper", {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     });
//   } else {
//     new Swiper(".mySwiper", {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     });
//   }
// }

// media query for Swiper JS
// const widthSize = window.matchMedia("(max-width: 600px)");
// myJsmedia(widthSize);
// widthSize.addEventListener("change", myJsmedia);

function myFunction(widthSize) {
  if (widthSize.matches) {
    // If media query matches
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myFunction);
