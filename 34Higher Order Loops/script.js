const arr = [1, 2, 3, 4, 5, 5];

for (const num of arr) {
  // console.log(num);
}

const names = ["anurag", "amitesh", "deepak", "akash", "ytendra"];

for (const name of names) {
  // console.log(name);
}

// Map
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);

for (const key of map) {
  // console.log(key);
}

for (const [key, value] of map) {
  // console.log(key, ':-', value);
}

// Objects (Not iterable using for...of)
const myGames = {
  game1: "Need for Speed",
  game2: "GTA 5",
  game3: "Asphalt 8",
  game4: "Spider-Man",
};

for (const game in myGames) {
  // console.log(game);  // For keys
}

for (const game in myGames) {
  // console.log(myGames[game]);  // For values
}

for (const game in myGames) {
  // console.log(`${game} : ${myGames[game]}`);
}

// Array iteration using for...in
const programming = ["js", "cpp", "java", "c", "python", "rust"];

for (const key in programming) {
  // console.log(programming[key]);
}

// Map does not support for...in loops
// for (const key in map) {
//     console.log(key);
// }

// Hoisting behavior
// console.log(a);
// var a = 1;

// console.log(b);
// let b = 3;

// forEach Loop
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  // console.log(val);
});

coding.forEach((item, index, arr) => {
  //console.log(item, index, arr);
});

// Output:
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// forEach useful in databases
const studentList = [
  {
    studentName: "anurag",
    roll: 1,
    percentage: 98,
  },
  {
    studentName: "abhinav",
    roll: 2,
    percentage: 98,
  },
  {
    studentName: "deepak",
    roll: 5,
    percentage: 98,
  },
];

studentList.forEach((student) => {
  //console.log(student.studentName);
});
/*__________________________________________________________________________________*/

const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "pear",
  "plum",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon",
  "zucchini",
];
 
for(let i=0;i<fruits.length;i++) {
    //console.log(fruits[i]);
}

for(const fruit of fruits) {
    //console.log(fruit);
}

const user='anurag'
for(const letters of user){
    //console.log(letters);
}


const person = {name: 'John', age: 30, city: 'New York'};
for (const key in person){
    //console.log(person[key]);
    
}

const personkeys=Object.keys(person)
//console.log(personkeys);
for (const key of personkeys){
    //console.log(person[key]);
}
const personValues=Object.values(person)
console.log(personValues);

const personEntries=Object.entries(person)
//console.log(personEntries);

fruits.forEach((fruit)=>{
    //console.log(fruit);
})

// Pass the function reference to forEach
fruits.forEach(function filterFruitsHavingA(fruit) {
    if (fruit.includes("z")) {
        //console.log(fruit);
    }
});






