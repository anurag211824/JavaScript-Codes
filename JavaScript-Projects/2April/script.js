let container = document.querySelector(".container");
let boxArray = Array.from(container.children)
 
function randomColorGenrator(){
    return Math.floor(Math.random()*256);
}

document.addEventListener("click",function(){
    boxArray.forEach((box)=>{
        let r = randomColorGenrator()
        let g = randomColorGenrator()
        let b =randomColorGenrator();
        box.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
})
