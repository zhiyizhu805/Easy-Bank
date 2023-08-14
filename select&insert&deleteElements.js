"use strict";

console.log("=======  select elements  =======");
console.log("-------  select special HTML elements  -------");
console.log(document);
// document is an Object.
//document is a built-in object provided by the browser. It is part of the API provided by the browser,
//Used to manipulate the Document Object Model (DOM) in web pages.
//In DOM (Document Object Model), document is the root node object representing the entire HTML or XML document.
// It is the main entry point for accessing and manipulating documents in web pages through the API provided by JavaScript.
//The document object provides many properties and methods for obtaining and manipulating elements, text and other content in the document.
//for special HTML elements,we don't need to write selector
//select the entire HTML elements
console.log(document.documentElement); // Output: the entire HTML
//select the head element
console.log(document.head); //<head> ... </head>
//select the body element
console.log(document.body); //<body> ... </body>

console.log(
  "-------  select all types HTML element(including Non-special)  -------"
);
//the most often used: .querySelector()
console.log(document.querySelector("head")); //by tag name
console.log(document.querySelector("header")); //by tag name
console.log(document.querySelector("#section--1")); //by id with #
//return the first matched element
document.querySelector(".header"); //by class name with .
//return the exact one(id) element
console.log(document.getElementById("section--1")); //by id with NO #

console.log("***  return NodeList  ***");
//return all matched elements as a NodeList
//NodeList -> NOT change/react according to DOM changes
const allSections = document.querySelectorAll(".section"); //by class name with .
console.log(allSections); //NodeList(4)

console.log("***  return HTML Colletion  ***");
//return all matched elements as a HTML Collection
//HTML Collection-> LIVE/auto change/react according to DOM changes
const allButtons = document.getElementsByTagName("button"); //by tag name
console.log(allButtons); //HTMLCollection(9)
const buttons = document.getElementsByClassName("btn"); //by className with No .
console.log(buttons); //HTMLCollection(5) also returns HTML collection

console.log("=======  create & edit & insert elements  =======");
console.log("-------  create a DOM element and store to a variable -------");
//create a UNIQUE live DOM element
const message = document.createElement("div");
//this live DOM element is nowhere found in our DOM or webpage,
//its just simply a DOM object we can use to do something on it
console.log(message); //<div></div>
console.log("-------  edit the DOM element  -------");
message.classList.add("cookie-message");

//only add textContent use .textContent
// message.textContent =
//   'We use cookied for improved functionality and analystics';

//if want to include HTML tag too, use .innerHTML
message.innerHTML = `We use cookied for improved functionality and analystics
   <button class="btn btn--close-cookie">Got it!</button>`;

console.log("=======  insert the element to the DOM  =======");
console.log("***  .insertAdjacentHTML()  ***");
//please review this method
// element1.insertAdjacentHTML('beforebegin',element2)
// element1.insertAdjacentHTML('afterbegin',element2)
// element1.insertAdjacentHTML('beforeend',element2)
// element1.insertAdjacentHTML('afterend',element2)

console.log("***  .prepend() & .append()  ***");
const header = document.querySelector(".header");
//element1.prepend(element2) : .
//          .prepend() method will add element2 as the firstchild of element1
header.prepend(message);
//element1.append(element2) :
//          .append() method will add element2 as the last child of element1
header.append(message);
//will auto remove the top one
console.log("***   .cloneNode(true)  ***");
//the live element cannot appear in more than one places at the same time
//Unless clone it : element1.append(element2.cloneNode(true))
// header.prepend(message.cloneNode(true));

console.log("***   .before() & .after()  ***");
//element1.before(element2) means adding element2 outside before the whole element1
// header.before(message);
//element1.after(element2) means adding element2 outside after the whole element1
// header.after(message);

console.log("=======  delete the element  =======");
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.remove());
//message here is the variable in which we stored the live DOM in
//so no need to select the element again,just use it

// //old way : DOM traversing: .parentElement.removeChild())
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', () => message.parentElement.removeChild(message));
