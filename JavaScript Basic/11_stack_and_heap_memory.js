//stack (Primitive data type)
let myYoutube="anurag"
let anotherName=myYoutube
anotherName="deepak"
console.log(myYoutube)
console.log(anotherName);


//heap(Non-primitive type)
let useerOne={
    email:"anurag123@gmail.com",
    upi:"131414"
}
let userTwo=useerOne

userTwo.email="deepak@gmail.com"
console.log(useerOne.email);