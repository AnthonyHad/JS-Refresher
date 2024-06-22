let js = "amazing";
if (js === "amazing") alert("Javascript is FUN !!!");

console.log(40 + 8 + 3 + 4);

// let firstName = "Matilda";

console.log(firstName);

//JS variables are written in camelCase
//Cannot write variables starting with a number
//Variables can only contain letters,numbers and underscores

// There are also reserved variables for new, name and function

// It's the value of the variable which defines the type
// JS is dynamically typed and we can basically have a variable which starts as a boolean and then becomes a number

// There's a legacy bug in JS where typeof(null) returns an object but it should be undefined

// let, var and const

// We can declare empty variables
let age = 30;
age = 31;

// const birthYear = 1991;

// The below won't work
// birthYear = 1990;

// We cannot declare const without an initial value
// const job;

var job = " programmer";
job = "teacher";

// We can declare variables without let, const or var
// However JS will create it for the global object and not the document scope

// Math Operators
//  ;  + ; - ; / ; * ; **
// We can use the + to concatenate strings as well

// Assignement Operators
// = ; += ; -= ; /= ; *=
// ++ ; --

const ageJonas = 2037 - 1991;
console.log(ageJonas);

// Comparison Operators
// > ; < ; >= ; <= ===> Returns boolean

// Operator Precedence
// Math always precedes comparison

let x;
y;
x = y = 25 - 10 - 5; // x = y = 10

// Strings and tempalate literals

const firstName = "Anthony";
const job = " Product Manager";
const birthYear = 1800;
const year = 2027;

const anthony = "I'm" + firstName + ", a" + (year - birthYear);

// Or we can use template literals `...${JS code}...`
// we can use \n to create multi line strings but with template literals we can avoid the \n

const anthonyNew = `I'm${firstName}, a ${year - birthYear} old ${job}`;

// Conditional Statements
// If/else

// if () {
//  ......} else {
// .... }

// Type Conversion

const inputYear = "1991";

//The below will concatenate the year with 18
console.log(inputYear + 18);

// We need to convert inputYear to a number
Number(inputYear);
String(23);
// !!The original value is not converted to a string through Number.!!!

// Type Coercion
// + operator will convert numbers to strings
// - operator converts strings to  numbers
// * / operators convert to numbers
console.log("I am" + 23 + "years old");

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));

// Equality Operators
// equals: ===
// type coercion equality loose operator ==  --> '18' == 18 true
// not equal strict !== // not equal loose !=

// Logical Operators
// AND: &&
//OR: //
// NOT: !

// Switch statement
const day = "monday";
// does a strict comparison and break stops the code if truthy
switch (day) {
  case "monday":
    console.log("it's monday !!!");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Hellooooooo");

  default:
    console.log("not valid!");
}

// Statements vs Expressions

// 3 + 4 is an expression because it will produce a value
// 1991 is an expression
// true && false is an expression

// if(23 > 10) {
// const str = "23 is bigger"
//}

// tempalte literals expect expressions only

// Ternary operator

const ageBro = 23;

ageBro >= 18 ? console.log("hello") : console.log(" I like to dirnk water"); // it's an expression

// That is why we can use this with tempalte literals.
