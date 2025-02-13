//functions declaration
function square(num) {
  return num * num;
}

//functions expression
const sqr = function (a) {
  return a * a;
};

//arrow functions expression

const sqrr = (a) => {
  return a * a;
};

const add = (num2, num1) => num2 + num1;

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 3000);

const random = () => Math.random();

const evenoddCheck = num => num % 2 === 0 ? "even" : " odd";
