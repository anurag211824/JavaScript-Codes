//This two vars are in window object of global scope

'use strict';

var a = 3;
var ab = 4;
//This are two in script object of global scope
const username = "Anurag";
let userAge = 21;
subtract();
function subtract() {

  const x = 5;
  const y = 3;
  const z = 4;
  console.log(x - y);
  function child() {
    const childName = "Golu";
    console.log(childName);
    console.log(z);
{
  let num1=78
  console.log(num1);
  
}
// console.log(num1);

    function grandChild() {
      const grandChildName = "Kishore";
      console.log(grandChildName);
      console.log(childName);
      abc=90
      
    }
    grandChild();
  }
  child();
}
console.log(abc);
console.log("Program ended");
