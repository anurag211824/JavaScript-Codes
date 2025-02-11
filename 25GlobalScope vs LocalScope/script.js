debugger

//This two vars are in window object of global scope
var a=3
var ab=4
//This are two in script object of global scope
const username="Anurag"
let userAge=21

// Yes, in JavaScript:

// Variables declared with var (a and ab) are attached to the global 
// object (window in browsers or global in Node.js).

// Variables declared with let and const (username and userAge) exist 
// in the script scope but are not attached to the global object.


console.log(window.a);   // 3
console.log(window.ab);  // 4
console.log(window.username); // undefined
console.log(window.userAge);  // undefined


function add(){
    const x=7
    const y=8
    console.log(x+y)
    console.log(username);
    
}
add()
subtract()
function subtract(){
    const x=5
    const y=3
    console.log(x-y)
}

console.log("Program ended");


