// try{
//     console.log(a);
// }
// catch(err){
//     console.log(err.message);
// }
// finally{
//     console.log("This is always executed");
// }
// console.log(3+4);
// console.log("anurag");

async function makeRequest() {
  try {
    const url = "https://dummyjson.com/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);
    console.log("data received");
  } catch (error) {
    console.error(error.message);
  }
}
makeRequest();