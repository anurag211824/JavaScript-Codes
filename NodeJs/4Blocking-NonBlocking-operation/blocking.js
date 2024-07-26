const fs=require("fs")

console.log("1");
//blocking operation
const result=fs.readFileSync("contact.txt","utf-8");
console.log(result);
console.log("2");