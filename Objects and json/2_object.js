// Using the Object Constructor
// You can create an object using the Object constructor.
const student = new Object();
student.name = "anurag";
student.roll_no = 10;
student.age = 20;
student.college = "Shivalik";
student.greeting = function() {
    console.log("Hello, " + this.name);
};

// Accessing properties
console.log(student.name); // Output: anurag

// Modifying properties
student.age = 21;

// Adding new properties
student.course = "Computer Science";

// Calling methods
student.greeting(); // Output: Hello, anurag

//...............................................................................................................................................................

// Create an empty object to represent a Tinder user
const tinderuser = {}

// Add an 'id' property to the tinderUser object with the value "123abc"
tinderuser.id = "123abc"

// Add a 'name' property to the tinderUser object with the value "Sammy"
tinderuser.name = "Sammy"

// Add an 'isLoggedIn' property to the tinderUser object with the value false
tinderuser.isLoggedIn = false

// Log the tinderUser object to the console to see its current state
console.log(tinderuser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

//..........................................................................................................................................................

// Create an object to represent a regular user with an email and fullname properties
const regularUser = {
    // Add an 'email' property with the value "some@gmail.com"
    email: "some@gmail.com",
    
    // Add a 'fullname' property, which is an object containing another nested object 'userfullname'
    fullname: {
        // The 'userfullname' object contains properties for 'firstname' and 'lastname'
        userfullname: {
            // Add a 'firstname' property with the value "hitesh"
            firstname: "hitesh",
            // Add a 'lastname' property with the value "choudhary"
            lastname: "choudhary"
        }
    }
}

// Log the 'firstname' property of the nested 'userfullname' object to the console
console.log(regularUser.fullname.userfullname.firstname); // Output: hitesh

//...........................................................................................................................................................................

const obj1={name:"anurag",age:20,roll:2}
const obj2={name:"deepak",age:21,gf:3}
const obj3={name:"abhinav",age:19,roll:4}

//const obj4={obj1,obj2,obj3}
//The resulting obj4 will have three properties (obj1, obj2, and obj3), 
//each containing the respective original objects.


const obj4=Object.assign({},obj1,obj2,obj3)
//const obj4 = {...obj1, ...obj2,...obj3}
// these two code, if there are overlapping properties, the values from the latter objects (obj2 and obj3) 
//overwrite those from the former ones (obj1).
console.log(obj4);

//...........................................................................................................................................................................

const obj_1 = { 1: "a", 2: "b" }
const obj_2 = { 3: "a", 4: "b" }
const obj_4 = { 5: "a", 6: "b" }

// Merge obj_1 and obj_2 using the spread operator
// The resulting obj_3 contains all properties from both obj_1 and obj_2
//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj_3 = { ...obj_1, ...obj_2 }
console.log(obj_3); // Output: { 1: 'a', 2: 'b', 3: 'a', 4: 'b' }

//................................................................................................................................................................
// Array of objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

// Accessing an element in the array of objects
console.log(users[1].email); // Output: b@gmail.com

//................................................................................................................................................................

// Create an empty object to represent a Tinder user
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// Log the tinderUser object to the console
console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Log the keys, values, and entries of the tinderUser object
console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // Output: [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// Check if the tinderUser object has a specific property
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true

//................................................................................................................................................................





