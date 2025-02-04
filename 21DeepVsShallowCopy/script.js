// Primitive Data Type Copy (Strings)
const username1 = 'Anurag';
let username2 = username1;
username2 = username2 + ' Kumar';
console.log(username1, username2); // username1 remains unchanged

// Array Reference Behavior
const fruits = ["apple", "banana", "cherry"];
const myFruits = fruits; // Reference Copy

myFruits.push('dates', 'grapes');
console.log(myFruits); // Modified array
console.log(fruits);   // Original array also changed (reference behavior)

// Object Reference Behavior
const user1 = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

const user2 = user1; // Reference Copy
user2.email = 'jane@example.com';
user1.name = "Anurag";
console.log(user1);  // Original object modified
console.log(user2);  // Both user1 and user2 reflect changes

// Creating a Shallow Copy of an Object
const student1 = {
    name: 'Stark',
    age: 20,
    roll_no: 10
};

const student2 = { ...student1 }; // Using Spread Operator
console.log(student1, student2);

// Creating a Shallow Copy of an Array
const myFriends1 = ['abhinav', 'anshul', 'deepak', 'garima', 'bhaskar'];
const myFriends2 = [...myFriends1, 'Himanshi']; // Spread operator to copy & add new element
console.log(myFriends1);
console.log(myFriends2);

// Copying an Array using concat()
const myLang = ['C', 'C++', 'Java', 'JavaScript', 'JavaScript'];
let myFavLang = [].concat(myLang);
myFavLang.push('Python');
console.log(myLang);
console.log(myFavLang);

// Copying and Sorting an Array
let myMarks = ['78', '56', '76', '98', '57'];
let myHighMark = myMarks.slice(); // Using slice() for shallow copy
myHighMark.sort((a, b) => b - a);
console.log(myMarks);
console.log(myHighMark);

// Shallow Copy of Nested Object
const customer1 = {
    name: 'Mohan',
    age: 25,
    pata: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    cart: ['kurkure', 'jeans', 'pant', 'hoodies']
};

const customer2 = { ...customer1 }; // Shallow Copy
customer2.pata.city = 'Patna'; // Modifies original object's nested property
customer2.cart.push('books');
console.log(customer1);
console.log(customer2);

// To create a Deep Copy (avoid modifying nested objects), use structuredClone()
const customer3 = structuredClone(customer1);
customer3.pata.city = 'Mumbai';
customer3.cart.push('shoes');
console.log(customer1);
console.log(customer3);