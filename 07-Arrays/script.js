// Array methods

let arr = ["a", "b", "c", "d", "e"];

// SLICE

console.log(arr.slice(2)); // Returns a new array starting from index 2

console.log(arr.slice(2, 4)); // starts from index 2 ends with index 4-1
console.log(arr.slice(2, 4)); // starts from index 2 ends with index 4-1
console.log(arr.slice(-1));
console.log(arr.slice(1, -2)); // extracts everything except the last two

arr.slice(); // creates a shallow copy
// or
console.log(...arr);

// SPLICE
// mutates original array

console.log(arr.splice(2));
// Can be used to delete last element

arr.splice(-1);
arr.splice(1, 2); // the second element is literally how many elements we want to delete

// REVERSE

const arr2 = ["a", "b", "c", "d", "e"];

// Mutates the original array
console.log(arr2.reverse());

// CONCAT

const letters = arr.concat(arr2);
// or
[...arr, ...arr2];

// JOIN

letters.join(" - ");

// AT

const arr3 = [23, 11, 64];

arr3[0];
// is the same as
arr.at(0);

arr[arr.length - 1];
// is the same as
arr.slice(-1)[0];
// is the same as
arr.at(-1);

// Looping over Arrays

// forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
}
for (const [i, movement] of movements.entries()) {
}

// or
movements.forEach(function (movement, i, arr) {
  // will execute the callback function on each iteration
  // 0: function(200)
  // 1: function(450)
  // etc.
});

// Continue and break statements cannot work in a for of loop otherwise it's about preference.
// forEach can also be used on Maps and Sets

// Data Transformations

// MAP

// Takes an array, loops over each element with a callback function on each array and most importantly creates a new array

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (movement) {
  return movement * euroToUsd;
});

// or
const movementsUSDArrow = movements.map((mov, i, arr) => mov * euroToUsd);

console.log(movementsUSD); // new array

// FILTER

// Returns new array containing elements that pass the test condition

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// REDUCE

// Reduces all array elements to one single value

const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

// Get Maximum value

movements.reduce((acc, mov) => {
  if (acc > curr) return acc;
  else return mov;
}, movements[0]);

// Chaining methods

// You can use the arr that is passed in the callback to debug
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// FIND

// Retrieve an element of an array based on a condition
// Will not return a new array
// Will return the first truthy element

movements.find((mov) => mov < 0);

// can be used when iterating on array of objects

// FindIndex

// Returns the index

// Includes

// Tests for equality

// Some

// Checks for condition
const anyDeposits = movements.some((mov) => mov > 5000);

// Every

// Only returns true if every element passes the test

movements.every((mov) => mov > 0);

// Flat, FlatMap

const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];

arr4.flat(); // [1,2,3,4,5,6,7,8]

// Flat goes only one level deep of flattening

// We could use the depth
arr.flat(2);

// flatMap combines a flat and a map together

// Sorting

const owners = ["Antho", "Zeina", "Magda"];

owners.sort(); // Mutates the original array and does sorting based on strings !!

// Return < 0 A before B keep order
// Return > 0 B before A switch order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

/// or

movements.sort((a, b) => a - b);
movements.sort((a, b) => b - a);

// Creating arrays

const x = new Array(7); // Creates an empty array of 7 elements

// we can only call fill on it

x.fill(1); // array full of 1s

// Array.from

const y = Array.from({ length: 7 }, () => 1);
