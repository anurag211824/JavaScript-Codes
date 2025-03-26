const resolveBtn = document.querySelector("#resolvebtn");
const rejectBtn = document.querySelector("#rejectbtn");

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Promise rejected");
  });
});
setTimeout(() => {
  console.log("hi");
});
p.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise resolved or rejected");
  });
