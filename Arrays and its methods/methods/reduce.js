const arr = [5, 1, 3, 2, 6];

// Sum of array elements using a for loop
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//console.log("Sum using for loop:", findSum(arr)); 
// Output: 17

// Sum of array elements using reduce method
let intialVal=0
const outputarr1 = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, intialVal);

//console.log("Sum using reduce method:", outputarr1); // Output: 17

//using arrow function
const arrTotal=arr.reduce((acc,curr)=>acc+curr,0)
//console.log(arrTotal);

// Find the maximum element in the array using a for loop
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
//console.log("Max using for loop:", findMax(arr)); 
// Output: 6

// Find the maximum element in the array using reduce method
const outputarr2 = arr.reduce(function(max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

//console.log("Max using reduce method:", outputarr2); 
// Output: 6

// More complex example: Array of user objects
const users = [
    { firstname: "anurag", lastname: "kumar", age: 21 },
    { firstname: "deepak", lastname: "sharma", age: 22 },
    { firstname: "abhinav", lastname: "shrivastav", age: 20 },
    { firstname: "akash", lastname: "kumar", age: 21 },
    { firstname: "ayush", lastname: "kumar", age: 20 },
    { firstname: "bhaskar", lastname: "bhist", age: 22 },
    { firstname: "anshul", lastname: "bhatt", age: 21 },
];

// Count the number of occurrences of each age using reduce method
const ageCounts = users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

//console.log("Age counts:", ageCounts); 
// Output: {20: 2, 21: 3, 22: 2}
