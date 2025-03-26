function getRandomDogImage(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((json) => {
    dog = json;
    console.log(json);
    document.querySelector("img").src = dog.message;
  });
}


function sayHi(){
  console.log("Hello, my name is Doggy!");
}
