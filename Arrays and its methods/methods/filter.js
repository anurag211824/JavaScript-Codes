// const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// const myNewNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(myNewNums);

// // Array of numbers
// const arr = [5, 1, 3, 2, 6];

// // Function to check if a number is odd
// function isOdd(x) {
//   return x % 2;
// }

// // Function to check if a number is even
// function isEven(x) {
//   return x % 2 == 0;
// }

// // Function to check if a number is greater than 4
// function greaterThan4(x) {
//   return x > 4;
// }

// // Filter the array to get only odd numbers
// const outputarr1 = arr.filter(isOdd);
// console.log("Odd numbers:", outputarr1); // Output: [5, 1, 3]

// // Filter the array to get only even numbers
// const outputarr2 = arr.filter(isEven);
// console.log("Even numbers:", outputarr2); // Output: [2, 6]

// // Filter the array to get numbers greater than 4
// const outputarr3 = arr.filter(greaterThan4);
// console.log("Numbers greater than 4:", outputarr3); // Output: [5, 6]

// // Filter the array to get numbers greater than 4 using an arrow function
// const outputarr4 = arr.filter((x) => x > 4);
// console.log("Numbers greater than 4 (using arrow function):", outputarr4); // Output: [5, 6]

// const users = [
//   { firstname: "anurag", lastname: "kumar", age: 21 },
//   { firstname: "deepak", lastname: "sharma", age: 22 },
//   { firstname: "abhinav", lastname: "shrivastav", age: 20 },
//   { firstname: "akash", lastname: "kumar", age: 21 },
//   { firstname: "ayush", lastname: "kumar", age: 20 },
//   { firstname: "bhaskar", lastname: "bhist", age: 22 },
//   { firstname: "anshul", lastname: "bhatt", age: 21 },
// ];

// // Filter users with age less than 21 and map their first names
// const firstNameAgeLessThan21 = users
//   .filter((x) => x.age < 21)
//   .map((x) => x.firstname);

// // Print the first names of users with age less than 21
// console.log(
//   "First names of users with age less than 21:",
//   firstNameAgeLessThan21
// ); // Output: ["abhinav", "ayush"]
// // users.map((ele)=>{
// //     if(ele.age>=21){
// //         console.log(ele.firstname);
// //     }
// // })

// // const usersBelowAge = users.filter((ele)=>{
// //     if(ele.age>21){
// //         console.log(ele.firstname);
// //     }
// //     return ele.age>21;
// // })
// // console.log(usersBelowAge)

const students = [
    { name: "anurag", age: 20, roll: 2, totalMarks: 85 },
    { name: "deepak", age: 21, roll: 3, totalMarks: 78 },
    { name: "abhinav", age: 19, roll: 4, totalMarks: 92 },
    { name: "akash", age: 21, roll: 5, totalMarks: 74 },
    { name: "ayush", age: 20, roll: 6, totalMarks: 88 },
    { name: "bhaskar", age: 22, roll: 7, totalMarks: 80 },
  ];
  console.log(students);
  // Filter students above 20 years and whose total marks are above 80
  const updatedStudent=students.filter((student)=>{
    if(student.totalMarks>=80 && student.age>=20){
        return true;
    }
    else{
        return false;
    }
  })
  console.log(updatedStudent);
  
  