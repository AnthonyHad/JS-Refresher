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
