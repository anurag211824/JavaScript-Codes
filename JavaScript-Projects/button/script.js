let count=0;
let countText=document.querySelector(".demo")
countText.textContent=count;
function increase(){
   count++;
   countText.textContent=count;
}
function decrese(){
   count--;
   countText.textContent=count;
}