// Function demonstrating the rest operator
function addNumbers(a, b, c, ...other) {
    // 'other' captures any additional arguments passed to the function into an array
    //console.log(other); 
    // Uncomment to see the array of additional arguments
    return a + b + c;
}
const res = addNumbers(2, 4, 5, 6, 7, 8, 9); // Only the first three arguments are used for addition
//console.log(res); 
// Uncomment to see the result of the addition

// Function demonstrating the spread operator
function getNames(name1, name2) {
    // Logs the first three names passed as arguments
    console.log(name1, name2); 
    // Uncomment to see the names
}

const names = ["anurag", "deepak", "abhinav", "ayush"];
getNames(...names); // The spread operator breaks the array into individual arguments

const students = {
    name: "anurag",
    age: "28",
    hobbies: ["cricket", "singing"]
};

// Using the rest operator to capture all properties of the 'students' object
const { ...rest } = students;
//console.log(rest); // Logs the entire 'students' object

// Using the spread operator to create a new object by copying properties from the 'students' object
const newstudent = {
    ...students, // Copies all properties from the 'students' object
    age: 29, // Overwrites the 'age' property
};
//console.log(newstudent); // Logs the new 'newstudent' object with the updated 'age' property
