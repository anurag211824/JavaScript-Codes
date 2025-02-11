debugger
const aa=6
let bb=9

console.log(a);
var a="Anurag"
//console.log(userName);



sayHi()

//Function Declaration
function sayHi(){
    console.log("Hi");
    
}

addNum()

//Function Expression
var addNum=function(){  //Anonymus function
    console.log(2+2);
    
}


// Hoisting in JavaScript

// Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their scope before code execution.

// 1. Variable Hoisting
// - Variables declared with var are hoisted but not initialized.
// - let and const variables are hoisted but remain in the temporal dead zone (TDZ) until initialized.

console.log(a); // Undefined
var a = "Anurag";

// 2. Function Hoisting
// - Function declarations are hoisted completely, meaning they can be called before their definition.
// - Function expressions are hoisted only by their variable name, but the function itself is not initialized.

sayHi(); // Works
function sayHi() {
console.log("Hi");
}

// Example of Function Expression
try {
addNum(); // TypeError: addNum is not a function
} catch (error) {
console.error(error);
}

var addNum = function() {
console.log(2 + 2);
};

// 3. Key Takeaways
// - Function declarations are fully hoisted, while function expressions are not.
// - Variables declared with var are hoisted but undefined until initialization.
// - Variables declared with let and const are hoisted but stay in the TDZ until initialized.