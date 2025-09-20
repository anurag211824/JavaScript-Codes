const cart = [
  {
    name: "mobile",
    price: 100,
    quantity: 2,
  },
  {
    name: "laptop",
    price: 500,
    quantity: 1,
  },
  {
    name: "cloths",
    price: 100,
    quantity: 2,
  },
];
let walletBalance = 1000;
const validateCart = function (cart) {
  return cart.length >= 1;
};
const placeOrder = createOrder(cart);

placeOrder
  .then(({orderId, cart}) => {
    console.log("Your OrderId is ", orderId);
    return proceedToPayment(orderId, cart);
  })
  .then(({totalAmountToBePaid, cart}) => {
    console.log("Total amount to be paid is", totalAmountToBePaid);
    return orderSummary(cart, totalAmountToBePaid);
  }).then(({ cart, totalAmountToBePaid }) => {
    console.log("Order Summary is", cart);
    return updateWallet(walletBalance, totalAmountToBePaid);
  }).then((updatedWalletBalance)=>{
    console.log("Updated balance is", updatedWalletBalance);
  }).catch((error)=>{
    console.log(error.message);
    
  })

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Please add some product to cart");
      reject(err);
    }
    const orderId = Math.ceil(Math.random() * 10000);
    resolve({ orderId, cart });
  });
}

function proceedToPayment(orderId, cart) {
  return new Promise((resolve, reject) => {
    if (!orderId) {
      const err = new Error("Failed to create a orderId");
      reject(err);
    }
    const totalAmountToBePaid = cart.reduce(
      (acc, curr) => (acc += curr.price * curr.quantity),
      0
    );
    resolve({ totalAmountToBePaid, cart });
  });
}

function orderSummary(cart, totalAmountToBePaid) {
  return new Promise((resolve) => {
    resolve({ cart, totalAmountToBePaid });
  });
}

function updateWallet(walletBalance, totalAmountToBePaid) {
  return new Promise((resolve) => {
    walletBalance -= totalAmountToBePaid;
    resolve(walletBalance);
  });
}
