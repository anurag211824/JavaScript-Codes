// Array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Transforming the numbers through a series of operations
const myNewNums = myNums
  .map((num) => num * 10) // Multiply each number by 10
  .map((num) => num + 1)  // Add 1 to each resulting number
  .filter((num) => num > 40); // Filter numbers to keep only those greater than 40

// Print the final array after transformations
console.log(myNewNums); // Output: [ 41, 51, 61, 71, 81, 91 ]

// Array of programming courses with their prices
const programmingCourse = [
  {
    name: "cpp",
    price: 2000,
  },
  {
    name: "py",
    price: 3000,
  },
  {
    name: "java",
    price: 1000,
  },
  {
    name: "javascript",
    price: 2200,
  },
];

// Calculating the total price of all courses
const totalPrice = programmingCourse.reduce((acc, item) => acc + item.price, 0);

// Print the total price of all courses
console.log(totalPrice); 
// Output: 8200
