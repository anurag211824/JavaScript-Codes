async function makeRequest() {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const data = await response.json();
  console.log(response);
  console.log(data);
  console.log("data received");
}
