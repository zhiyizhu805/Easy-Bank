// "use strict";

// console.log("=======  DOM content loaded  =======");
// //partially loaded(not wait for images and other external resources to load)
// //Only HTML/DOM loaded
// //this event is fired by the document as soon as the HTML is completely parsed,
// //which means the HTML has been downloaded and been converted to the DOM tree.
// //also,all scriptes must be downloaded and executed before the DOM content loaded
// //event can happen
// //This event does not wait for images and other external resources to load.
// //So just HTML and Javascript need to be loaded

// //load javascript file of a script tag

// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log("HTML parsed and DOM tree built");
//   //this here ,we can now execute code that should only be executed after the DOM is available
//   //In fact,we want all our code only to be executed after the DOM is ready.BUT we dont need to
//   //wrap all our entire code to an DOMContentLoaded eventListener?
//   //- that is because we have the script tag which is the last thing of the HTML.So basically the
//   //browser will only find our script when the rest of HTML is already parsed.
//   //- so when we have the script tag here at the end of the HTML, then we dont need to listen to
//   //the DOMContentLoaded event
//   console.log(
//     "inside DOMContentLoaded document.readyState:",
//     document.readyState
//   ); //interactive
// });
// console.log("=======  javascript from JQuery:document.ready =======");
// //if you come from vanila javascript from JQuery,then you probably used to wrap all your code into a
// //document ready function,this is equivalent to DOMContentLoaded in vanila javascript.
// //example:
// // document.ready
// //!! No such thing is necessay in regular javascript

// console.log("=======  load event  =======");
// //Fully loaded!
// //load event is fired by the window,as soon as not only the HTML is parsed but also all the images
// //and external resourses like CSS files are also loaded.
// //SO basically,when the complete page has finished loading is when this event gets fired.

// window.addEventListener("load", function (e) {
//   console.log("Page fully loaded", e);
//   console.log("inside load event document.readyState:", document.readyState); //complete
// });

// console.log("=======  beforeunload event  =======");
// // //this event is created immediatelt before a user is about to leave a page
// // //dont abuse it,usually only use it when try to exit during filling a form
// // //or writing a blog post or something like that
// // window.addEventListener('beforeunload', function (e) {
// //   //1.in some browser we need to call prevent default here.In chrome is not necessary.
// //   e.preventDefault();
// //   console.log(e);
// //   //2. set return value on the event to empty string
// //   e.returnValue = '';
// // });

// console.log("=======  document.readyState  =======");
// // This attribute can be used to check the state of the page when loading, it will show 'interactive' when loading, and 'complete' when finished
// document.onreadystatechange = function () {
//   if (document.readyState === "loading") {
//     // Code executed when the HTML document starts loading
//     const loadingElement = document.getElementById("loading");
//     loadingElement.style.display = "block";
//   } else if (document.readyState === "complete") {
//     // Code executed when the HTML document has finished loading
//     const loadingElement = document.getElementById("loading");
//     loadingElement.style.display = "none";
//   }
// };

// console.log("document.readyState outside:", document.readyState); //interatctive
