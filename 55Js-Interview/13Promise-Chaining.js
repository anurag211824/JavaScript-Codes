const cart = ["Shoes", "pants", "kurta"];
const validateCart = function (cart) {
  return cart.length >= 1;
};
const promise = createOrder(cart);
console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(function (PaymentInfo) {
    console.log(PaymentInfo);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateOrder
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Sucessfull");
  });
}
