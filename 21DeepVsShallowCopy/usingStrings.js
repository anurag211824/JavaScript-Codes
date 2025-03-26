const customer1 = {
    name: 'Mohan',
    age: 25,
    pata: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    cart: ['kurkure', 'jeans', 'pant', 'hoodies']
};

// Shallow Copy (Modifies original object)
const customer2 = { ...customer1 };
customer2.pata.city = 'Patna'; 
customer2.cart.push('books');

console.log("Customer 1 (After shallow copy modification):", customer1);
console.log("Customer 2:", customer2);

// Deep Copy using JSON methods
const customer3 = JSON.parse(JSON.stringify(customer1));
customer3.pata.city = 'Mumbai';
customer3.cart.push('shoes');

console.log("Customer 1 (After deep copy modification):", customer1);
console.log("Customer 3:", customer3);
