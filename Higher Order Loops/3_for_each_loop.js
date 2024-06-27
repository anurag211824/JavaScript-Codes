const coding=["js","ruby","java","python","cpp"]

//passed only parameter curerntValue
coding.forEach( function(val){
    //console.log(val)
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
// output
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]



// foreach useful in data base

const studentList=[
 
    {
         studentName:"anurag",
         roll:1,
         percentage:98,
    },

    {
        studentName:"abhinav",
        roll:2,
        percentage:98,
    },

    {
        studentName:"deepak",
        roll:5,
        percentage:98,
    },

]

studentList.forEach((students)=>{
    console.log(students.studentName);
})