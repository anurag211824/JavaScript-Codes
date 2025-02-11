debugger
function parent(){
    let a=0;
    function child(increment){
        a+=increment;
        console.log(a);
    }
     return child
}

const x=parent()
const y=parent()

console.dir(x);
console.dir(y);
x(10)
console.dir(x);
y(15)
console.dir(y);


