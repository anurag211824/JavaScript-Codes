const h1=document.querySelector('h1')
// h1.addEventListener('keypress',function (e){
//     console.log(e.key)
//     if(e.key==='Enter'){
//         alert('You pressed Enter')
//     }
// })


window.addEventListener('keypress',function (e){
    console.log('Code:' ,e.code)
    console.log('Key',e.key)
    if(e.key==='Enter'){
        alert('You pressed Enter')
    }
})