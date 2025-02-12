function a(b){
    console.log("a function called");
    console.dir(b);
    console.log(typeof(b))
    
}
// a("hii")
// a({userName:"anurag",userage:21})
// a([1,4,4,5,])
// console.log(a);
// console.dir(a);
// console.log(typeof(a));


function abcd(){
    console.log("abcd function called");
    return "hello world";

}
const anu=abcd()
a(anu)
a(function(){
    console.log("anonymous function called");
   
})






