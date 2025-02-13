// Function that takes any number of arguments and returns them as an array
function calculateCartPrice1(...name) {
    return name;
}

// Creating an array of prices
const myCart1 = [200, 300, 490, 678, 435];

// Calling the function with elements of myCart1 and logging the result
console.log(calculateCartPrice1(200, 300, 490, 678, 435)); // [200, 300, 490, 678, 435]

// Function that takes two fixed arguments and any number of additional arguments, returns the additional arguments
function calculateCartPrice2(price1, price2, ...name) {
    return name;
}

// Creating an array of prices
const myCart2 = [200, 300, 490, 678, 435];

// Calling the function with elements of myCart2 and logging the result
console.log(calculateCartPrice2(200, 300, 490, 678, 435)); // [490, 678, 435]

// Creating an object with user details
const user = {
    username: "hitesh",
    prices: 199
}

// Function that takes an object and logs a formatted string using its properties
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Calling the function with the 'user' object
// Uncomment the line below to use the 'user' object
// handleObject(user)

// Calling the function with a new object
handleObject({
    username: "sam",
    price: 399
}); // Username is sam and price is 399

// Creating an array of numbers
const myNewArray = [200, 400, 100, 600];

// Function that returns the second value from an array
function returnSecondValue(getArray) {
    return getArray[1];
}

// Calling the function with 'myNewArray' and logging the result
// Uncomment the line below to use 'myNewArray'
// console.log(returnSecondValue(myNewArray)); // 400

// Calling the function with a new array and logging the result
console.log(returnSecondValue([200, 400, 500, 1000])); // 400
