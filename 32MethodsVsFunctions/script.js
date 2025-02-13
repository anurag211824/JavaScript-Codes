//A function that is in a object is method
const maths = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    if (b != 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero");
    }
  },
  square: function (a) {
    return a * a;
  },
  subtract(a, b) {
    return a - b;
  },
  cube(a) {
    return a ** 3;
  },
};

