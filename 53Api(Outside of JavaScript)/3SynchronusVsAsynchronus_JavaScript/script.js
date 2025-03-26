const blockingBtn = document.querySelector(".blocking");
const startTime = Date.now();
let currentTime = startTime;
const p=document.querySelector('p')
const displayBtn = document.querySelector('.display')

blockingBtn.addEventListener("click", () => {
    console.log('blocked');
    
  while (startTime + 5000 > currentTime) {
    currentTime = Date.now();
  }
});

let flag=true
displayBtn.addEventListener("click", () => {
    if(flag){
      p.textContent='anurag'
      flag=false
    }
    else{
      p.textContent='akshay'
      flag=true
    }
   
})
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);

      // Display the image on the page
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random Dog";
      img.style.width = "200px";
      document.body.appendChild(img);
    } else {
      console.error("Error: ", xhr.statusText);
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Request failed");
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
