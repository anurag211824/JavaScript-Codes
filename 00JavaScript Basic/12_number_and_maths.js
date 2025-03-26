const score = 400;
// This is a simple constant declaration and initialization.
// console.log(score); 
// Outputs the value of score (400).

const balance = new Number(100);
// This creates a Number object with a value of 100.
// console.log(balance); 
// Outputs the Number object (100).

// console.log(balance.toString()); 
// Converts the Number object to a string ("100").
// console.log(typeof balance); 
// Outputs the type of balance, which is 'object' due to the use of new Number().

const num1 = 100;
// console.log(num1.toFixed(2)); 
// Formats num1 to 2 decimal places ("100.00").

const num2 = 23.8966;
// console.log(num2.toPrecision(3)); 
// Formats num2 to 3 significant digits ("23.9").

const hundreds = 1000000;
// console.log(hundreds.toLocaleString); 
// Outputs a function reference, it should be called.
// console.log(hundreds.toLocaleString('en-IN')); 
// Formats the number according to the 'en-IN' locale ("10,00,000").

let num3 = Number.MAX_VALUE;
// console.log(num3); 
// Outputs the largest possible value a number in JavaScript can have (1.7976931348623157e+308).

let num4 = Number.MIN_VALUE;
// console.log(num4); 
// Outputs the smallest possible value a number in JavaScript can have (5e-324).

let num5 = Number.MAX_SAFE_INTEGER;
// console.log(num5); 
// Outputs the largest integer that can be safely represented in JavaScript (9007199254740991).

// .........................Maths............................................................................................

// console.log(Math); 
// Outputs the Math object which provides mathematical constants and functions.
// console.log(Math.abs(-4)); 
// Outputs the absolute value of -4 (4).
// console.log(Math.round(4.6)); 
// Rounds 4.6 to the nearest integer (5).
// console.log(Math.ceil(4.2)); 
// Rounds 4.2 up to the nearest integer (5).
// console.log(Math.floor(4.9)); 
// Rounds 4.9 down to the nearest integer (4).
// console.log(Math.min(4, 3, 6, 8)); 
// Outputs the smallest value among the given numbers (3).
// console.log(Math.max(4, 3, 6, 8)); 
// Outputs the largest value among the given numbers (8).

console.log(Math.random());
// Outputs a random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log((Math.random() * 10) + 1);
// Outputs a random floating-point number between 1 and 11 (inclusive of 1, exclusive of 11).

console.log(Math.floor(Math.random() * 10) + 1);
// Outputs a random integer between 1 and 10 (inclusive).

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Outputs a random integer between min (10) and max (20) inclusive.
