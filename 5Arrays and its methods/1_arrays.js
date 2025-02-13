// Create arrays using array literals
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

// Create an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Array methods

// Adding elements to the end of the array
myArr.push(6);  // Adds 6 to the end of myArr
myArr.push(7);  // Adds 7 to the end of myArr

// Removing the last element of the array
myArr.pop();  // Removes 7 from the end of myArr

// Adding elements to the beginning of the array
myArr.unshift(9);  // Adds 9 to the start of myArr

// Removing the first element of the array
myArr.shift();  // Removes 9 from the start of myArr

// Check if an element is present in the array
console.log(myArr.includes(9));  // Returns false as 9 was removed
console.log(myArr.indexOf(3));  // Returns the index of the element 3 (should be 2)

// Join all elements of the array into a string
const newArr = myArr.join();  // Joins elements of myArr into a string, separated by commas

// Array slicing (does not modify the original array)
const myn1 = myArr.slice(1, 3);  // Slices elements from index 1 to 3 (not including 3) into a new array

// Array splicing (modifies the original array)
const myn2 = myArr.splice(1, 3);  // Removes 3 elements starting from index 1 and returns the removed elements

// Uncomment the following lines to see the output of each step

// console.log(myArr);          // Logs [0, 1, 2, 3, 4, 5]
// console.log(myHeors);        // Logs ["shaktiman", "naagraj"]
// console.log(myArr2[1]);      // Logs 2
// console.log(myArr);          // After push and pop operations
// console.log(newArr);         // Logs "0,1,2,3,4,5,6"
// console.log(myn1);           // Logs [1, 2]
// console.log(myArr);          // Logs the array after slicing
// console.log(myn2);           // Logs [1, 2, 3]
// console.log(myArr);          // Logs the array after splicing (should be [0, 4, 5])

