"use strict";

// Functions

function logger() {
  console.log("My name is Joas");
}

// calling / running / invoking a function
logger();

// apples and oranges are the parameters
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// 3 and 4 are the arguments
const appleJuice = fruitProcessor(3, 4);

console.log(appleJuice);
// or
console.log(fruitProcessor(3, 4));

// Function declarations vs Function expressions

// Declaration > can be called before they are defined in the code (hoisting)
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1995);

// Expression (produces values)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

// Arrow Functions ( they don't get this keyword)

const calcAge3 = (birthYear) => 2037 - birthYear; // it's an expression

const age3 = calcAge3(1995);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

//Data Structures

//Arrays

const friends = ["Carl", "Marc", "karim"];

const years = new Array(1991, 1984, 2008, 2020);
// To access specifc items in Array
friends[0];
friends[1];

console.log(friends.length);
console.log(friends[friends.length - 1]);

// Replacing elements
friends[2] = "Jay";

// We can define Arrays as const and mutate it because it's not a primitive value. ( It's how JS works and stores things in Memory)

// What we can't do
// friends = ["anthony", "jo"];

const firstName = "Anthony";
// Can take in expressions
const jonas = [firstName, "Hadwan", 2037 - 1998, friends];

// Array methods

// Push > Adds an element to the end of the array

const newLength = friends.push("Antho");

// Push is function which returns the length of array
console.log(newLength);

// Unshift > Adds elements to the beginning of the array
friends.unshift("John");
// It's also a function which returns the length of the array

// Pop > removes last element
friends.pop();
// it returns the element removed

// Shift > Removes first element from array
friends.shift();
// Returns the element removed

// indexOf > returns index of the element

friends.indexOf("Anthony");

// includes > returns T/F if an element is in the array or not

friends.includes("Anthony");
// It does not do type coercion

// Objects
// Usually used with unstructured data
// We define Key value pairs

// Object literal syntax
const anthony = {
  firstName: "Anthony",
  lastName: "Hads",
  age: 1233 - 123,
  friends: ["Carl", "Marc"],
  hasDriversLicens: true,
  // Takes in function expressions
  // calcAge4: function test(test) {
  //   console.log(test);
  // },

  // calcAge4: function () {
  //   return 2037 - this.age;
  // },

  calcAge4: function () {
    // To create ae new dynamic property
    this.age = 2037 - this.birthYear;

    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge4()} year old ${jonas.job} ${
      this.hasDriversLicens ? "a" : "no"
    } driver's license.
    }`;
  },
};

// This object has 4 properties

//Dot notation
console.log(anthony.lastName);
// we have to use the real property name with it
// Bracket Notation
console.log(jonas["lastName"]);
// With the bracket notation we can add expressions inside
const nameKey = "Name";
console.log(anthony["first" + nameKey]);

// Adding properties to the object
anthony.location = "Paris";
anthony["social"] = "twitter";

// Object methods
console.log(anthony.calcAge4(1));
console.log(anthony["calcAge4"](1991));

// Control Structures ( if and loops)

// For loop > keeps runnning while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifting weights rep 1 ! ");
}

// Looping over ararys
const anthonyArray = ["Anthony", "hads", 1995, "PM"];

// const types = [];
// for (let i = 0; i < anthonyArray.length; i++) {
//   // Reading elements
//   console.log(anthonyArray[i]);
//   // Filling array with types
//   //types[i] = typeof anthonyArray[i];
//   types.push(typeof anthonyArray[i]);
// }

// continue and break

const types = [];
for (let i = 0; i < anthonyArray.length; i++) {
  // Reading elements
  console.log(anthonyArray[i]);
  // Filling array with types
  //types[i] = typeof anthonyArray[i];
  if (typeof anthonyArray[i] !== "string") continue;
  if (typeof anthonyArray[i] !== "string") break;
  types.push(typeof anthonyArray[i]);
}

//looping backwards

for (let i = anthonyArray.length - 1; i >= -0; i--) {}

// While loop
let rep = 1;
while (rep <= 10) {
  console.log("hola");
  rep++;
}
// it's more flexible than a for loop as it doesn't need a counter all the time
