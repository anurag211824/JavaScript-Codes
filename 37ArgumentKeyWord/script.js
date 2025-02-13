function add() {
  let sum = Array.from(arguments).reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

  return sum;
}

console.log(add(1, 2, 3)); // Output: 6

function addition() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const sum = addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);
