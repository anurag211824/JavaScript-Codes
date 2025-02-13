var arr = [1,2,67,3,4]
const [first,...rest]=arr;
console.log(first);
console.log(rest);

// if we write arr2 = arr then arr2 and arr will point to the same array and if we modify something in the arr2 it will
// also effect the arr 
// if we use the spread opperator the original array will be copied in the arr2
var arr2 = [...arr];

arr2.pop();
console.log(arr);


function add(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(add(...numbers)); 


//Object destu
const user = {
    id:1,
    name:"anurag"
}

const {id:userId}=user;
console.log("user id :", userId);