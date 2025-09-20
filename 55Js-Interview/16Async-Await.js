/**
* 💡 What is async?
* What is await?
* How async await works behind the scenes?
* Examples of using async/await
* Error Handling
* Interviews
* Async await vs Promise.then/.catch
*
*/

// it always return a promise either we return 
// a new Promsise or simply return a value
// value is wrapped inside a promise and returned
const p = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("Promises Resolved value!!")
   },10000)
})
async function getData(){
    // return "Namaste"
    return p
}
const dataPromise = getData()
// console.log(dataPromise);
// dataPromise.then(res=>console.log(res+"1"))

// async and await are used to handle the promises
// await is keyword that can only be used inside 
// a async function
async function handlePromise(){
    const val = await p;
    // Js Engine was waiting for promise to resolved
    console.log("Namaste JavaScript");
    console.log(val+"2");
    
}
//handlePromise()


// Deep diving into async/await
const p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("promise resolved 1")
   },20000)
})
const p2 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
     resolve("promise resolved 2")
   },40000)
})


async function handlingPromise(){
    console.log("Hello world");
    const val1 = await p1;
    console.log("Namaste javascript1");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste javascript2");
    console.log(val2); 
}
//handlingPromise()


// fetch function given by browser



