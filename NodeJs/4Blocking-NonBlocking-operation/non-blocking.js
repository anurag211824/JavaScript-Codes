const fs=require("fs")

console.log("1");
//Non-blocking operation
fs.readFile("contact.txt","utf-8",(err,res)=>{
 console.log(res);
});
console.log("2");





//the code below tell us the total number of thread pool our system can have
// const os = require("os");
// console.log(os.cpus().length);
