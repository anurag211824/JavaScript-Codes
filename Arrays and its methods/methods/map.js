// Array of numbers
const arr = [5, 1, 2, 3, 6];

// Function to double a number
function double(x) {
  return x * 2;
}

// Function to triple a number
function triple(x) {
  return x * 3;
}

// Function to convert a number to its binary representation
function binary(x) {
  return x.toString(2);
}

// Map the array to double each element
const doubleArr = arr.map(double);
console.log("Doubled values:", doubleArr); // Output: [10, 2, 4, 6, 12]

// Map the array to triple each element
const tripleArr = arr.map(triple);
console.log("Tripled values:", tripleArr); // Output: [15, 3, 6, 9, 18]

// Map the array to get binary representation of each element
const binaryArr = arr.map(binary);
console.log("Binary representation:", binaryArr); // Output: ["101", "1", "10", "11", "110"]

// Map the array to get binary representation using an arrow function
const output = arr.map((x) => x.toString(2));
console.log("Binary representation (using arrow function):", output); // Output: ["101", "1", "10", "11", "110"]

// More complex example: Array of user objects
const users = [
  { firstname: "anurag", lastname: "kumar", age: 21 },
  { firstname: "deepak", lastname: "sharma", age: 22 },
  { firstname: "abhinav", lastname: "shrivastav", age: 20 },
  { firstname: "akash", lastname: "kumar", age: 21 },
  { firstname: "ayush", lastname: "kumar", age: 20 },
  { firstname: "bhaskar", lastname: "bhist", age: 22 },
  { firstname: "anshul", lastname: "bhatt", age: 21 },
];

// Create a list of first names and last names of users
const outputarr1 = users.map((x) => x.firstname + " " + x.lastname);
console.log("First and last names of users:", outputarr1); // Output: ["anurag kumar", "deepak sharma", "abhinav shrivastav", "akash kumar", "ayush kumar", "bhaskar bhist", "anshul bhatt"]
