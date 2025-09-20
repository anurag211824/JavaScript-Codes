// Block Scope
debugger
{
  var a = 10;
  let b = 34;
  const c = 56;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
// console.log(b); ref error
// console.log(c);

//Shadowing in javascript
var x = 19;
let m = 100;
{
  var x = 10;
  let m = 10;
  // let is shadowed
  console.log(m);

  console.log(x);
}
console.log(m);

console.log(x);
