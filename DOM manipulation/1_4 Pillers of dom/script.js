// 4 pillers of DOM

// 1 Selecting an element
// 2 Changing HTML
// 3 Changing CSS
// 4 Add Event Listener

// 1
let a=document.querySelector("h1")
console.log(a)

// 2
let b=document.querySelector("h1")
b.innerHTML="HTML manipulated"

// 3
b.style.color="red";
b.style.backgroundColor="black"

// 4
b.addEventListener("click",function(){
    b.innerHTML="Ha bhai ho gya hu manipulate"
    a.style.color="yellow"
    a.style.backgroundColor="blue"
})




