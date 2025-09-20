const arr = [5, 1, 3, 2, 6];

// Double
function double(ele) {
  return ele * 2;
}
// Triple
function triple(ele) {
  return ele * 3;
}
const output1 = arr.map(double);
const output2 = arr.map(triple);
console.log(output1);
console.log(output2);
// 1
const numbers = [1, 2, 3, 4];
const squared = numbers.map((ele) => {
  return Math.pow(ele, 2);
});
console.log(squared);

//2
const fruits = ["apple", "banana", "mango"];
const uppercaseFruits = fruits.map((frut) => {
  return frut.toUpperCase();
});
console.log(uppercaseFruits);

//3
const words = ["hello", "world", "javascript"];
const firstLetter = words.map((ele) => {
  return ele[0];
});
console.log(firstLetter);

//4
const stringNumber = ["1", "2", "3"];
const toNumbers = stringNumber.map((ele) => {
  console.log(typeof Number(ele));
  return Number(ele);
});
console.log(toNumbers);
//5
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

const names = users.map((user) => {
  return user.name;
});
console.log(names);
const doubleAge = users.map((user) => {
  return user.age * 2;
});
console.log(doubleAge);

const userNameAndAge = users.map((user) => {
  return `${user.name} is ${user.age} old`;
});
console.log(userNameAndAge);

//6
const students = [
  { name: "Anurag", marks: { math: 90, science: 80 } },
  { name: "Priya", marks: { math: 85, science: 95 } },
];

const mathMarks = students.map((student) => {
  return student.marks.math;
});
console.log(mathMarks);
const totalMarks = students.map((student) => {
  return student.marks.math + student.marks.science;
});
console.log(totalMarks);

const numberarray = [5, 6, 3, 2, 7];

const maxNum = numberarray.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(maxNum);

const usersList = [
  { firstName: "John", lastName: "Doe", age: 22 },
  { firstName: "Alice", lastName: "Smith", age: 30 },
  { firstName: "Michael", lastName: "Johnson", age: 28 },
  { firstName: "Emily", lastName: "Davis", age: 22 },
  { firstName: "David", lastName: "Brown", age: 32 },
  { firstName: "Sophia", lastName: "Wilson", age: 43 },
  { firstName: "Daniel", lastName: "Anderson", age: 32 },
  { firstName: "Olivia", lastName: "Thomas", age: 24 },
  { firstName: "James", lastName: "Martinez", age: 30 },
  { firstName: "Emma", lastName: "Taylor", age: 31 },
];

const userAgeFreq = usersList.reduce((age, curr) => {
  if (age[curr.age]) {
    age[curr.age] += 1;
  } else {
    age[curr.age] = 1;
  }
  return age;
}, {});
console.log(userAgeFreq);

const firstNameOfUserLessThan30 = usersList
  .filter((user) => {
    return user.age < 30;
  })
  .map((user) => {
    return user.firstName;
  });
console.log(firstNameOfUserLessThan30);

const  firstNameOfUserLessThanThirty = usersList.reduce((acc,curr)=>{
 if(curr.age < 30){
    if(!acc[curr.firstName])
    acc.push(curr.firstName)
 }
 return acc
},[])

console.log(firstNameOfUserLessThanThirty);



// 1. Get Full Names of Users
// From usersList, return an array of full names (firstName lastName) of users who are older than 25.
const userOlderThan25Years = usersList.filter((user)=>user.age> 30).map((user)=>user.firstName +" "+ user.lastName)
console.log(userOlderThan25Years);

//2. Average age of users
const averageAge  = usersList.reduce((acc,curr)=>{
 acc += curr.age
 return acc
},0) /usersList.length

console.log(averageAge);

// 3. Group Users by Age
//Convert usersList into an object where the key is the age and value is an array of full names:

const groupUsersByAge = usersList.reduce((acc,curr)=>{
 if(acc[curr.age]){
    acc[curr.age].push(curr.firstName + " " + curr.lastName)
 }
 else{
    acc[curr.age] = [curr.firstName + " " + curr.lastName]
 }
 return acc
},{})
console.log(groupUsersByAge);

// 4. Count First Name Initials
// Create an object that counts how many users share the same first letter of their first name.

const a = usersList.reduce((acc,curr)=>{
 if(acc[curr.firstName[0]]){
    acc[curr.firstName[0]] += 1;
 }
 else{
     acc[curr.firstName[0]] = 1;
 }
 return acc
},{})
console.log(a);
// 5. Longest First Name
// Find the user with the longest first name using reduce().

const longestFirstName = usersList.reduce((acc,curr)=>{
 if(acc.length < curr.firstName.length){
    acc = curr.firstName
 }
 return acc
},"")

console.log(longestFirstName);
