// Function to print each letter of the name "HITESH" on a new line
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// Uncomment the line below to call the function and see the output
// sayMyName()

// Function to add two numbers and print the result
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
  // Calculate the sum of number1 and number2
  // let result = number1 + number2
  // return result

  // Return the sum directly
  return number1 + number2;
}

// Call the function addTwoNumbers with arguments 3 and 5 and store the result in a variable
const result = addTwoNumbers(3, 5);

// Uncomment the line below to print the result
// console.log("Result: ", result);

// Function to generate a login message for a user
function loginUserMessage(username = "sam") {
  // Check if username is provided
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  // Return a message indicating the user has logged in
  return `${username} just logged in`;
}

// Call the function loginUserMessage with argument "hitesh" and print the result
//console.log(loginUserMessage("hitesh"));

// Uncomment the line below to call the function and print the login message for "hitesh"
// console.log(loginUserMessage("hitesh"));

//................................................................................................................................

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));

function calculateCartPrice(itemPrice1, itemPrice2, ...additionalCosts) {
  // Sum up the item prices and additional costs
  const totalPrice = [itemPrice1, itemPrice2, ...additionalCosts].reduce(
    (acc, current) => acc + current,
    0
  );
  return totalPrice;
}

// Example usage
const total = calculateCartPrice(10, 5, 100, 200, 7999);
//console.log(total); // Output will be 315
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//1 functional declartaion

function greet(name) {
  console.log("Hello " + name);
}
//greet("anurag");

function addnumbers(a, b) {
  console.log(a + b);
}
//addnumbers(6,7)

const addNumbers = (a, b) => {
  return a + b;
};

//console.log(addNumbers(3,4));

// function expression
//a function expression is way to define  afunction as part of an expression. it can be named or anonymous

let check = function oddEven(num) {
  if (num % 2 == 0) console.log("even");
  else console.log("odd");
};
check(7);

//Anonymous functions
let percentage = function (totalMarks, obtainedMarks) {
  return (obtainedMarks / totalMarks) * 100;
};

//console.log(percentage(500,445));

let arr = [8, 3, 4, 2, 1, 3, 4];

let doubleArray = arr.map((currEle) => {
  return 2 * currEle;
});
console.log(`the doubled array is: ${doubleArray}`);

let array = [1, 2, 3, , 55, 6, 7, , 2, , 17, 9, 3, 2, 4, 6];

let oddarray = array.filter((currEle) => {
  if (currEle % 2 == 1) {
    return currEle;
  } else {
    return 0;
  }
});
console.log(`the odd Array is ${oddarray}`);

let arraySum = array.reduce((accum, currEle) => {
  return accum + currEle;
}, 0);
console.log(`The sum of array is ${arraySum}`);

const numbers = [1, 2, 3, 4, 5, 6];

const sumofEvenNumbers = numbers
  .filter((currEle) => {
    return currEle % 2 == 0;
  })
  .reduce((accum, currEle) => {
    return accum + currEle;
  }, 0);

console.log(`The sum of even numbers is ${sumofEvenNumbers}`);
