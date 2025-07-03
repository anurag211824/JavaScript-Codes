// Current Date & Time
const now = new Date();
console.log(now); // Example: Wed Jul 03 2025 12:00:00 GMT+0530

// Getting Date Parts
const date = new Date();
console.log(date.getFullYear());   // 2025
console.log(date.getMonth());      // 6 (July)
console.log(date.getDate());       // 3
console.log(date.getDay());        // 4 (Thursday, 0 = Sunday)
console.log(date.getHours());      // current hour
console.log(date.getMinutes());    // current minute
console.log(date.getSeconds());    // current second


// ✅ 4. Formatting Dates
// ➤ Using .toLocaleString() and variants:
const date2 = new Date();
console.log(date2.toDateString());         // "Thu Jul 03 2025"
console.log(date2.toISOString());          // "2025-07-03T06:30:00.000Z"
console.log(date2.toLocaleDateString());   // "03/07/2025" (based on locale)
console.log(date2.toLocaleTimeString());   // "12:00:00 PM"