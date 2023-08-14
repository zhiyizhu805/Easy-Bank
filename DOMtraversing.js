// "use strict";

// const h1 = document.querySelector("h1");
// console.log("=======  Going downwards:selecting child  =======");
// console.log('-------  element.querySelector(".className")  -------');

// //use .querySelector() since its not only work in document, but also in elements
// //only .highlight elements that are the children of the h1 element will be selected
// console.log(h1.querySelectorAll(".highlight")); //NodeList
// console.log(h1.childNodes); //all types nodes in NodeList
// console.log(h1.children); //only elements themselves(direct children only) in HTMLCollection
// console.log(h1.firstElementChild); //the first element DOM
// h1.firstElementChild.style.color = "green";
// console.log(h1.lastElementChild);
// h1.lastElementChild.style.color = "yellow";

// console.log("======= Going upwards: selecting parents   =======");
// console.log(h1.parentNode); //direct parent
// console.log(h1.parentElement);
// console.log('-------  element.closest(".className")  -------');
// // element.closest() vs. element.querySelector():
// //    1 .closest() is the opposite of the .querySelector()
// //      element.closest() finds all the way upwards to the element's parents
// //      while element.querySelector() finds all the way downwards to the element's children
// //    2 .closest() is a selector, with scope, only looks for the specified className within element's parents
// //      e.g: h1.querySelector('.header') NOT gonna work, since .header element is parent NOT child
// //    3 .closest() if the selected className represents the DOM element itself, it will return itself
// console.log(h1.closest(".header"));
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--color-tertiary-darker)"; //return h1 itself

// console.log("=======  Going sideways : siblings  =======");
// //can only access an element's direct siblings: the previous and the next one
// console.log("-------  element siblings  -------");
// console.log(h1.previousElementSibling); //null since h1 is the first child
// console.log(h1.nextElementSibling);

// console.log("-------  Node siblings  -------");
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.childNodes);
// console.log("-------  trick to read all element siblings   -------");
// console.log(h1.parentElement.children); //HTMLCollection(4)
// // Application: how to work with all the sibling elements of one element:
// // How to uniformly operate on all siblings of an element:
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = "scale(0.5)";
//   }
// });
