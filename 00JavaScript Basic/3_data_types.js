"use strict"; // treat all js codes as newer version
let number = 42; // Number
//bigint
let message = "Hello"; // String
let isActive = true; // Boolean
let numbers = []; // Array
let person = { name: "Bob", age: 25 }; // Object
let state = null;
console.log(number);
console.log(message);
console.log(isActive);
console.log(numbers);
console.log(person);

//bigint
// Regular Number (can lose precision for very large numbers)
let regularNumber = 9007199254740991; // Largest safe integer in JavaScript
console.log(regularNumber + 1); // 9007199254740992
console.log(regularNumber + 2); // 9007199254740992 (incorrect due to precision loss)

// BigInt (can handle arbitrarily large integers)
let bigIntNumber = 9007199254740991n; // Adding 'n' makes it a BigInt
console.log(bigIntNumber + 1n); // 9007199254740992n
console.log(bigIntNumber + 1n); // 9007199254740993n

//symbols
// Creating symbols
const symbol1 = Symbol("description1");
const symbol2 = Symbol("description2");

// Symbols are unique
console.log(symbol1 === symbol2); // false

// Using symbols as object keys
let obj = {
  [symbol1]: "Value for symbol1",
  [symbol2]: "Value for symbol2",
};

console.log(obj[symbol1]); // Value for symbol1
console.log(obj[symbol2]); // Value for symbol2

//date dataType

// Creating a new Date object with the current date and time
let currentDate = new Date();
console.log(currentDate); // Prints current date and time

// Creating a specific date (January 1, 2024)
let specificDate = new Date("2024-01-01");
console.log(specificDate); // Mon Jan 01 2024 00:00:00

// Getting parts of the date
console.log(currentDate.getFullYear()); // Get the year
console.log(currentDate.getMonth()); // Get the month (0-indexed, 0 = January)
console.log(currentDate.getDate()); // Get the day of the month

// Modifying dates
let modifiedDate = new Date();
modifiedDate.setFullYear(2025); // Change the year to 2025
console.log(modifiedDate);

//array
let array = [1, 2, 3, 4, 5, 5, 5];
console.log(array);

let myNumber = "9334759512";
console.log(parseInt(myNumber));

let str1 = "100";
console.log(str1 - 10);
console.log(str1 + 10);
//number
//bigint
//string
//boolean
//null
//undefined
//symbol+>unique

//object
//console.log(typeof number);

//Arithemetic operators
let a = 0.1;
let b = 0.3;
let c = a + b;
console.log(c.toFixed(2));

var str = "Anurag";
var num = 3;
//NaN
console.log(str * num);

//Diff b/w double and triple equal to

//this will give true but its a flase
// so to avoid this use triple equal to
console.log(5 == "5");
//basically triple equal to check dataType also
console.log(3 === "3");
