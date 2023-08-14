"use strict";
const btnSrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
console.log("=======  1  smooth scrolling for learn more button =======");

//smooth scrolling - way2 - perfect and easy modern way:
console.log('-------  element.scrollIntoView({behavior:"smooth"})  -------');
btnSrollTo.addEventListener("click", function (e) {
  //  dont need any calculation and coordinates.Just use scrollIntoView method
  section1.scrollIntoView({ behavior: "smooth" });
});

// //smooth scrolling -way - 1 work but old school way.
// console.log('-------  window.scrollTo()  -------');
// //  It is more complicated, you need to calculate the coordinate position of scrollTo by yourself：
// btnSrollTo.addEventListener('click', function (e) {
//   //0 no need to preventDefault since the button is NOT inside a form

//   //1 get the coordinates(坐标) of the element that we want to scroll to
//   const section1Coords = section1.getBoundingClientRect();

//   //2.1 show section1's coordinates
//   console.log('section1 coordinates/.getBoundingClientRect', section1Coords);

//   //2.2 show the btn(e) itself's coordinates
//   console.log(
//     'the btn(e) itselfs coordinates/.getBoundingClientRect()',
//     e.target.getBoundingClientRect()
//   );

//   //2.3 show current scroll's coordinates
//   //    The border of the top of the current viewpoint to the border of the top of the entire web page
//   console.log(
//     'current scroll(x/y)/window.scrollX',
//     window.scrollX,
//     window.scrollY
//   ); //same as below
//   console.log(
//     'current scroll(x/y)/window.pageXOffset',
//     window.pageXOffset,
//     window.pageYOffset
//   );

//   //3  current viewport's height/weight
//   console.log(
//     'height/width viewport: /document.documentElement.clientHeight',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//3.1  wrong:
// window.scrollTo(section1Coords.left, section1Coords.top);

//3.2  Success but no smooth scroll effect
// window.scrollTo(
//   section1Coords.left + window.pageXOffset,
//   section1Coords.top + window.pageYOffset
//   );

// 3.3  work perfectly but old school way:
// window.scrollTo({
//   left: section1Coords.left + window.pageXOffset,
//   top: section1Coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

console.log("=======  2. smooth scrolling for navigation links  =======");
console.log("-------  use  .forEach() + .scrollIntoView() -------");
// //Description:  use element.scrollIntoView({behavior:'smooth'}) method
// //           Disadvantages:
// //           1. Inefficient as it add exact the same function/eventHandler
// //              (use .forEach()) to multiple elements(child elements)
// //           2. Can NOT add event handler to elements that do NOT exist
// //              currentlt(such as wait for loading)

// //1. select navigation link elements
// //2. add eventlistener to each element
// //3. prevent default link direct to anchor
// //4. get id/anchors from attributes
// //5. select id-related DOM element
// //6. use element.scrollIntoView({behavir:'smooth'}) to implement smooth scroll effect

// document.querySelectorAll('.nav__link').forEach(function (navLink) {
//   navLink.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const idDomElement = document.querySelector(id);
//     idDomElement.scrollIntoView({ behavior: 'smooth' });
//   });
// });

console.log("-------  use delegation + .scrollIntoView()  -------");
//Description: add one big event handler function to the parent of all the
//             elements that we are interested in (instead of adding the same
//             event handler function to each child element one by one )
//steps:       1.add event listener to common parent element
//             2.determine what element originated the event(e.target)
//             3.using matching strategy to filter only the elements we interested in
//Advantages:  - can handle events on elements that DO NOT exist at the begining
//               by use event delegation

// step1
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  //step2
  console.log("e.target - event最初发生的地方:", e.target);
  //setp3
  if (e.target.classList.contains("nav__link")) {
    const id = document.querySelector(e.target.getAttribute("href"));
    id.scrollIntoView({ behavior: "smooth" });
  }
});
//errors happen when self coding:
//1 - note the .contains() requires the entire string to be exactly equal
//2 - e.target is not the three clicked links here, but the place we scroll to is the anchor inside

console.log("=======  5. Sticky navigation  =======");
console.log("-------  use coordinates: Old school way - cumberson  -------");
//scroll event should be avoided,since it fires all the time.NOT efficient
//scroll event is on the window object NOT on the element
//No event(e) object needed
const initialCoordsS1 = section1.getBoundingClientRect();
//cannot hard-code the position since its depending on the viewport
//so we need to calculate

window.addEventListener("scroll", function () {
  // //print the real-time scroll position
  // console.log(
  //   'window.scrollY:',
  //   window.scrollY,
  //   'window.scrollX:',
  //   window.scrollX
  // ); // fires all the time
  //When the current vertical coordinate of the scroll is greater than the initial top coordinate of the element (relatively speaking according to the viewpoet size)
  window.scrollY > initialCoordsS1.top
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
});
