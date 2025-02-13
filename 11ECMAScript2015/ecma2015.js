//1>Introduction of let and const
let mysalary = 100000;
console.log(mysalary);
mysalary = 200000;
console.log(mysalary);
const myname = "anurag";
// myname=abhinav
// console.log(myname);

//2>Template string
let firstname = "Anurag";
let lastname = "Kumar";
let fullname = `${firstname} ${lastname}`;
console.log(fullname);
//string Interpolation :template string support string interpolation ,allowing you to embed
//expressions directly within the string .Interplated expressions are enclosed in ${}
myage = 21;
let message = `i am ${myage} years old`;
console.log(message);

//3>Default Parameters
function sum(a, b = 0) {
  console.log(a + b);
}
sum(2, 15);
sum(10)

//4>Fat Arrow function
const totalmarks=(math,sci,eng)=>{
    console.log(`TotalMarks:${math+sci+eng}`);
    return math+sci+eng;
}

let myMarks=totalmarks(98,78,98);
console.log(myMarks);
