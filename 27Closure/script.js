//debugger
function grandParent() {
  const p = 4;
  function parent() {
    const a = 10;
    const c = 20;
    console.log(a);
    alert("Hello from Parent");
    function child() {
      const b = 20;
      console.log(c);
      console.log(a);
      console.log(b);
      console.log(p);

      alert("Hello from Child");
    }
    // child()

    return child;
  }
  // parent()

  const x = parent();
  const y = parent();
  console.dir(x);
  console.dir(y);
}
grandParent();
