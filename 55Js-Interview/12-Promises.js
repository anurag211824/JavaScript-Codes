// const promise =   new Promise((resolve,reject)=>{
//    document.getElementById("promise1").addEventListener("click",() => resolve("resolved"))
//    document.getElementById("promise2").addEventListener("click",()=> reject("rejected"))
// })

// promise.then(result=>{
//    console.log(result);
   
// }).catch(err=>{
//    console.log(err);
   
// })

const myPromise = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("Resolves here is the data")
   },10000)
})
const ApiResponse = async ()=>{
   
    const res = await myPromise;
    return res;

}
console.log(ApiResponse());

ApiResponse().then((result)=>{
   console.log(result);
   console.log(ApiResponse());
   
})
console.log(ApiResponse());

