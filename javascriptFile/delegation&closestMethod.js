'use strict';

console.log('=======  3. delegation :bulid a tabbed component   =======');
//in this example,there is a <span> element inside the tab button element
//so if we still only use e.target ,when we click on the <span> area, No
//response will be shown. sicne <span> is the child element,while the bubbling
//is only for parent elements.
//Solution -> e.target.closest('.operations__tab')
//            when e.target is .operations__tab itself,the output will still be
//            .operations__tab. when e.target is child element <span> ,.closest()
//            will auto look up <span>'s parent elements to find the .operations__tab element

//Elements
const tabs = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content ');
const tabsContainer = document.querySelector('.operations__tab-container');

// //my original solution: NOT take the child element <span></span> into account
// tabsContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('operations__tab')) {
//     tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
//     e.target.classList.add('operations__tab--active');
//   }
// });

// //my second solution: use .closest() method go upwards to parent element
//   // solved the child element <span> no responding
//   // BUT error happens when click in the .operations__tab-container area
//   // since no parent element of .operations__tab-container is .operations__tab
//   // so NULL returned
// tabsContainer.addEventListener('click', function (e) {
//   //looking upwards to find .operations__tab
//   const newTarget = e.target.closest('.operations__tab');
//   if (newTarget.classList.contains('operations__tab')) {
//     tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
//     newTarget.classList.add('operations__tab--active');
//   }
// });

console.log('-------  delegation & .closest()  -------');
// //Jonas's solution:  1.use Guard clause : if(!null){return}
//                      5.data-tab="3" -> clicked.dataset.tab
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //1.Guard clause : if(!null){return}
  if (!clicked) return;
  else {
    //2.remove active tab
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    //3.Add active tab
    clicked.classList.add('operations__tab--active');
  }
  //4.remove active content
  tabContents.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );
  //5.add active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
