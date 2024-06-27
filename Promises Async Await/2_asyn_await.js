// Simulate an asynchronous operation using a Promise
function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data fetched");
            //reject("Data not fecthed")
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