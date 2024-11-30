"use strict";

const bookings = [];

// Default values
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // numPassengers should be defined later
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");

// Passing arguments value vs reference

const flight = "LH234";

const antho = {
  name: "Antho Ha",
  passport: 23432432432,
};

const checkIn = function (flightNum, passenger) {
  //arguments contain copy of values passed to them
  flightNum = "LH999";
  passenger.name = "Mr" + passenger.name;
};

// In JS functions are first class citizens meaning that functions are values
// We can store them in variables, we can pass functions as arguments as well.
// There are also function methods such as bind.
// This allows us to write higher-order functions. A function that receives another function or returns one or both.

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Orginial String ${str}`);
  console.log(`Transformed String ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);

// JS uses callbacks all the time
// it makes it easy to split up the code
// it allows us to create levels of abstracations

// Fuctions calling functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey"); // because greet returns a function

greeterHey("Anthony"); // >> Hey Anthony

// or

greet("Hello")("Anthony");

// Arrow function

const greetArr = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

// Call and Apply

const middleEast = {
  airline: "Middle East Airline",
  iataCode: "MEA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = middleEast.book;

// book(23, "Anthony") // This will point to undefined as this is a regualar function call.

book.call(euroWings, 23, "Anthony"); // Sets the this keyword to eurowings

// Apply method takes in an array of data

const flightData = [583, "George Cooper"];
book.apply(euroWings, flightData);

// or and which is better

book.call(euroWings, ...flightData);

// Bind Method
// It returns a new function

const bookEW = book.bind(euroWings);
bookEW(23, "Steven Williams");

// IIFE

(function () {
  console.log("This will never run again");
})();

(() => console.log("This will never run again"))();

// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

booker();
booker();
// Calling booker again despite the fact that the execution context of securebooking is gone is possible because of closures
// A function has access to the variable env of the execution context where it was created
//  CLosure has priority over scope chain
// Remembers variables even though function has returned

console.dir(booker); // Can check closures here
