"use strict";

/* 
JavaScript Notes and Examples 
===============================
This file includes various examples and concepts in JavaScript,
ranging from destructuring to logical operators and advanced topics.
*/

// --- Example Data for Exercises ---

// Data for later exercises
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data for section examples
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }, // Open 24 hours
  },
};

// --- Array Destructuring ---
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z); // Array is not altered

// Destructuring and switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values in destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// --- Object Destructuring ---
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
const { menue = [], starterMenu: starters = [] } = restaurant;

// Mutating variables during destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// Nested object destructuring
const {
  fri: { open, close },
} = restaurant.openingHours;

// --- Spread Operator ---
const test = [7, 8, 9];
const newArr = [1, 2, ...test];
console.log(newArr);

// Spread operator for shallow copies
const mainMenuCopy = [...restaurant.mainMenu];

// Joining arrays with spread
const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Spread operator with strings
const str = "Anthony";
const letters = [...str, " ", "H."];
console.log(letters);

// --- Rest Pattern ---
const arrr = [1, 2, 3, 4, 5];
const [c, d, ...others] = arrr;
console.log(c, d, others); // Cannot have more than one rest element

// Rest with objects
const { sat, ...weekdays } = restaurant.openingHours;

// Functions with rest parameters
const add = function (...numbers) {
  console.log(numbers); // Logs an array of all arguments
};

// --- Logical Operators ---
console.log(3 || "Jonas"); // OR short-circuiting
console.log(0 && "Jonas"); // AND short-circuiting
console.log(null ?? "Default"); // Nullish coalescing

// Logical assignment operators
rest1.numGuests ||= 10; // OR assignment
rest2.numGuests ??= 10; // Nullish assignment
rest1.owner &&= "Removed"; // AND assignment

// --- Loops ---
// For-of loop with entries
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// --- Optional Chaining ---
console.log(restaurant.openingHours.mon?.open); // Only if `mon` exists

// --- Sets ---
const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pizza"]);
console.log(ordersSet); // Unique values only
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));

// Convert sets to arrays
const staffUnique = [...new Set(["Waiter", "Chef", "Waiter"])];

// --- Maps ---
const rest = new Map();
rest
  .set("name", "Classico Italiano")
  .set(1, "Firenze, Italy")
  .set(true, "We are open");

// Iterating over maps
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  [true, "Correct!"],
]);
for (const [key, value] of question) {
  console.log(key, value);
}

// --- Strings ---
const airline = "TAP Air Portugal";
console.log(airline.slice(4)); // Extract substring
console.log(airline.toLowerCase());
console.log(airline.replace("Air", "Sky"));

// String splitting and joining
const [firstName, lastName] = "Anthony Hadz".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// Padding and repeating strings
console.log("Anthony".padStart(20, "+"));
console.log("Anthony".padEnd(20, "+"));
console.log("hello".repeat(3));
