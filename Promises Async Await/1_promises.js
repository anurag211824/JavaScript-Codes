function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="🧀";
            resolve(cheese)
            //reject("Bad cheese")
        },2000)
    });
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=cheese+"🍩";
            resolve(dough);
        },2000)
    });
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Pizza=dough+"🍕";
            resolve(Pizza);
        },2000)
    });
}


// using then finally catch

getCheese().then((cheese)=>{
    console.log("here is the cheese",cheese);
    return makeDough(cheese)
}).then((dough)=>{
    console.log("here is dough",dough);
    return bakePizza(dough);
}).then((Pizza)=>{
    console.log("here is the pizza",Pizza);
}).catch((data)=>{
    console.log("error occuured",data);
}).finally(()=>{
    console.log("process ended");
});


// using asyn await

async function orderPizza(){
   try{
    const cheese=await getCheese();
    console.log("here is the cheese",cheese);
    const dough=await makeDough(cheese)
    console.log("here is dough",dough);
    const pizza=await bakePizza(dough);
    console.log("here is the pizza",pizza);
   }
   catch{
    console.log("error ocurred");
   }

}

orderPizza();




// Simulate an asynchronous operation using a Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000); // Simulates a 2 second delay
    });
}

// Async function using await to handle the Promise
async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Await pauses the execution until fetchData is resolved
    console.log(data); // Logs "Data fetched" after 2 seconds
}

// Call the async function
getData();
