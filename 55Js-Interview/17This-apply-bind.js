// let name1 = {
//   firstname: "AKshay",
//   lastname: "Saini",
//   printFullName: function () {
//     console.log(this.firstname + " " + this.lastname);
//   },
// };

// name1.printFullName();

// let name2 = {
//   firstname: "Anurag",
//   lastname: "Kumar",
// };

// let name3 = {
//   firstname: "Sachin",
//   lastname: "Tendulakar",
// };
// // function borrowing
// name1.printFullName.call(name2);

// let printName = function (homeTown, state) {
//   console.log(this.firstname + " " + this.lastname + " from " + homeTown +" " + state);
// };
// // Call
// printName.call(name3,"Mumbai","Maharashtra")
// // apply
// printName.apply(name2,["Patna","Bihar"])

// // bind
// let printdetails = printName.bind(name1,"Dehradun","Uttarakhnad")
// console.log(printdetails);
// printdetails()


// call: Invokes a function, allowing you to specify the value of this and pass arguments one by one.
// Example: printName.call(name3, "Mumbai", "Maharashtra") calls printName with this set to name3.

// apply: Similar to call, but arguments are passed as an array.
// Example: printName.apply(name2, ["Patna", "Bihar"]) calls printName with this set to name2.

// bind: Returns a new function with this bound to the specified object and optional preset arguments. The function is not called immediately; you can call it later.
// Example:

'use strict'
function greet(){
    console.log("Hello",this.name)
}
greet()