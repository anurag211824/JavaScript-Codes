const arr = [5, 1, 2, 3, 6];

function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}
const doubleArr = arr.map(double);
console.log(doubleArr);

const tripleArr = arr.map(triple);
console.log(tripleArr);

const binaryArr = arr.map(binary);
console.log(binaryArr);

const output = arr.map((x) => x.toString(2));
console.log(output);

//more complex example
const users = [
  { firstname: "anurag", lastname: "kumar", age: 21 },
  { firstname: "deepak", lastname: "sharma", age: 22 },
  { firstname: "abhinav", lastname: "shrivastav", age: 20 },
  { firstname: "akash", lastname: "kumar", age: 21 },
  { firstname: "ayush", lastname: "kumar", age: 20 },
  { firstname: "bhaskar", lastname: "bhist", age: 22 },
  { firstname: "anshul", lastname: "bhatt", age: 21 },
];

//find a list of  first_name and last_name of users 
const outputarr1 = users.map((x) => x.firstname + " " + x.lastname);
console.log(outputarr1);
