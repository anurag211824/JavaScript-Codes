const fs1 = require('fs');
// Synchronously read from file3.txt
const data = fs1.readFileSync('file3.txt', 'utf-8');
// Output the contents of the file to the console
console.log(data);


// Asynchronously read from file3.txt
const fs2=require('fs');
fs2.readFile("file3.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})
