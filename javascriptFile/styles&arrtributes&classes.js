"use strict";
console.log("=======  styles  =======");
console.log("-------  inline styles  -------");
//change/add style - inline styles
const message2 = document.querySelector(".cookie-message");
message2.style.backgroundColor = "#37383d";
message2.style.width = "120%";

console.log("-------  read element styles  -------");
console.log("*** element.style Only read inline styles***");
//message2.style can only read the inline style property
console.log(message2.style); //0:"background-color",1:"width"
console.log(message2.style.display); //outPut is empty

console.log("*** getComputedStyle(element) read css file styles ***");
//getComputedStyle(element) can get all styles related to the element
//even you do not declare it yourself ,including the computed styles
console.log(getComputedStyle(message2));

// output all css styles related to message2 in an object
console.log(getComputedStyle(message2).color); //rgb(187, 187, 187)

//can use the styleName as the propertyName get specific css style data
console.log(getComputedStyle(message2).height); //49px
// message2.style.height =
//   Number.parseFloat(getComputedStyle(message2).height, 10) + 30 + 'px';
// message2.style.height = '100px';
console.log(getComputedStyle(message2).height); //still 49px
console.log(message2.style.height); //79px

console.log("***  .setProperty(CSS variable, CSS property)  ***");
// In CSS, the :root selector represents the root element <html> of the document and is used to set global CSS variables.
// In JavaScript, :root is not a special keyword or selector, but can be used
// document.documentElement to represent the root element of the document, used to obtain and manipulate the properties and styles of the root element.
// document.documentElement.style.setProperty('--color-primary', 'green');

console.log("=======  attributes  =======");
const logo = document.querySelector(".nav__logo");
console.log("-------  get standard attributes  -------");
//syntax:: element.attributeName
//get default properties/attributes
console.log(logo.alt); //Bankist logo
console.log(logo.src); //return absolute URL :http://127.0.0.1:5500/...
console.log(logo.designer); //undefined
//since .designer is NOT a standard property that is expected to be on images

console.log("-------  get non-standard attributes  -------");
//syntax: element.getAttribute(attributeName)
console.log(logo.getAttribute("designer")); //cora

//note link - href and img - src,both have relative and absolute URL
console.log(logo.src); //return absolute URL :http://127.0.0.1:5500/...
console.log(logo.getAttribute("src")); //return relative URL:img/logo.png
const link = document.querySelector(".nav__link--btn");
console.log(link.href); //return abosolute URL: http://127.0.0.1:5....
console.log(link.getAttribute("href")); //return relative URL: #

console.log("-------  change the attribute  -------");
logo.alt = "a beautiful logo"; //work
logo.designer = "zhuzhu"; //not work

console.log("-------  add attributes  -------");
logo.setAttribute("designer", "zhuzhu"); //work
logo.setAttribute("company", "Bankist"); //work

console.log("-------  data attributes  -------");
//a special type attribute
//   1)  has to starts with word data
//   2）in js: need to turn 'version-number' into camelCase
//   3) always stored in the dataset object
//its useful when we need to store data in user interface/HTML
//in HTML:data-version-number="3"
console.log(logo.dataset.versionNumber); //3

console.log("-------  class  -------");
logo.classList.add("className");
logo.classList.add("className1", "className2"); //can add multiple
logo.classList.remove("className");
logo.classList.toggle("className");
logo.classList.contains("className");

//Don't use
// logo.className = 'overWriteEveryOriginalClasses';
