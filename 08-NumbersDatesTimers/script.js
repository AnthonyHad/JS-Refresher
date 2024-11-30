// All numbers in JS are represented as decimal numbers

23 === 23.0; // Returns true

console.log(0.1 + 0.2 === 0.3); // results in weird results and will return false

Number("23");
// or
+"23";

Number.parseInt("30px", 10); // returns 30 ; 10 is the base
Number.parseFloat("2.5rem", 10); // returns 2.5 ; 10 is the base
Number.isNaN(20); // returns 2.5 ; 10 is the base
Number.isFinite(20); // returns 2.5 ; 10 is the base
Number.isInteger(20); // returns 2.5 ; 10 is the base

// Math

Math.sqrt(25);
//or

25 ** (1 / 2);
8 ** (1 / 3);

Math.max(5, 18, 11, 2);
Math.min(5, 18, 11, 2);

Math.PI * Number.parseFloat("10px");

Math.trunc(Math.random() * 6) + 1;

Math.round(23.3);
Math.ceil(23.3);

Math.floor(23.3);

Math.trunc(-23.3);
Math.floor(-23.3);

(2.7).toFixed(3);

// Remainder Operator

5 % 2;

// Numeric Separtors

const diameter = 287_460_000_000;

console.log(diameter); // 287460000000

// BigInt

3214234123412341234123412123412341234123n;

//or

BigInt(2134123412341234);

// Dates

const now = new Date();

new Date(0); // Unix date

// Convert from days to ms to get timestamp
new Date(3 * 24 * 60 * 60 * 1000); // 3 days after Unix

const future = new Date(2037, 10, 19, 15, 23);

future.getFullYear();
future.getMonth();
future.getDate();
future.getDay();
// hours, mins, secs...

future.toISOString();

// we can perform operations on dates

// SetTimeout, SetInterval

setTimeout(
  (ing1, ing2) => console.log("Here is your pizza with.."),
  3000,
  "olives",
  "spinach"
);

// execution continues due to async JS

console.log("waiting....");

clearTimeout; // used to clear timeout

// setInterval

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

// prints the time every second
