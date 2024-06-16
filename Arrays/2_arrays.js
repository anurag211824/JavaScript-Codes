// Define the first array of vegetables
const vegetable1 = ["bringle", "potatto", "onion", "garlic"];

// Define the second array of vegetables
const vegetable2 = ["ginger", "spainach", "gourd"];

// Push the second array into the first array as an element
vegetable1.push(vegetable2);
console.log(vegetable1); // Output: ["bringle", "potatto", "onion", "garlic", ["ginger", "spainach", "gourd"]]

// Access the second element of the nested array within vegetable1
console.log(vegetable1[4][1]); // Output: "spainach"

// Concatenate both arrays into a single array
const allVeg = vegetable1.concat(vegetable2);
console.log(allVeg); // Output: ["bringle", "potatto", "onion", "garlic", ["ginger", "spainach", "gourd"], "ginger", "spainach", "gourd"]

// Use spread operator to combine both arrays into a single array
const Allveg = [...vegetable1, ...vegetable2];
console.log(Allveg); // Output: ["bringle", "potatto", "onion", "garlic", ["ginger", "spainach", "gourd"], "ginger", "spainach", "gourd"]

// Create an array from a string
console.log(Array.from("Hitesh")); // Output: ["H", "i", "t", "e", "s", "h"]

// Interesting: Array.from doesn't work with objects in this context
// console.log(Array.from({name: "hitesh"})); // Uncommenting this line will throw an error

// Define a nested array
const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten the nested array to any level of depth
const arrModified = arr1.flat(Infinity);
console.log(arrModified); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Define some scores
let score1 = 100;
let score2 = 200;
let score3 = 300;

// Create an array from the scores
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]
