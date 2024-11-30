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

/*---

### 1. **OR (`||`)**
- Returns the first **truthy** value or the last value if none are truthy.
- Example:
  ```javascript
  const a = 0 || "default";
  console.log(a); // Output: "default"
  ```

---

### 2. **Logical OR Assignment (`||=`)**
- Assigns a value only if the variable is **falsy** (e.g., `false`, `0`, `null`, `undefined`, `""`).
- Example:
  ```javascript
  let x = 0;
  x ||= 42; // Equivalent to: if (!x) x = 42;
  console.log(x); // Output: 42
  ```

---

### 3. **AND (`&&`)**
- Returns the first **falsy** value or the last value if all are truthy.
- Example:
  ```javascript
  const a = "hello" && 42;
  console.log(a); // Output: 42
  ```

---

### 4. **Logical AND Assignment (`&&=`)**
- Assigns a value only if the variable is **truthy**.
- Example:
  ```javascript
  let y = "hello";
  y &&= "world"; // Equivalent to: if (y) y = "world";
  console.log(y); // Output: "world"

  let z = 0;
  z &&= 10; // No assignment because z is falsy
  console.log(z); // Output: 0
  ```

---

### 5. **Nullish Coalescing (`??`)**
- Returns the first value that is **not null or undefined**.
- Example:
  ```javascript
  const a = null ?? "default";
  console.log(a); // Output: "default"

  const b = 0 ?? "default";
  console.log(b); // Output: 0 (since 0 is not null or undefined)
  ```

---

### 6. **Nullish Coalescing Assignment (`??=`)**
- Assigns a value only if the variable is `null` or `undefined`.
- Example:
  ```javascript
  let x = null;
  x ??= 42; // Equivalent to: if (x === null || x === undefined) x = 42;
  console.log(x); // Output: 42

  let y = 0;
  y ??= 10; // No assignment because y is not null or undefined
  console.log(y); // Output: 0
  ```

---

### Comparison Table

| **Operator**      | **Description**                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------|
| `||`              | Returns the first truthy value or the last value if none are truthy.                                 |
| `||=`             | Assigns a value if the variable is falsy.                                                            |
| `&&`              | Returns the first falsy value or the last value if all are truthy.                                   |
| `&&=`             | Assigns a value if the variable is truthy.                                                           |
| `??`              | Returns the first value that is not null or undefined.                                               |
| `??=`             | Assigns a value if the variable is null or undefined.                                                |

---

### Key Takeaways
1. Use `||=` to set defaults for falsy values.
2. Use `&&=` to conditionally assign values for truthy variables.
3. Use `??=` to handle cases where `null` or `undefined` needs a default value (ignores `0` or `""`).

Let me know if you'd like further clarification or examples! */

// Looping over Objects

// Over property names ie keys

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Values
const values = Object.values(openingHours);

// Entries (keys + values)

const entries = Object.entries(openingHours);
//array of key and values

for (const [key, { open, close }] of entries) {
}

// Sets

// Is a collection of unique values and order of elements is not relevant, there are no indexes

const ordersSet = new Set(["pasta", "pizza", "Risotto", "pizza"]);

console.log(ordersSet); // All duplicates will be gone.

console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.add("Garlic Bread"));
orderSet.delete("Risotto");

// There is no need for getting values out of a set, you can't

for (const order of ordersSet) console.log(order);

// You can create an array from sets using the spread operator
const staff = [...new Set(staff)];

// Maps

// it's a data structure we can use to map values to keys.
// Keys can be any types compared to Objects which are strings.

const rest = new Map();

rest.set("name", "Classico Italiano");
rest
  .set(1, "Firenze Italy")
  .set(true, "we are open")
  .set(false, "we are closed");

rest.has("categories");
rest.delete(1);
rest.size;
rest.clear(); // removes all elements from Map

rest.set([1, 3, 4], "Test");

// It can also be used on dom elements

// Iterating on  Maps
const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JS"],
  [true, "Correct"],
]);

// Converting from Obejects to maps is easy

// Maps are also iterables so we can loop over them.

for (const [key, value] of question) {
  //....
}

// Convert map to array
console.log([...question]);

// JS has other built in data structures such as WeakMap WeakSet
// But also has non-built in ones such as Stacks, queues, LinkedLists, trees, hash tables etc.

// Strings

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // A

airline.length;
"ABC".length;

airline.indexOf("r");
airline.lastIndexOfindexOf("r");
airline.lastIndexOfindexOf("Portugal");

airline.slice(4); // 4 is the position at which the extraction will start. The result is substring, it will not mutate the original one.
airline.slice(4, 7); // End value is not included in the return value.

airline.slice(0, indexOf(" "));
airline.slice(0, indexOf(" ") + 1);
airline.slice(-2);

// JS turns strings into objects when method are being called on them.

airline.toLowerCase();
airline.toUpperCase();
airline.trim();

const price = "288.87$";
price.replace("$", "%");

plane.includes("A320"); // returns boolean
plane.startsWith("Airb");
plane.endsWith("Airb");

"a+very+nice+string".split("+"); // returns an array with elements split at the +

const [firstName, lastName] = "Anthony Hadz".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");

console.log("Anthony".padStart(25, "+"));
console.log("Anthony".padEnd(25, "+"));

const message1 = "hello world";

message1.repeat(4);
