function a() {
  console.log("Inside A");
  console.log(x);
  b();
  function b() {
    console.log("Inside B");
    console.log(x);
    c();
    function c() {
      console.log("Inside C");

      console.log(x);
    }
  }
}
var x = 10;
a();
