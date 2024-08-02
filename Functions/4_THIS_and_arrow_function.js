// Object with properties and methods
const user = {
    username: "Anurag",
    price: 999,

    // Method to display a welcome message using 'this' to refer to the object's properties
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
    }
}

// Calling the method to display the welcome message
user.welcomeMessage(); // Logs: "Anurag, welcome to the website"

// Changing the username property of the user object
user.username = "Abhinav";

// Calling the method again to display the updated welcome message
user.welcomeMessage(); // Logs: "Abhinav, welcome to the website"

// 'this' in the global context refers to the global object (window in browsers)
console.log(this); // In browsers, this would log the window object

// Function to demonstrate 'this' in a regular function
function f() {
    let username = "anurag";
    console.log(this); // Logs: the global object (window in browsers)
    console.log(this.username); // Logs: undefined, as 'username' is not a property of the global object
}

f(); // Calling the function

// Regular function to demonstrate 'this' inside a function
const chai = function() {
    let username = "hitesh";
    console.log(this); // Logs: the global object (window in browsers)
}

chai(); // Calling the function

// Arrow function example
const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return
}

console.log(addTwo(4, 5)); // Logs: 9

// Arrow function with implicit return
const multiply = (num1, num2) => (num1 * num2); // Implicit return used in react

// Arrow function returning an object
const add = (num1, num2) => ({ username: "anurag" }); // To return an object, wrap it in parentheses

console.log(multiply(2, 5)); // Logs: 10


// Additional notes on 'this' and arrow functions:

// 'this' in arrow functions:
// Arrow functions do not have their own 'this' context. Instead, 'this' refers to the enclosing lexical context (the context in which the arrow function was defined).
// Therefore, 'this' inside an arrow function is the same as 'this' outside of the arrow function.

const arrowFunc = () => {
    console.log(this); // 'this' refers to the enclosing context
}

// Invoking the arrow function
arrowFunc(); // If defined in the global context, 'this' will refer to the global object (window in browser