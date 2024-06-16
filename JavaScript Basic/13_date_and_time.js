// Create a new Date object with the current date and time
let mydate = new Date();
console.log(mydate);  // Logs the current date and time

// Attempt to log the toDateString method itself (not invoked)
console.log(mydate.toDateString());  // Logs the function definition (needs to be invoked with parentheses)

// Attempt to log the toLocaleString method itself (not invoked)
console.log(mydate.toLocaleString);  // Logs the function definition (needs to be invoked with parentheses)

// Check the type of the mydate object
console.log(typeof mydate);  // Logs 'object' because Date objects are of type 'object'

// Create a new Date object for a specific date (June 12, 2024)
let myCreatedDate = new Date(2024, 5, 12);
console.log(myCreatedDate.toDateString());  // Logs the date as a human-readable string (e.g., 'Wed Jun 12 2024')

// Create a new Date object from a date string
let newDate = new Date("2023-06-12");
console.log(newDate.toLocaleString());  // Logs the date and time in the local format

// Get the current timestamp in milliseconds since January 1, 1970
let myTimeStamp = Date.now();
console.log(myTimeStamp);  // Logs the current timestamp

// Get the timestamp for the created date (June 12, 2024)
console.log(myCreatedDate.getTime());  // Logs the timestamp for the specified date

// Get the current timestamp in seconds since January 1, 1970
console.log(Math.floor(Date.now() / 1000));  // Logs the current timestamp in seconds

// Create another new Date object with the current date and time
let NewDate = new Date();
console.log(newDate);  // Logs the previously created newDate (June 12, 2023)
console.log(NewDate.getMonth());  // Logs the current month (0-11, where 0 is January and 11 is December)

// Log the current timestamp in milliseconds
console.log(NewDate.getTime());  // Logs the current timestamp in milliseconds

// Log the day of the month for the newDate object
console.log(`${newDate.getDate()}`);  // Logs the day of the month (e.g., '12')

// Attempt to set locale options for toLocaleString (incorrect syntax)
newDate.toLocaleString('default'), {
    weekday: "long"
};
