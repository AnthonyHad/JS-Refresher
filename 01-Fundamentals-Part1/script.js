let js = "amazing";
if (js === "amazing") alert("Javascript is FUN !!!");

console.log(40 + 8 + 3 + 4);

let firstName = "Matilda";

console.log(firstName);

//JS variables are written in camelCase
//Cannot write variables starting with a number
//Variables can only contain letters,numbers and underscores

// There are also reserved variables for new, name and function

// It's the value of the variable which defines the type
// JS is dynamically typed and we can basically have a variable which starts as a boolean and then becomes a number

// There's a legacy bug in JS where typeof(null) returns an object but it should be undefined

// Let, var and const

// We can declare empty variables
let age = 30;
age = 31;

const birthYear = 1991;

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
