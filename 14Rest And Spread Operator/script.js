/*
The spread (...) and rest (...) operators in JavaScript are both represented by three dots 
(...), but they serve different purposes depending on their context.
Let’s break it down step by step so you become an expert in using them.
*/

/*
1️⃣ Spread Operator (...)
The spread operator is used to expand elements of an array or object.
How Spread Works
Spreads (expands) the contents of an iterable (array, object, string, etc.).
It helps in copying, merging, and passing multiple values easily.
*/

// ✅ Spreading Arrays
// Using spread operator to combine two arrays
const array1=["a", "b", "c", "d", "e"]
const array2=['g', 'h', 'i', 'j', 'k', 'l']
const combined=[...array1,...array2]
console.log(combined);

// ✅ Copying Arrays (Avoids Mutation)
const original=[1,2,3,4,5,6,7,8]
const duplicate=[...original]
duplicate.push(10)
console.log("Original Array:", original);
console.log("Duplicate Array:", duplicate);

// ✅ Spreading Strings into Arrays
let word="Hello i am anurag"
let stringArray=[...word]
console.log(stringArray);

// ✅ Spreading Objects
const obj1={name:"John", age:30}
const obj2={...obj1, city:"New York"}
console.log("Object 1:", obj1);
console.log("Object 2:", obj2);

// ✅ Using Spread in Function Arguments

function add(x,y,z,a){
  let result=x+y+z+a
  console.log(result);
}

let numbers=[1,2,3,6]
add(...numbers)

const prices = [299, 499, 199, 799, 999];
const highestPrice = Math.max(...prices);
console.log(highestPrice); // 999

function registerUser(name, age, country) {
  console.log(`User: ${name}, Age: ${age}, Country: ${country}`);
}
const userData = ["Anurag", 20, "India"];
registerUser(...userData);


/*
2️⃣ Rest Operator (...)
The rest operator is used to gather multiple elements into a single array or object.
How Rest Works
It collects multiple values into a single variable.
Used in function parameters and destructuring.
*/

//✅ Using Rest in Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4,8)); // 10

//✅ Rest with Destructuring (Arrays)
const [first, second,third, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(third)
console.log(rest); // [40, 50]

// ✅ Rest with Destructuring (Objects)
const person = { intro: "Anurag", age: 20, country: "India" };
const { intro, ...otherDetails } = person;
console.log(intro); // 'Anurag'
console.log(otherDetails); // { age: 20, country: 'India' }

// 4️⃣ Advanced Examples

// ✅ Removing Duplicates using Spread and Set
const num = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(num)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// ✅ Merging Objects with Default Values
const defaultSettings = { theme: "light", layout: "grid" };
const userSettings = { theme: "dark" };

const settings = { ...defaultSettings, ...userSettings };
console.log(settings); // { theme: 'dark', layout: 'grid' }


// ✅ Using Rest to Exclude a Property
const user = { id: 1, name: "Anurag", password: "secret" };
const { password, ...safeUser } = user;
console.log(safeUser); // { id: 1, name: 'Anurag' }

