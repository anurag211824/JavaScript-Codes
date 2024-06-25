const arr=[5,1,3,2,6]

function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2==0;
}
function greaterThan4(x){
    return x>4;
}

const outputarr1=arr.filter(isOdd)
console.log(outputarr1)

const outputarr2=arr.filter(isEven)
console.log(outputarr2)

const outputarr3=arr.filter(greaterThan4)
console.log(outputarr3)

const outputarr4=arr.filter((x)=>x>4)
console.log(outputarr4);


//more complex example
const users = [
    { firstname: "anurag", lastname: "kumar", age: 21 },
    { firstname: "deepak", lastname: "sharma", age: 22 },
    { firstname: "abhinav", lastname: "shrivastav", age: 20 },
    { firstname: "akash", lastname: "kumar", age: 21 },
    { firstname: "ayush", lastname: "kumar", age: 20 },
    { firstname: "bhaskar", lastname: "bhist", age: 22 },
    { firstname: "anshul", lastname: "bhatt", age: 21 },
];

// Filter users with age less than 21 and map their first names
const firstNameAgeLessThan21 = users.filter((x) => x.age < 21).map((x) => x.firstname);

console.log(firstNameAgeLessThan21); // Output: ["abhinav", "ayush"]

