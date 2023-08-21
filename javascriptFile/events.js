'use strict';

// console.log('=======  type of events and event handlers  =======');

// const h1 = document.querySelector('h1');

// console.log('-------  mouseenter  -------');

// console.log('*** way1 ***');
// // way 1:   add event listener  (Use this one)
// h1.addEventListener('mouseenter', function (e) {
//   alert('You have read the header!');
// });
// //advantage1: can attach many event listener to the same event
// //            with changing the function.
// //            But if we attach the second function to onevent propery,
// //            the first one will be overwrite
// //advantage2: we can remove the event listener if we dont need it anymore

// console.log('*** way2 ***');
// // way 2 :  old-school
// // for each event ,there is a onevent property like below
// h1.onmouseenter = function (e) {
//   alert('You have read the header!');
// };

// console.log('*** way3 ***');
// //way 3 directly write in HTML (DO NOT USE)
// // <header class="header" onclick="alert('HTML ALERT')">
// //check in HTML file

// console.log('=======  remove event handler  =======');
// //Remove a event handler
// //syntax: element.removeEventListener('eventName',functionName)
// //1) export function to a named function
// const alertH1 = function (e) {
//   alert('You have read the header!');
//   //2.1) remove inside the function
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// //2.2 set a timer to remove
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// //check mdn for other event
// //keyboard mouse resizing-page ...
