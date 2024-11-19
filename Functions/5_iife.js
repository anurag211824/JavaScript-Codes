// Immediately Invoked Function Expressions (IIFE)

// Named IIFE
(function chai() {
  console.log(`DB CONNECTED`);
})(); // The function is defined and immediately invoked

// IIFE using an arrow function
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh"); // The function is defined and immediately invoked with the argument 'hitesh'

// Explanation:

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// The function is wrapped in parentheses, which makes it a function expression.
// The parentheses at the end of the function expression immediately invoke the function.
// This pattern is often used to create a new scope and avoid polluting the global namespace.
//used for avoiding global population by global variables as they can be used in th function scope also

// Example 1: Named IIFE
(function chai() {
  // This code runs immediately when the script is executed
  console.log(`DB CONNECTED`); // Logs: "DB CONNECTED"
})();

// Example 2: IIFE using an arrow function
((name) => {
  // This code runs immediately when the script is executed
  console.log(`DB CONNECTED TWO ${name}`); // Logs: "DB CONNECTED TWO hitesh"
})("hitesh"); // The string 'hitesh' is passed as an argument to the IIFE

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Immediately Invoked Function Expressio
var result = (function (a, b) {
  console.log(a + b);
  return a + b;
})(4, 8);

console.log(result);
