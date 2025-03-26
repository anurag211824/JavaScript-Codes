// Function invocation: `this` refers to the global object (`window` in browsers, `global` in Node.js)
function hii() {
    console.log(this); // In non-strict mode, it logs `window` (or `global` in Node.js)
    // In strict mode ('use strict'), `this` will be `undefined`
}
hii();

const user = {
  firstname: "Anurag",
  lastname: "Kumar",
  tags: ["a", "b", "c", "d", "e", "f"],

  // ❌ Issue with `this` in a regular function inside a method
  fullName() {
    function getAge() {
      console.log("Getting age");
      console.log(this); // `this` refers to the global object (`window` in browsers)
    }
    getAge();
    console.log(this); // `this` refers to the `user` object
  },

  // ✅ Fixing `this` issue using `.forEach(callback, thisArg)`
  printTags() {
    console.log(this.tags); // Logs array ["a", "b", "c", "d", "e", "f"]

    this.tags.forEach(function (tag) {
      console.log(this); // `this` refers to `user` object because of `thisArg` in `forEach`
      console.log(tag);
    }, this); // Passes `this` as an explicit argument
  },

  // ✅ Normal function method: `this` refers to the object
  printTags: function () {
    console.log(this); // Logs the `user` object
  },

  // ❌ Arrow function: `this` does NOT refer to the object but the **lexical scope**
  printTags: () => {
    console.log(this); // Logs the global object (`window` in browsers, `global` in Node.js)
    // Arrow functions do NOT create their own `this`, they inherit from the **surrounding scope**.
  },
};

user.fullName(); // Calls fullName() and logs behavior of `this`
user.printTags(); // Calls printTags() and logs behavior of `this`

// 🔹 `this` in a constructor function
function Hi() {
  this.hello = "world"; // `this` refers to the newly created object
  console.log(this); // Logs the new object instance   
}

new Hi(); // Creates a new object with `hello: "world"`

// 🔹 `this` inside an event listener
const h1 = document.querySelector("h1");
const body = document.querySelector("body");

body.addEventListener("click", function (e) {
  console.log(e.target); // Logs the clicked element
  if (e.target === h1) {
    console.log("Clicked on h1"); // Checks if h1 was clicked
  }
  console.log(e.currentTarget); // Logs `body`, because `e.currentTarget` is where the event was attached
  console.log(this); // `this` refers to the `body` element in regular function expressions
});

// 🔹 `this` inside a class
class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    console.log(this); // Logs the new instance of User
  }

  getUser() {
    console.log(`Name: ${this.firstname} ${this.lastname}`); // Uses `this` to access instance properties
  }
}


