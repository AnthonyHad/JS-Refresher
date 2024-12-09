// Synchronous code

// Most code is, it's executed line by line, each line waits for previous to finish.

// Async code

// Code is executed after a code that runs in the background finishes.
// Async code is non-blocking

// AJAX >> Async JS and XML that allows us to communicate with remote web servers.
// API >> application programming interface is a piece of software that can be used by another piece of software
// XML is not used anymore, we use JSON data format.

// Using XML requests and event listeners wait for load makes the code messy and hard to reason about

// The modern way to do things is to use the fetch API

const request = fetch("url"); // Returns a promise

// A promise is an bject that is used as a placeholder for the future result of an async function
// By using them we don't need to rely on events and callback functions
// We can chain promises and escape callback hell

// Lifecycle of a promise:
// Pending > Settled >> Fulfilled or Rejected

// const getCountry = function (country) {
//   fetch("url")
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

const getCountry = function (country) {
  fetch("url")
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountry("portugal");

// How can async code be executed in a non-blocking way if there is only one thread of execution in the engine

// It's because async tasks will run in the web API env of the browser.
// There is also a callback queu which registers and lines all the callback functions even from DOM
// Event loop is the orcherstration layer

// There is a microtask queue which takes in callbacks for promises and gives them promises.
// This micro task queue can block callbacks in the callback queue to execute

// It's best to use async and await

// This code still runs in the background
const whereAmI = async function name(country) {
  const res = await fetch("url");
  console.log(res);
};

// We can use promise.all  to send requests in parallel. It short circuits whenever when promise rejects
