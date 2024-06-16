// Creating an empty object using object literal syntax
const tinderUser = {}

// Adding properties to the tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Uncomment the line below to log the tinderUser object to the console
// console.log(tinderUser);

// Creating an object with nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Accessing the nested property 'firstname' of regularUser object
// Uncomment the line below to log the firstname to the console
// console.log(regularUser.fullname.userfullname.firstname);

// Creating multiple objects with key-value pairs
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Merging obj1 and obj2 into a new object obj3 using the spread operator
const obj3 = { ...obj1, ...obj2 };

// Uncomment the line below to log the merged object obj3 to the console
// console.log(obj3);

// Creating an array of user objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
];

// Accessing the 'email' property of the second user in the users array
// Uncomment the line below to log the email to the console
// console.log(users[1].email);

// Logging various properties and methods of the tinderUser object
// Uncomment the lines below to see the outputs
// console.log(Object.keys(tinderUser));       // Logs an array of keys
// console.log(Object.values(tinderUser));     // Logs an array of values
// console.log(Object.entries(tinderUser));    // Logs an array of key-value pairs
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Checks if 'isLoggedIn' is a property

// Creating an object with course details
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Destructuring the course object to create a new variable 'instructor'
const { courseInstructor: instructor } = course;

// Logging the value of 'instructor' to the console
console.log(instructor); // Logs "hitesh"

// An example of how JSON can be structured
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// An example of an array of empty objects
[
    {},
    {},
    {}
]
