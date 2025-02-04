// const username1='Anurag'
// let username2=username1
// username2=username2+' Kumar'

const fruits = ["apple", "banana", "cherry"];
const myFruits = fruits

myFruits.push('dates')
myFruits.push('grapes')

console.log(myFruits)
console.log(fruits) // original array is also changed


const user1={
    name: 'John',
    age: 30,
    email: 'john@example.com'
}

const user2=user1

user2.email='jane@example.com'
user1.name="anurag"

console.log(user1);
 console.log(user2); // original object is also changed



 const student1={
    name:'stark',
    age:20,
    roll_no:10
 }

//  const student2={}
//  Object.assign(student2,student1)

const student2={...student1}
const myFriends1=['abhinav','anshul','deepak','garima','bhaskar']


// Object.assign(myFriends2,myFriends1)
// console.log(myFriends1);
// console.log(myFriends2);
// myFriends2.push('himanshi')
// console.log(myFriends2);
// console.log(myFriends1);

const myFriends2=[...myFriends1,'Himanshi'];
console.log(myFriends2);
console.log(myFriends1);



mylang=['C','C++',"Java","JavaScript","JavaScript"]
let myFavLang =[].concat(mylang)
myFavLang.push('Python')
console.log(mylang);
console.log(myFavLang);


let myMarks=['78','56','76','98',"57"]
let myhighMark=myMarks.slice()

myhighMark.sort((a,b)=>b-a)

console.log(myMarks);

console.log(myhighMark);




const customer1={
    name:'Mohan',
    age:25,
    pata:{
        street:'123 Main St',
        city:'New York',
        state:'NY'
    },
    cart:['kurkure','jeans','pant','hoodies']
}
//Shallow Copy
const customer2={...customer1}
customer2.pata.city='Patna'
customer2.cart.push('books')
console.log(customer1)
console.log(customer2);

