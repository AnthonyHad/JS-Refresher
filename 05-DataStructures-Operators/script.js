"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Array Destructuring

const arr = [2, 3, 4];

const [x, y, z] = arr;

console.log(x, y, z);

//Array is not altered

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

// w/o destructuring
// const temp = main;
// main = secondary
// secondary = temp
// console.log(main, secondary)

[main, secondary] = [secondary, main];
// No temp variable needed

//Neste destructuring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;

// console.log(i, j);

const [i, , [j, k]] = nested;

console.log(i, j, k);

//  Default values

const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);

// Object Destructuring

const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

const { menu = [], starterMenu: starters = [] } = restaurant;

// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Adding ()
({ a, b } = obj);

// Nested Objects

const {
  fri: { open, close },
} = openingHours;

// Spread Operator

const test = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...test];

const newMenu = [...restaurant.mainMenu, "Gnocci"];

// Allows to create shallow copies

const mainMenu = [...restaurant.mainMenu];

const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Can be used on iterables: arrays, maps, sets, strings

const str = "anthony";
const letters = [...str, "", "H."];
console.log(letters);

// Rest Pattern
// Collects all elements after the initial ones.

const arrr = [1, 2, 3, 4, 5];

const [c, d, ...others] = arrr;

console.log(a, b, others);

// We cannot do this. There only needs to be one rest element
// const [pizza, risotto, ....otherFood, test] = ...

// Objects

const { sat, ...weekdays } = restaurant.openingHours;

// Functions

const add = function (...numbers) {
  console.log(numbers); // logs an array of all arguments input
};

// Logical operators

// They can use any data type, they can return any data type
// they can also be used for short circuit evaluation

// Short circuiting
// if first operand is truthy then the next operand will not be evaluated

// OR

console.log(3 || "Jonas");
console.log(" " || "Jonas");
console.log(true || 0);
console.log(undefined || null);

// AND

// Short circuits when the first result is falsy

0 && "Jonas"; // 0

// Nullish Coalescing Operator
0 || 10; // returns 10

0 ?? 10; // returns 0

// Logical Assignement Operators

// rest1.numGuest = rest1.numGuests || 10;
// rest2.numGuests = res2.numGuests || 10;

// OR assignement Operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Nullish assignement Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignement operator

rest1.owner &&= 10;
rest2.owner &&= 10;

// For Of Loop

const menuee = [];

for (const item of menuee) console.log(item);
for (const [i, el] of menuee.entries()) console.log(`${i + 1} ${el}`);

// Enhanced Object Literals

hours = {};

// {

// hours,}

// Can do the same with functions

// Optional Chaining

// restaurant.openingHours.mon?.open >> only if everything to the left exists.
// restaurant.openingHours?.mon?.open

// Optional chaining operator is used with nullish coalescent operator
