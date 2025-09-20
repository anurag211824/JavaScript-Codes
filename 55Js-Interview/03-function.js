debugger;
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

// what are first class functions ?
// function Statement ?
// function Expression ?
// function Declration ?

// 🔹 First-Class Functions in JavaScript

// In JavaScript, functions are treated like values (or "first-class citizens").
// This means you can do with functions everything that you can do with other values (like numbers, strings, objects).

// 1. Properties of First-Class Functions:
const greet = function () {
  console.log("Hello");
};
greet();
// 2 . Store in data structures (array, object, etc.)
const functions = [() => console.log("Hi"), () => console.log("Bye")];

functions[0]();
functions[1]();

// 3. Pass as an argument (Callback functions)
function sayHello(name) {
  console.log("Hello, " + name);
}
function greetUser(callback) {
  callback("Anurag");
}
greetUser(sayHello)


// Function Statement or Declarations
function a(){
    console.log("a is called");
    
}

// Function expression
var b = function (){
    console.log("b called");
    
}

// Named function expression

const multiply = function abc (a,b){
console.log(a*b);

}
multiply(5,6)