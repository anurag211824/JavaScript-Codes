// JavaScript Concepts Demonstration

// 1. Default Parameters
function multiply(a, b = 1) {
    return a * b;
  }
  
  function rollADie(numberOfSides = 6) {
    return Math.floor(Math.random() * numberOfSides) + 1;
  }
  
  // 2. Spread Operator
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [6, 7, 8, 9, 10];
  
  // Merging arrays using spread
  const mergedArray = [...num1, ...num2];
  
  // Spreading objects
  const user = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };
  const updatedUser = { ...user, country: "United States" };
  
  // 3. Rest Parameters
  function totalMarks(...myMarks) {
    return myMarks.reduce((sum, mark) => sum + mark, 0);
  }
  
  const anurag = (a, b, ...rest) => {
    console.log("First two values:", a, b);
    console.log("Rest of the values:", rest);
  };
  
  // 4. Arguments Object (for older functions)
  function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  // Using spread with function call
  const sumOfMergedArray = add(...mergedArray);
  
  // 5. Working with Objects
  const cartItems = {
    item1: { name: "apple", price: 10, quantity: 2 },
    item2: { name: "orange", price: 15, quantity: 3 },
    item3: { name: "banana", price: 20, quantity: 1 },
    item4: { name: "maggie", price: 20, quantity: 2 },
  };
  
  // Calculating total price using Object.values and reduce
  const totalPrice = Object.values(cartItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  // 6. Using Rest with Reduce Function
  function anuragAddition(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
  }
  
  // 7. Array Destructuring
  const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  const [color1, color2, color3] = colors;
  const { 3: color4 } = colors;
  console.log(color1, color2, color3, color4);
  
  // 8. Object Destructuring
  const userDetails = {
    userName: "Anurag",
    age: 21,
    address: {
      city: "Patna",
      state: "Bihar",
      country: "India",
    },
  };
  
  const { userName: nameOfuser, age } = userDetails;
  console.log(nameOfuser, age);
  
  const {
    address: { city },
  } = userDetails;
  console.log(city);
  
  // 9. Function Parameter Destructuring
  function intro({ userName, age }) {
    console.log(userName, age);
  }
  intro(userDetails);
  
  // Console logs (for testing)
  console.log("Rolling a die (10 sides):", rollADie(10));
  console.log("Merged array:", mergedArray);
  console.log("Updated user object:", updatedUser);
  console.log("Total marks:", totalMarks(85, 92, 78, 95, 88, 91));
  anurag(1, 2, 3, 4, 5, 6, 7, 8, 9);
  console.log("Total cart price:", totalPrice);