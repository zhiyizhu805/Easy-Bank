'use strict';
const section2 = document.querySelector('#section--2');
const headerSection = document.querySelector('header');
console.log(
  '======= new IntersectionObserver():observe section2 intersect with the viewport or NOT  ======='
);
// //Advantage : the event will only be trigged in the situdation we observer/intersted in.

// //3. call-back
// //tehe call-back function will be called each time that the observed/target
// //element, is intersecting the root element at the threshold that we defined
// //first argument -> entries ,entries is the array of threshold
// //second argument => observer with calling new IntersectionObserver()
// const obsCallBack = function (entries, obeserber) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// //4. options
// //first property ->  root : element/null (the viewport)
// //      the root element is the element we want the target element to intersect
// //second property -> threshold(临界点):percentage (the percentage of intersection
// //                               at which the observer call-back will be called)
// //                   - threshold can be multiple WITH and array
// //                   - 0  means the call-back will be triggerd each time our target
// //                   moves completely out of the view/root elemnt（isIntersecting：false）,
// //                   and also as soon as it enters the view（isIntersecting：true）
// const obsOptions = {
//   root: null, //null means the viewport
//  //threshold: 0.1, //section1 intersects 10% of the current viewport
//   threshold: [0],
// };

// //1. create an observer WITH calling this function
// const observer = new IntersectionObserver(obsCallBack, obsOptions);

// //2. use the obeserber to observer a certain target
// observer.observe(section2);

console.log('-------  application:create sticky navigation  -------');
const nav2 = document.querySelector('.nav');
//calculate nav container 's height dynamically
const nav2Height = nav2.getBoundingClientRect().height;
//3. call-back
const obsCallBack2 = function (entries) {
  entries.forEach(entry => {
    // console.log(entry);
    if (!entry.isIntersecting) {
      nav2.classList.add('sticky');
    } else {
      nav2.classList.remove('sticky');
    }
  });
};

//4. options
const obsOptions2 = {
  root: null,
  threshold: [0],
  //// rootMargin:'90px' //means 90px will be applied outside of the target element(header here)
  // rootMargin: '-90px', //means 90px will be applied(deduct) inside of the target element(header here)
  rootMargin: `-${nav2Height}px`,
};

//1. create an observer WITH calling this function
const observer = new IntersectionObserver(obsCallBack2, obsOptions2);

//2. use the obeserber to observer a certain target
observer.observe(headerSection);

console.log('-------  reveal elements on scroll  -------');
const hiddenSections = document.querySelectorAll('.section');
// console.log('*** my version ***');
// //my work:  work but can be imporved
// hiddenSections.forEach(section => section.classList.add('section--hidden'));
// const revealSections = function () {
//   hiddenSections.forEach(function (section) {
//     //3. call-back
//     const obsCallBackSections = function (entries, observerScroll) {
//       entries.forEach(entry => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//           section.classList.remove('section--hidden');
//         }
//       });
//     };
//     //4.observe options
//     const obsOptionsSections = {
//       root: null,
//       threshold: [0.25],
//     };
//     //1. create observer
//     const observerScroll = new IntersectionObserver(
//       obsCallBackSections,
//       obsOptionsSections
//     );
//     //2. use the observer to observe a cetain element
//     // observerScroll.observe(hiddenSections);
//     observerScroll.observe(section);
//   });
// };
// revealSections();

console.log('*** revised my version ***');
//Improve suggestions:
//use target property : entry.target
//do guard clause
//unobserve it after reveal: observer.unobserve(entry.target)
//destruct entries and get the first argument(only have one):const [entry] = entries;
//only the sections(all elements) need to be looped over

//3.call-back
const revealSections = function (entries) {
  const [entry] = entries;
  // console.log(entry.target);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};

//1.create observer
const observer3 = new IntersectionObserver(revealSections, {
  root: null,
  threshold: [0.25],
});
console.log(hiddenSections);
//2.use observer to observe elements
hiddenSections.forEach(section => {
  section.classList.add('section--hidden');
  observer3.observe(section);
});

console.log('-------  lazy loadig images  -------');
//great for performance!!

// console.log('*** my first version ***');
// const lazyImgs = document.querySelectorAll('.features__img');
// console.log(lazyImgs);
// //3 call back function
// const replaceImgs = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;
//   entry.target.classList.remove('lazy-img');
// };
// //1 create observer
// const obeserver4 = new IntersectionObserver(replaceImgs, {
//   root: null,
//   threshold: [0.1],
// });
// //2 use observer to observe element(forEach)
// lazyImgs.forEach(img => {
//   obeserver4.observe(img);
// });

console.log('-------  revised my version   -------');
//improvements
//1. use data-src attribute to select data: img[data-src]
//2. add eventListener to load event,only remove the blur filter when done loading
//3. unobserve the entry.target!!!
const lazyImgs = document.querySelectorAll('img[data-src]');
console.log(lazyImgs);

//3.call back
const replaceImgs = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  //only remove blur filter when loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  //!!! unobserve
  obeserver5.unobserve(entry.target);
};
// 1.create observer
const obeserver5 = new IntersectionObserver(replaceImgs, {
  root: null,
  threshold: 0,
});
// 2.use observer to observe element
lazyImgs.forEach(img => {
  obeserver5.observe(img);
});
