function doSomething() {
  const username = "Anurag";

  function callBackFunction() {
    console.log(username);
  }
  console.dir(callBackFunction);
  setTimeout(callBackFunction,2000)
}
doSomething()
