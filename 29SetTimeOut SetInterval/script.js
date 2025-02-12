const timeout1 = setTimeout(`console.log("Hi-1")`, 1000);
const timeout2 = setTimeout("console.log('Hi-2')", 2000);
const timeout3 = setTimeout("console.log('Hi-3')", 3000);
const timeout4 = setTimeout("console.log('Hi-4')", 4000);
const timeout5 = setTimeout("console.log('Hi-5')", 5000);
const timeout6 = setTimeout("console.log('Hi-6')", 6000);
console.log("Timeout IDs:", timeout1, timeout2, timeout3, timeout4, timeout5, timeout6);

let count = 0;
const recursiveFib = (n) => {
    if (n === 0 || n === 1) return n;
    return recursiveFib(n - 2) + recursiveFib(n - 1);
};

// Start the interval **after** the last timeout (after 6 seconds)
setTimeout(() => {
    console.log("Starting Interval Execution...");

    const timeIntervalId = setInterval(() => {
        console.log(recursiveFib(10)); 
        console.log("JAI SHREE RAM");
        console.log(timeIntervalId);
        console.log(`Count: ${count}`);
        
        if (count >= 5)
             clearInterval(timeIntervalId);
        count++;
    }, 1000);
}, 6000);

