const arr=[5,1,3,2,6]

//sum of array
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//using reduce method
const outputarr1=arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc;
},0)

console.log(outputarr1)


//find max
function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}
console.log(findMax(arr));

const outputarr2=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr
    }
    return max;
},0)

console.log(outputarr2)


//more complex example
const users = [
    { firstname: "anurag", lastname: "kumar", age: 21 },
    { firstname: "deepak", lastname: "sharma", age: 22 },
    { firstname: "abhinav", lastname: "shrivastav", age: 20 },
    { firstname: "akash", lastname: "kumar", age: 21 },
    { firstname: "ayush", lastname: "kumar", age: 20 },
    { firstname: "bhaskar", lastname: "bhist", age: 22 },
    { firstname: "anshul", lastname: "bhatt", age: 21 },
  ];

  // Count the number of occurrences of each age
const ageCounts = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
      acc[curr.age] += 1;
    } else {
      acc[curr.age]= 1;
    }
    return acc;
  }, {});
  console.log('ageCounts');
  console.log(ageCounts);