//function statement/Function Declartions
// Function declarations are hoisted to the top of their containing scope. This means you can call the function before its declaration in the code.
function a(){
    console.log("a is called");
}


//function expression
// Function expressions are not hoisted. They are only defined when the execution reaches the assignment in the code.
var b= function(){
    console.log("b is called");
}

//Anonymous function
//A function without name is called the anonymuos function
// function(){

// }


//first class functions:- the ability to be used like values is called first class functions




//arrow Functions

// 1. Assigning a function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Passing a function as an argument to another function
function welcomeMessage(func, userName) {
    console.log(func(userName));
}

welcomeMessage(greet, "Bob"); // Output: Hello, Bob!

// 3. Returning a function from another function
function createGreeting(prefix) {
    return function(name) {
        return `${prefix}, ${name}!`;
    };
}

const sayHi = createGreeting("Hi");
console.log(sayHi("Charlie")); // Output: Hi, Charlie!

const sayGoodbye = createGreeting("Goodbye");
console.log(sayGoodbye("Dave")); // Output: Goodbye, Dave!

// 4. Storing functions in an array
const functionsArray = [
    function(x) { return x * 2; },
    function(x) { return x * 3; },
    function(x) { return x * 4; }
];

functionsArray.forEach(func => {
    console.log(func(5));
});
// Output: 
// 10
// 15
// 20

// 5. Storing functions in an object
const functionsObject = {
    double: function(x) { return x * 2; },
    triple: function(x) { return x * 3; },
    quadruple: function(x) { return x * 4; }
};

console.log(functionsObject.double(5));  // Output: 10
console.log(functionsObject.triple(5));  // Output: 15
console.log(functionsObject.quadruple(5)); // Output: 20


