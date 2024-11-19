"use strict";

console.log(document.querySelector(".message").textContent);

// DOM is an acronym for Document Object Model. It's a structured representation of HTML Docments and allows JS to acces HTML elements and styles to manipulate them.
// It has a tree like structure. First element is the html element and then it branches out to head and body. (adjacent elements or siblings)
// We keep on adding parents and children to each other.
// DOM methods are part of the WEB APIs, libraries available to use by browsers. Timers, fetch etc. are part of them

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent;
// document.querySelector(".score").textContent;

// For input elements we use the value not the text content

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "🛑 No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  }
});

//.....

// We can also manipulate css using the dom methods
// Value is always a string

document.querySelector("body").style.backgroundColor = "";
document.querySelector(".number").style.width = "";

// Resetting Game

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "";
});

// To select more than 1 element we use query selector all and it returns a node list that we can loop over


document.querySelectorAll;

// We can also manipulate classes by selecting element, storing it in a variable and then using classList and its corresposing methods (remove, add, exist)
// We can also use functions to manipulate calsses and call them on event listeners (DRY)

modal = document.querySelector('.modal')

const closeModal = function () {
modal.classList.add("")
}

// We can have information about events by passing them as function arguments to the listener

document.addEventListener("keydown", function(e) {
    console.log(e)
    if(e.key) {}
})


// We can select Ids using querSelector using the # instead of . or we can use the getElementById without the # (this one is supposed to slightly faster)

// State variables set to falsy or truthy are imporatant