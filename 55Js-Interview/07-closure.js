function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
// closure is a function bind together with its lexical environment

function a() {
  var s = 6;
  function b() {
    console.log(s);
  }
  return b;
}
var c = a();
console.log(c);
c()
debugger

function m (){
    var p = 67
    function n(){
        var t = 68
        function y(){
            console.log(p,t);
            
        }
        y()
    }
    n()
}
m()
