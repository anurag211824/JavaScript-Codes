const btn=document.querySelectorAll('.buttons');
const body = document.querySelector('body');

btn.forEach(function (button) {
    button.addEventListener('click', function (e) {
      if (e.target.id === 'grey') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'tomato') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'pink') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'green') {
        body.style.backgroundColor = e.target.id;
      }
    });
  });

// const container = document.querySelector(".container");

//event Delegation
// container.addEventListener("click", (e) => {
//   if (e.target.id === "grey") {
//     body.style.backgroundColor = e.target.id;
//   }
//   if (e.target.id === "tomato") {
//     body.style.backgroundColor = e.target.id;
//   }
//   if (e.target.id === "blue") {
//     body.style.backgroundColor = e.target.id;
//   }
//   if (e.target.id === "yellow") {
//     body.style.backgroundColor = e.target.id;
//   }
//   if (e.target.id === "pink") {
//     body.style.backgroundColor = e.target.id;
//   }
//   if (e.target.id === "green") {
//     body.style.backgroundColor = e.target.id;
//   }
// });
