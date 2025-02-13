let list=[1,2,34,5,67,8,6,44,3,2,34,4,6,67,7]

list.forEach(function(num,ind){
    if(num===34)
        return;
    console.log("num:",num,"index:",ind);
    
})