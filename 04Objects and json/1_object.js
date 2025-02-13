// Define a symbol
const mySym = Symbol("key1");

// Define an object with various properties, including a symbol-keyed property
const student = {
    name: "anurag",
    roll_no: 10,
    [mySym]: "mykey1",
    age: 20,
    college: "Shivalik",
    coaching: "explorin"
};

// Accessing the object properties using bracket notation
console.log(student["name"]);      // Output: anurag
console.log(student["roll_no"]);   // Output: 10
console.log(student["age"]);       // Output: 20
console.log(student["college"]);   // Output: Shivalik
console.log(student["coaching"]);  // Output: explorin
console.log(student[mySym]);       // Output: mykey1 (accessing the symbol-keyed property)

// Modifying the object's property
student.name = "deepak";
console.log(student["name"]);      // Output: deepak

// Uncomment the following lines to see the effect of Object.freeze
// Object.freeze(student);
// student.name = "abhinav";
// console.log(student["name"]);    // Output: deepak (if Object.freeze is used, this won't change)

// Adding methods to the object
student.greeting1 = function() {
    console.log("hello world");
};
student.greeting2 = function() {
    console.log("namaste javascript");
};

// Invoking the methods
console.log(student.greeting1());  // Output: hello world
console.log(student.greeting2());  // Output: namaste javascript_