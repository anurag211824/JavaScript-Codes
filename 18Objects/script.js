// // Object Creation
// const user1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     education: 12,
//     skills: ["JavaScript", "React", "Node.js"],
//     fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   const user2 = { ...user1 }; // Object Cloning using Spread Operator
  
//   // Object Comparison (Shallow comparison)
//   const isEqual = JSON.stringify(user1) === JSON.stringify(user2);
//   console.log("Are user1 and user2 equal?", isEqual);
  
//   // Object Destructuring
//   const { firstName, lastName, age } = user1;
//   console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  
//   // Object Prototypes
//   function Person(firstName, lastName, age, education, skills) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.education = education;
//     this.skills = skills;
//   }
  
//   Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   const user3 = new Person("Alice", "Smith", 25, 14, ["Python", "Django"]);
//   console.log(user3.getFullName());
  
//   // Getters and Setters
//   const user4 = {
//     firstName: "Bob",
//     lastName: "Marley",
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name) {
//       const parts = name.split(" ");
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     },
//   };
  
//   console.log(user4.fullName);
//   user4.fullName = "Charlie Brown";
//   console.log(user4.fullName);
  
//   // Object Methods
//   console.log(Object.keys(user1)); // Get keys
//   console.log(Object.values(user1)); // Get values
//   console.log(Object.entries(user1)); // Get key-value pairs
  
//   // Object Class
//   class User {
//     constructor(firstName, lastName, age, education, skills) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//       this.education = education;
//       this.skills = skills;
//     }
  
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
  
//   const user5 = new User("David", "Beckham", 45, 16, ["Football", "Strategy"]);
//   console.log(user5.getFullName());





const user = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    pata: {
      city: 'Bangalore',
      pinCode: 876876,
      state: 'Karnataka',
      moreDetails: {
        population: 9798897897,
        area: '787 sq km'
      },
    },
    age: 15,
    isGraduate: false,
  };
  

  let userName="Anurag"




  // Object.freeze() Demonstration (Prevents adding, deleting, or modifying properties)
const frozenObj = { name: "Alice", age: 25 };
Object.freeze(frozenObj);
frozenObj.age = 30; // This will not work
frozenObj.city = "New York"; // This will not work
console.log(frozenObj); // { name: "Alice", age: 25 }

// Object.seal() Demonstration (Prevents adding or deleting properties but allows modification)
const sealedObj = { name: "Bob", age: 28 };
Object.seal(sealedObj);
sealedObj.age = 30; // This works
sealedObj.city = "Los Angeles"; // This will not work
console.log(sealedObj); // { name: "Bob", age: 30 }

// Using 'in' keyword to check for property existence
const user2 = {
  firstName: "Charlie",
  lastName: "Brown",
  age: 22,
};

console.log("age" in user2); // true
console.log("city" in user2); // false