console.log('=======  event propagation pratice =======');
// //1) <!-- <a class="nav__link" href="#">Features</a> -->
// //rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link,e.target:', e.target); //<a>...</a>  target phase
//   console.log('link,e.currentTarget:', e.currentTarget); //equal to this :<a>...</a>   bubbling phase

//   console.log('↓↓↓↓  stop propagation ↓↓↓↓');
//   //stop propagation : can be use to debug in large multiple eventlistener application
//   //the result of stop propagation: e.target and e.currentTarget will be all itself
//   //NO bubbling up.
//   //   e.stopPropagation();
//   console.log('↑↑↑↑ end stop propagation  ↑↑↑↑');
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container,e.target:', e.target); //<a>...</a>
//   console.log('container,e.currentTarget:', e.currentTarget); //equal to this :<ul>...</ul>
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav,e.target:', e.target); //<a>...</a>
//   console.log('nav,e.currentTarget:', e.currentTarget); //equal to this :<nav>...</nav>
// });

// // //set to listening to capturing eventing and stop listening bubbling events
// // document.querySelector('.nav').addEventListener(
// //   'click',
// //   function (e) {
// //     this.style.backgroundColor = randomColor();
// //     console.log('nav:', e.target); //<a>...</a>
// //     console.log(e.currentTarget); //equal to this :<nav>...</nav>
// //   },
// //   true
// // );
