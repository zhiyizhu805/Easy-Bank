"use strict";

///////////////////////////////////////

//Elements
// const btnSrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// Modal window
const openModal = function (e) {
  // prevent <a> default direct to the top of the page
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
// btnsOpenModal[i].addEventListener('click', openModal);
//        console.log(btnsOpenModal);  //NodeList(2)
//        NodeList NOT like array which have many methods
//        BUT NodeList DOES have .foreEach() methods
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////   1 & 2 included in scroll.js                ///// learn more button/smooth navigation
/////    3 included in delegation&closestMethod.js  ////  bulid a tabbed component
/////    4 include in delegation&bindMethod.js      ///// navigation fade hover effect
