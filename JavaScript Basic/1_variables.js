// //Hoisting:
// //1> Var
// console.log(num);//undefined
// var num=10;
// console.log(num);

// //2>let
// console.log(a);//ReferenceError
// let a=10;
// console.log(a);

// //3>const
// console.log(b);//ReferenceError
// const b=10;
// console.log(b);



const accountid = 122233;
let accountEmail = "ak06666664@gmail.com";
// var accountPassword = 1343243;
// prefer not to use var because of block and functional scope problem

let accountCity = "patna";
let accountState // undefined

// accountid = 7632; // not allowed to redefine the const variables
// console.log(accountid);

console.table({ accountid, accountEmail, accountCity ,accountState});

