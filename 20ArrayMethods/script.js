// JavaScript Array Methods - Quick Reference

// 1. Modifying Elements in an Array
// ----------------------------------

const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];

// Removing the first element
evenNumbers.shift(); // Removes 0
// Adding an element at the beginning
evenNumbers.unshift(1); // Adds 1 at the start

console.log(evenNumbers)

// 2. Combining Arrays
// --------------------
const animals = ["lion", "dog", "cat", "rat"];
const newArray = evenNumbers.concat(animals); 
// Creates a new array combining both arrays without modifying the original ones

console.log(newArray);

// 3. Searching in an Array
// -------------------------
let result = evenNumbers.indexOf(4); // Returns index of 4
console.log(result);

let result2 = evenNumbers.includes(4); // Checks if 4 exists in the array (true/false)
console.log(result2);

// 4. Reversing an Array
// ----------------------
animals.reverse();
console.log(animals);

evenNumbers.reverse();
console.log(evenNumbers);

// 5. Sorting an Array
// --------------------
evenNumbers.sort((a, b) => a - b); // Sorts numbers in ascending order
console.log(evenNumbers);

animals.sort(); // Sorts strings alphabetically
console.log(animals);

// 6. Extracting & Modifying Elements
// -----------------------------------
let mySubjects = [
  "Operating System", "Computer Network", "Artificial Intelligence", 
  "Web technologies", "Oops", "Software", "Compiler Design"
];

// Using slice() (Does NOT modify original array)
console.log(mySubjects.slice(1, 3)); // Extracts elements from index 1 to 2
console.log(mySubjects);

let numbers = [10, 20, 30, 40, 50];

let newNumbers = numbers.slice(1, 4); // Extracts elements from index 1 to 3 (excluding index 4)

console.log(newNumbers); // Output: [20, 30, 40]
console.log(numbers);    // Output: [10, 20, 30, 40, 50] (Original remains unchanged)


// Using splice() (Modifies original array)
console.log(mySubjects.splice(1, 3)); // Removes 3 elements from index 1
console.log(mySubjects);

// Using splice() to replace elements
console.log(mySubjects.splice(2, 2, 'Data Structure and Algorithms', 'Constitution of India', 'MERN Stack'));
console.log(mySubjects);

//Multidimensional array
const multiArray = [['X', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'X']];
console.log(multiArray[0][2]);
