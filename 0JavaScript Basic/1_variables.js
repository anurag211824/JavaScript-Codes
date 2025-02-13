// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are explicitly declared in the code.

//1> Var
console.log(num); // undefined (default value for uninitialized `var`)
var num=10;
console.log(num);

//2>let
//console.log(a);//ReferenceError
let a=10;
console.log(a);
// Variables declared with let are also hoisted, but they remain in a "temporal dead zone" (TDZ) 
// from the start of the block until the declaration is encountered.
// Accessing the variable within the TDZ causes a ReferenceError.

//3>const
//console.log(b);//ReferenceError
const b=10;
console.log(b);
// Variables declared with let are also hoisted, but they remain in a "temporal dead zone" (TDZ) 
// from the start of the block until the declaration is encountered.
// Accessing the variable within the TDZ causes a ReferenceError.

// function Hoisting
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}


const accountid = 122233;
let accountEmail = "ak06666664@gmail.com";
// var accountPassword = 1343243;
// prefer not to use var because of block and functional scope problem

let accountCity = "patna";
let accountState // undefined

// accountid = 7632; // not allowed to redefine the const variables
// console.log(accountid);

console.table({ accountid, accountEmail, accountCity ,accountState});
