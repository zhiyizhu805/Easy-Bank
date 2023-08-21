"use strict";
console.log("=======  navigation fade hover effect  =======");
const navLinks = document.querySelector(".nav__links");
const navItem = document.querySelectorAll(".nav__item");
const navContainer = document.querySelector(".nav");

// console.log('-------  my initial workout NOT recommand  -------');
//my initial workout NOT recommand
// navItem.forEach(each =>
//   each.addEventListener('mouseenter', function (e) {
//     [...e.target.parentElement.children].forEach(function (el) {
//       if (el !== e.target) el.style.opacity = 0.5;
//     });
//     this.addEventListener('mouseout', function (e) {
//       navItem.forEach(nav => (nav.style.opacity = 1));
//     });
//   })
// );
// console.log('-------  version1:  ok BUT repetitive  -------');
// // version1  right BUT repetitive
// navContainer.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(function (el) {
//       if (el !== link) {
//         el.style.opacity = 0.5;
//         logo.style.opacity = 0.5;
//       }
//     });
//   }
// });
// navContainer.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(function (el) {
//       if (el !== link) {
//         el.style.opacity = 1;
//         logo.style.opacity = 1;
//       }
//     });
//   }
// });

// console.log('-------  version2 right - inside one call-back call another function  -------');
// // version2 right - inside one call-back call another function
// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(function (el) {
//       if (el !== link) {
//         el.style.opacity = opacity;
//         logo.style.opacity = opacity;
//       }
//     });
//   }
// };
// //mouseenter/leave event does not bubble!!!
// navContainer.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// navContainer.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

console.log(
  "-------  best:   pass argument into event handler using .bind(this) -------"
);
// version3: use .bind(this) to pass extra variables to the addEventListener function
// .bind(this, arg1, arg2) is not valid.
// The handler function can only take one argument - e (event)
// But if you want to pass additional variables like above, you must cleverly use this. If you want multiple additional variables,
// you can use handleHover.bind([1,2,3,4]) to pass an array as this.
// Also, notice that you must use an arrow function inside
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    console.log(e.currentTarget); //e.currentTarget originally equal to this keyword
    console.log(this); //But we bind this keyword to 0.5/1 here
    // so this keyword here is no longer the same as currentTarget

    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    // need to use arrow function since this keyword will use parent scope this
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

navContainer.addEventListener("mouseover", handleHover.bind(0.5));
navContainer.addEventListener("mouseout", handleHover.bind(1));
// 1 is this, 0.5 is this, in the eventHandler, using .bind(), the first argument is this,
// you can pass an object into it, this will be this object, you can also pass an array into it, this will be this array.
