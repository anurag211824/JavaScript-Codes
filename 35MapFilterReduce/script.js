const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const capitalMonths = months.map((month, index, arr) => {
  //console.log(index + 1, month.toUpperCase(), arr);
  return month.toUpperCase();
});
// console.log(capitalMonths);
// console.log(months);
const filterMonths=months.filter((month)=>{
    return month.startsWith('A') || month.length<=5
})
//console.log(filterMonths)
const filterMonthsArray=months.filter((month)=>{
    return month.length>5
})
//console.log(filterMonthsArray)
const monthswithMAlphabet=months.filter((month)=>{
    return month.includes('m') || month.includes('M')
})
console.log(monthswithMAlphabet);
const students=[
    {name:"anurag", age:20},
    {name:"ujjawal", age:23},
    {name:"abhinav", age:20},
    {name:"akash", age:20},
    {name:"ayush", age:20},
    {name:"bhaskar", age:21},
    {name:"deepak", age:22}
]
const adultStudents=students.filter((student)=>{
    return student.age>20;
})
console.log(adultStudents);
const marks=[90,95,90,80,90]
const totalMarks=marks.reduce((accumulator,current)=>{
    return accumulator+current;
},0)  
console.log(totalMarks);



