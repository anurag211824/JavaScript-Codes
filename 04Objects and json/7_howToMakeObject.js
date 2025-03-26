const person = {
  name: "Anurag",
  age: 20,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Anurag
//.....................................................................................
const car = new Object();
car.brand = "Tesla";
car.model = "Model 3";
car.display = function () {
  console.log(`${this.brand} ${this.model}`);
};

car.display(); // Output: Tesla Model 3
//........................................................................................

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  const user1 = new Person("Anurag", 20);
  user1.greet(); // Output: Hi, I'm Anurag and I'm 20 years old.
  

  let u = 12, v = 48;
  [u, v] = [v, u];
  console.log(v, u);
  

  