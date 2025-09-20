// console.log("Start");
// document.getElementById('btn')
// .addEventListener("click",function cb(){
//     console.log("Callback")
// })

// console.log("End");



console.log("Start")

setTimeout(function cbt(){
    console.log("CB SetTimeOut");
    
},5000)

fetch("https://dummyjson.com/posts")
  .then(async function cbf(response) {
    const data = await response.json(); 
    console.log(data); 
  })
  .catch(function (error) {
    console.error("Error fetching posts:", error);
  });

console.log("End");
