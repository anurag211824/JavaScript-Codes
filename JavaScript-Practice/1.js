function removeEgg(arr){
    temp=[]
    for(let i=0;i<arr.length;i++){
       if(arr[i]!="egg"){
        temp.push(arr[i]);
       }
    }
    return temp;
}
arr=['apple','egg','milk','mango','egg','grapes','egg',"roti"]
let newarr=removeEgg(arr);
console.log(newarr);

function removeTwoEgg (arr){
    temp=[]
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='egg'){
            count++;
        }
        if(count<=2 && arr[i]==='egg'){
            continue
        }
        else{
            temp.push(arr[i])
        }
    }
     return temp;
}
let newArray=removeTwoEgg(arr);
console.log(newArray);
