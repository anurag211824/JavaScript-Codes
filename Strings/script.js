// ===========================
// JavaScript String Methods - Notes & Practice
// ===========================

// 1. Getting String Length
const message = "hello";
let size = message.length;
console.log("Length:", size); // Output: 5

// 2. Changing Case
const capitalMessage = message.toUpperCase();
console.log("Uppercase:", capitalMessage); // Output: "HELLO"

// 3. Trimming Whitespaces
const trimmedMessage = "      hello    ".trim().toUpperCase();
console.log("Trimmed:", trimmedMessage); // Output: "HELLO"

let trimStart = "     hi my name is anurag     ".trimStart();
console.log("Trim Start:", trimStart); // Output: "hi my name is anurag     "

let trimEnd = "     hi my name is anurag     ".trimEnd();
console.log("Trim End:", trimEnd); // Output: "     hi my name is anurag"

// 4. Searching in Strings
const movieName = "Avengers End Game";
console.log("Includes 'Av':", movieName.includes("Av")); // Output: true
console.log("Index of 'E':", movieName.indexOf("E"));   // Output: 9
console.log("Index of 'Av':", movieName.indexOf("Av")); // Output: 0

// 5. Replacing Substrings
let myIntro = "Hi my name is anurag";
console.log("Replaced:", myIntro.replace("Hi", "Hello")); // Output: "Hello my name is anurag"

let myString = "Hi my name is anurag";
console.log("Replace All:", myString.replaceAll("a", "A")); // Output: "Hi my nAme is AnurAg"

// 6. Concatenation
let myIntroDuction = "hi,My name is anurag Kumar";
let myCollege = "I am a College student";
console.log("Concatenated:", myIntroDuction.concat(".", myCollege));

// 7. Padding Strings
const lastFourDigits = "7856";
console.log("Pad Start:", lastFourDigits.padStart(16, "*")); // Output: "************7856"

const myPhoneNumber = "9876";
console.log("Pad End:", myPhoneNumber.padEnd(10, "*")); // Output: "9876******"

// 8. Reversing a String
const myGoal='Software Engineer';
console.log("Reversed:", myGoal.split('').reverse().join('')); // Output: "reenignE erawtfoS"

// 9. Character Extraction
console.log("Char at 2:", "Hello World".charAt(2)); // Output: "l"
console.log("Char Code:", "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charCodeAt(0)); // Output: 65

// 10. Splitting and Slicing Strings
const myAddress='I am from Patna';
console.log("Split Words:", myAddress.split(' ')); // Output: [ 'I', 'am', 'from', 'Patna' ]
console.log("Slice:", myAddress.slice(0,4)); // Output: "I am"

// 11. Template Literals
const templateString = `My phone number is ${9334759512}`;
console.log(templateString); 

// ===========================
// Practice Questions
// ===========================

// 1. Write a function to return the uppercase version of a string and its length.
function getUpperCaseAndLength(str) {
    return { upperCase: str.toUpperCase(), length: str.length };
}
console.log(getUpperCaseAndLength("hello world"));

// 2. Write a function to trim a given string.
function trimString(str) {
    return str.trim();
}
console.log(trimString("   JavaScript   "));

// 3. Check if "JavaScript" exists in a sentence.
function containsJavaScript(sentence) {
    return sentence.includes("JavaScript");
}
console.log(containsJavaScript("I love JavaScript"));

// 4. Find the index of 'o' in "Coding is fun".
console.log("Coding is fun".indexOf('o'));

// 5. Replace all occurrences of "dog" with "cat" in a sentence.
function replaceWord(sentence) {
    return sentence.replaceAll("dog", "cat");
}
console.log(replaceWord("The dog is barking. My dog loves bones."));

// 6. Merge "Frontend" and "Development".
console.log("Frontend".concat(" ", "Development"));

// 7. Mask a 6-digit number except for the last two digits.
function maskNumber(num) {
    return num.padStart(10, "*");
}
console.log(maskNumber("123456"));

// 8. Reverse a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("JavaScript"));

// 9. Extract the third character of a string.
function getThirdChar(str) {
    return str.charAt(2);
}
console.log(getThirdChar("Python"));

// 10. Split "I love coding in JavaScript" into words.
console.log("I love coding in JavaScript".split(" "));

// 11. Extract the first 5 characters from "Frontend Development".
console.log("Frontend Development".slice(0,5));

// 12. Use template literals to insert a variable into a sentence.
const lang = "JavaScript";
console.log(`My favorite programming language is ${lang}`);
