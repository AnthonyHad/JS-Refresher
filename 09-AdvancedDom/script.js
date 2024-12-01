// DOM is the interface between JS code and the browser

// It allows us to make JS interact with the browser. We can write JS to modify and delete HTML elements, set styles, classes and attributes

// Nodes are represented by JS objects
// Node types can be: element, text, comment, document
// element has children as HTML elements

// They all inherit from their parents methods.

// Event target is the parent of Node and Window and usually gets the addEventListener method and removeEventListener

// TL;DR
// EventTarget >> Node and Window >> Element, text, comment, Document

// Selecting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");

const allSections = document.querySelectorAll(".section");

document.getElementById("section--1");

const allButtons = document.getElementsByTagName("button");
// Returns an HTML collection not node list

console.log(document.getElementsByClassName("btn"));

// Creating and Inserting elements

// .insertAdjacentHTML

const message = document.createElement("div"); // returns a dom element
// We have to manually insert it on the page.

message.classList.add("cookie-message");
message.textContent = "We use cookies for....";
message.innerHTML;

// Add to the header
header.prepend(message); // added as the first
header.append(message); // added at the end

// header.append(message.cloneNode(true))

header.before(message); // inserts element as a sibling before the header
header.after(message); // inserts element as a sibling after the header

// Deleting elements

document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// Styling

message.style.backgroundColor = "#53453";

message.style.width = "120%";

console.log(message.style.height);

// To get the style

getComputedStyle(message).color; // will contain all properties
getComputedStyle(message).height; // will contain all properties

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes

const logo = document.querySelector(".nav__logo");

// Reading standard attributes
logo.alt;
logo.src;

// Non-standard ones

logo.designer; // Won't work

logo.getAttribute("designer");

logo.setAttribute("company", "Bankist");

const link = document.querySelector(".twitter-link");

link.href; // returns absolute URL
link.getAttribute("href"); // return relative URL

// Data attributes

// attributes that start with data

logo.dataset.versionNumber; // attribute is data-version-number

// Classes

logo.classList.add();
logo.classList.remove();
logo.classList.togge();
logo.classList.contains();

// Types of events and event handlers

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", function (e) {});

// or use the onEvent property
h1.onmouseenter = function (e) {};

setTimeout(() => h1.removeEventListener("mouseenter", function (e) {}));

// Bubbling and Capturing events

// They have a capturing phase and a bubbling phase
// If a click happens on a link
// The event is generated at the root of the dom tree ie the document
// It will travel until it reaches the target
// Target phase starts  and calls the function
// After reaching the target it goes back to the document bubbling up.

// It's as if the event happened on the parent elements as well.

// We can stop propagation of events. It's not a good idea in practice

// Event Delegation

// Add event listener to common parent element
// Determine what element originated the event (child)

// DOM traversing

const h1 = document.querySelector("h1");

h1.querySelectorAll(".highlight");
h1.childNodes;
h1.children;
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "white";

h1.parentNode;
h1.parentElement;

h1.closest(".header").style.backgroundColor = "var()";

// Going sideways: siblings

h1.previousElementSibling;
h1.nextElementSibling;

h1.previousSibling;
h1.nextSibling;

h1.parentElement.children;

// Bind can be used to pass arguemnts inside a handler function

// Lifecycle DOM Events

// DOM Content Loaded

document.addEventListener("DOMContentLoaded", function (e) {
  // Listens to HTML and DOM tree being built
});

// if the script tag is at the end of the html file then we don't need to listen for DOM being built

// Load event

window.addEventListener("load", function (e) {
  //
});

window.addEventListener("beforeunload", function (e) {
  // When a user closes the tab
});

// if the script is added to the head then using async or defer makes more sense
// Defer is the best
// Async for third parties
