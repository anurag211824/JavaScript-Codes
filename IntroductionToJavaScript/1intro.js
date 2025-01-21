let a = document.querySelector(".a");
let b = document.querySelector(".b");
let local = document.querySelector(".local");
const res = document.querySelector("span");
const btn = document.querySelector("button");
const prevresult = document.querySelector(".prevResults");
btn.addEventListener("click", () => {
  let c = parseInt(a.value) + parseInt(b.value);
  res.innerHTML = String(c);
  let myResults = JSON.parse(localStorage.getItem("myResults")) || [];
  myResults.push(c);
  localStorage.setItem("myResults", JSON.stringify(myResults));
  displayResults(myResults);
});

const displayResults = (myResults) => {
  prevresult.innerHTML = "";
  myResults.forEach((item) => {
    const resultElement = document.createElement("div");
    resultElement.textContent = item+',';
    prevresult.appendChild(resultElement);
  });
};
local.addEventListener("click", () => {
  localStorage.clear();
  prevresult.innerHTML=""
});
