let count=0;
let countText=document.querySelector(".demo")
countText.textContent=count;
let btnI=document.querySelector(".btnI")
let btnD=document.querySelector(".btnD")

btnI.addEventListener("click",()=>{
   count++;
   countText.textContent=count;

})

btnD.addEventListener("click",()=>{
   count--;
   countText.textContent=count;
})