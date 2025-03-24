/*
Understanding the Event Loop & Callback Queue in JavaScript
------------------------------------------------------------
This script demonstrates JavaScript's event loop, call stack, callback queue, 
and Web APIs through a simple example.
*/

// Synchronous Execution - Added to Call Stack and executed immediately
console.log("Hi-1");

// Function Declaration (Stored in memory, not executed yet)
function helloWorld() {
    console.log("Hello World");
}

// Loop Execution (Synchronous, runs immediately in Call Stack)
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Asynchronous Operation (setTimeout moves to Web API)
setTimeout(() => {
    console.log("Hello World after 2 seconds"); // Moves to Callback Queue after 2 sec
}, 2000);

// More Synchronous Execution (Executed immediately)
console.log("Hi-3");
console.log("Hi-2");

/*
Explanation of Execution Order:
1. "Hi-1" -> Logs immediately (Call Stack)
2. Loop runs -> Logs 0,1,2,3,4,5 (Call Stack)
3. setTimeout starts -> Moves callback to Web API, timer starts (Async, non-blocking)
4. "Hi-3", "Hi-2" -> Logs immediately (Call Stack)
5. After 2 seconds -> Callback moves to Callback Queue
6. Event Loop moves callback to Call Stack when empty -> "Hello World after 2 seconds"

Final Output:
-------------
Hi-1
0
1
2
3
4
5
Hi-3
Hi-2
(After 2 sec delay) -> Hello World after 2 seconds

Concepts Covered:
-----------------
1. **Call Stack** - Handles synchronous execution
2. **Web APIs** - Manages async operations (e.g., setTimeout)
3. **Callback Queue** - Stores async callbacks after Web API completion
4. **Event Loop** - Moves tasks from Callback Queue to Call Stack when empty
*/



for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i+1);
  }, 2000);
  console.log(i);
}

