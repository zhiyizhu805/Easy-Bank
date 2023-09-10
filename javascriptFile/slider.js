"use strict";
console.log("=======  Build slider component  =======");
console.log("-------  my first version  -------");
// const slides = document.querySelectorAll('.slide');
// const slider = document.querySelector('.slider');
// const btnSlideRight = document.querySelector('.slider__btn--right');
// const btnSlideLeft = document.querySelector('.slider__btn--left');
// const slidesTotal = slides.length;
// const dotContainer = document.querySelector('.dots');

// slides.forEach((slide, i) => {
//   slide.style.transform = `translateX(${100 * i}%)`;
//   console.log(slide.style.transform);
// });
// //0%,100%,200%,300%,

// // // just for better viewing
// // slider.style.transform = `scale(0.4) transformX(-800px)`;
// // slider.style.overflow = 'visible';

// //create dots element
// const createDots = function (currentSlide) {
//   slides.forEach((_, index) => {
//     const dot = document.createElement('button');
//     dot.classList.add('dots__dot');
//     dot.dataset.slide = index;
//     dotContainer.append(dot);
//     currentSlide === index && goToDot(currentSlide);
//   });
// };
// //convert to -100%,0%,100%,200%,
// const goToDot = function (currentSlide) {
//   const dots = document.querySelectorAll('.dots__dot');
//   dots.forEach((dot, index) => {
//     dot.classList.remove('dots__dot--active');
//     index === Number(currentSlide) && dot.classList.add('dots__dot--active');
//   });
// };
// let currentSlide = 0;
// const goToSlide = function (currentSlide) {
//   slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
//     goToDot(currentSlide);
//   });
// };

// //** innitial setting
// createDots(0);
// goToSlide(0);

// //** call back function
// const next = function () {
//   if (currentSlide >= slidesTotal - 1) currentSlide = -1;
//   currentSlide++;
//   goToSlide(currentSlide);
// };
// const previous = function () {
//   if (currentSlide <= 0) currentSlide = slidesTotal;
//   currentSlide--;
//   goToSlide(currentSlide);
// };
// const directToSlideKeyPress = function (e) {
//   e.preventDefault();
//   //   console.log(e.key);
//   if (e.key === 'ArrowRight') next(currentSlide);
//   if (e.key === 'ArrowLeft') previous(currentSlide);
//   //   e.key === 'ArrowRight'&& next(currentSlide);
// };
// const directToSlideDotClick = function () {
//   currentSlide = this.dataset.slide;
//   goToSlide(currentSlide);
// };

// //** event listener
// const dotClick = function () {
//   const dots = document.querySelectorAll('.dots__dot');
//   dots.forEach(dot =>
//     dot.addEventListener('click', directToSlideDotClick.bind(dot))
//   );
// };
// dotClick();
// btnSlideRight.addEventListener('click', next);
// btnSlideLeft.addEventListener('click', previous);
// //add eventlistener to keyborad event
// document.addEventListener('keydown', directToSlideKeyPress);

console.log("-------  revised my version  -------");
//improvement:
//1.  use .insertAdjacentHTML('beforeend'),`HTML...`) to create button element
//     instead of manually add all attributes one by one
//2.  use delegation(bubble) to create the event listener for dot click
//3.  use destructuring {slide} for the dataset attribute
//    log the dataset attribute and check data type
//4.  use dataset attribute[currentSlide] to querySelector the current dot,and
//    active them instead of using it inside the forEach method
//5.  refacturing code -create init function put all initial needed function call in
//    and call it.put all codes into one big slider function and call it,in this way,
//    you can pass in some options to this function and work with it.

//css: 4 direction
//slide.style.transform = `translateX(${index * 100}%)`
//slide.style.transform = `translateY(${index * -100}%)`
//slide.style.transform = `translateX(${index * 100}%)`
//slide.style.transform = `translateY(${index * -100}%)`
const slider = function () {
  //***element
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");
  const btnNext = document.querySelector(".slider__btn--right");
  const btnPrev = document.querySelector(".slider__btn--left");
  const maxSlide = document.querySelectorAll(".slide").length;

  //spread the overlap
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
    //css 0%,100%,200%,300%,
  });

  // //for viewing purpose - delete when finish
  // slider.style.transform = 'scale(0.5)';
  // slider.style.overflow = 'visible';

  const goToSlide = function (currentSlide) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
    activateDot(currentSlide);
  };

  const createDots = function () {
    slides.forEach((_, index) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide=${index}></button>`
      );
    });
    activateDot(currentSlide);
  };

  const activateDot = function (currentSlide) {
    console.log(currentSlide);
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${currentSlide}"]`)
      .classList.add("dots__dot--active");
  };

  //***call-back
  let currentSlide = 0;
  const next = function () {
    if (Number(currentSlide) === maxSlide - 1) currentSlide = 0;
    else currentSlide++;
    goToSlide(currentSlide);
  };

  const prev = function () {
    if (Number(currentSlide) === 0) currentSlide = maxSlide - 1;
    else currentSlide--;
    goToSlide(currentSlide);
  };

  //*** event listener
  const dotClick = function () {
    dotsContainer.addEventListener("click", (e) => {
      //remember do guard clause when use bubble
      if (!e.target) return;
      // console.log(e.target.dataset);
      //DOMStringMap {slide: '2'}  which is a object
      const { slide } = e.target.dataset;
      currentSlide = slide;
      // currentSlide = e.target.dataset.slide;
      goToSlide(currentSlide);
    });
  };
  const init = function () {
    createDots();
    goToSlide(currentSlide);
    dotClick();
  };
  init();

  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    e.key === "ArrowRight" && next(currentSlide);
    e.key === "ArrowLeft" && prev(currentSlide);
  });

  //convert css to -100%,0%,100%,200%,
  btnNext.addEventListener("click", next);
  btnPrev.addEventListener("click", prev);
};
slider();
