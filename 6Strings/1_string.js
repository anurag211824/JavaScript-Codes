const name = "anurag";
const repocount = 50;

// Using template literals for string interpolation
//console.log(`Hello, my name is ${name} and my repo count is ${repocount}`);

const gameName = new String("anuragKumar");

//string string Methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('3'));

const newstring = gameName.substring(0, 4);
//console.log(newstring);

const str = "JavaScript";
const slicedStr = str.slice(-6, -1);
console.log(slicedStr); // "Scrip"

// this example, slice(-6, -1) extracts the substring starting 6 characters from the end and ending 1
// character from the end, resulting in "Scrip"

const newStringOne = "   anuragkumar   ";
console.log(newStringOne.trim());

const url = "https://anurag_kumar.com";

console.log(url.replace("_", "&"));

console.log(url.includes("anurag"));

//string to array based on certain condititon
const str1 = "anurag_Kumar_deepak_abhinav";
console.log(str1.split("_"));
