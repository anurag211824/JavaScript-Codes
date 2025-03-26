// ===================== Basic Arithmetic =====================
let a = 10;
let b = 20;
console.log(a + b);

const string = "10";
// If the output is black, it's a string; if blue, it's a number.
console.log(string + 10); // Concatenation
console.log(typeof (string + 10));

let x = 10, y = 20;
console.log(`Sum of 10 and 20 is: ${x + y}`);
console.log("Sum of 10 and 20 " + (x + y));
console.log(a + b + " sum of 10 and 20");

// ===================== Type Coercion =====================
console.log("10" + 1); // "101" (String concatenation)
console.log("10" - 1); // 9 (Arithmetic conversion)
console.log("10" / 9); // 1.11...

// ===================== Type Casting =====================
// let age = Number(prompt('Enter your age'));
// console.log(typeof(age));
// console.log(age);
// console.log(Number(age));
// console.log(Number('anurag')); // NaN

// ===================== Swapping Values =====================
let num1 = 18, num2 = 13;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);

let p = 10, q = 20;
p = p + q;
q = p - q;
p = p - q;
console.log(p, q);

let u = 12, v = 48;
[u, v] = [v, u];
console.log(v, u);

// ===================== Arithmetic Operations =====================
let c = 12, d = 8;
console.log(c / d);
console.log(13 % 4);

let i = 11, j = 22;
let k = i + j + i++ + j++ + ++i + ++j;
console.log(i, j, k);

// ===================== Math Functions =====================
// Rounds 10.2 to the nearest integer (10 because .2 is closer to 10 than 11)
console.log(Math.round(10.2)); // Output: 10

// Rounds 10.7 to the nearest integer (11 because .7 is closer to 11 than 10)
console.log(Math.round(10.7)); // Output: 11

// Always rounds up to the next whole number, even if the decimal is small
console.log(Math.ceil(10.3)); // Output: 11

// Always rounds down to the nearest whole number, even if the decimal is large
console.log(Math.floor(10.4)); // Output: 10

// Removes the decimal part and returns only the integer part (truncates)
console.log(Math.trunc(10.5)); // Output: 10

// Calculates 2 raised to the power of 7 (2^7)
console.log(Math.pow(2, 7)); // Output: 128

// Returns the square root of 25
console.log(Math.sqrt(25)); // Output: 5

// Returns the absolute (positive) value of -13
console.log(Math.abs(-13)); // Output: 13

// Returns the maximum value among the given numbers
console.log(Math.max(12, 78)); // Output: 78

// Returns the minimum value among the given numbers
console.log(Math.min(12, 78)); // Output: 12

// Declaring an array of numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Using spread operator to pass array elements as individual arguments to Math.max()
console.log(Math.max(...arr)); // Output: 8 (largest number in the array)

// Declaring another array
const arr1 = [1, 2, 3, 4, 5, 6, 7];

// Using spread operator to pass array elements as individual arguments to Math.min()
console.log(Math.min(...arr1)); // Output: 1 (smallest number in the array)

// Generates a random number between 1 and 10
console.log(Math.trunc(Math.random() * 10 + 1));

// ===================== Number Formatting =====================
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"
console.log((2.345).toFixed(2)); // "2.34"
console.log((2.355).toFixed(2)); // "2.36"

let nums = 10;
console.log(nums.toFixed(3)); // "10.000"

// ===================== Area Calculations =====================
let length = 12, breadth = 20;
console.log(`Area of rectangle is: ${length * breadth}`);

let firstSide = 5, secondSide = 6, thirdSide = 3;
let semiPerimeter = (firstSide + secondSide + thirdSide) / 2;

if (
  firstSide + secondSide >= thirdSide ||
  firstSide + thirdSide >= secondSide ||
  secondSide + thirdSide >= firstSide
) {
  let area = Math.sqrt(
    semiPerimeter *
    (semiPerimeter - firstSide) *
    (semiPerimeter - secondSide) *
    (semiPerimeter - thirdSide)
  ).toFixed(2);
  console.log(`Area of triangle is: ${area}`);
} else {
  console.log("Invalid sides for a triangle");
}

// ===================== Conditional Operators =====================
let age = 20;
let canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);

let numCheck = 10;
console.log(numCheck % 2 === 0 ? "Even" : "Odd");

// Unary Operator Example
let number = 5;
console.log(+"10"); // Converts string "10" to number
console.log(-number); // Negates the value (-5)

let value = "";
console.log(!!value); // Converts to Boolean (false)
