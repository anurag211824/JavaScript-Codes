const evenNumbers=[0,2,4,6,8,10,12,15]

const result=evenNumbers.some((num)=>{
    return num>10;
})
console.log(result);

const isOddpresent = evenNumbers.some((num, index) => {
    if (num % 2 !== 0) {
        console.log(`Odd number found at index ${index}`);
        return true;
    }
    return false;
});
console.log(isOddpresent);




const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: true (since all numbers are even)


const values = [5, 10, 15, 20, -1];

const allPositive = values.every((num) => num > 0);
console.log(allPositive); // Output: false (since -1 is not positive)


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

const allAreObjects = users.every((user) => typeof user === "object");
console.log(allAreObjects); // Output: true (since all elements are objects)
