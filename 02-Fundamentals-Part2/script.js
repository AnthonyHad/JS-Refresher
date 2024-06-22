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
