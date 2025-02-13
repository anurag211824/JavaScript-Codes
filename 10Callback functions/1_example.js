// Function that logs "hello" to the console
function sayHello(){
    console.log("hello");
}

// Function that logs "hi.." to the console
function sayHi(){
    console.log("hi..");
}

// Function that takes two numbers and a callback function as arguments
// It logs the sum of the two numbers and then calls the callback function
function add(num1, num2, callback){
    console.log(num1 + num2);
    callback(); // Calls the callback function
}

// Calling the add function with 10 and 20 as arguments, and sayHello as the callback
add(10, 20, sayHello); // Logs 30 and "hello"

// Calling the add function with 23 and 56 as arguments, and sayHi as the callback
add(23, 56, sayHi); // Logs 79 and "hi.."

// Calling the add function with 23 and 57 as arguments, and an anonymous function as the callback
add(23, 57, () => {
    console.log("bye..");
}); // Logs 80 and "bye.."
