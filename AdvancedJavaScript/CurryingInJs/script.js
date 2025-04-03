function multiplyNormal(x,y,z){
    return x * y * z;
}
multiplyNormal(2,3,5);
// multiplyNormal(2)(3)(5)


function multiply(x){
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
}

function infiniteCurrying(x){
    return function(y){
        if(y) return infiniteCurrying(x*y)
            return x;
    }
}


function multiplyByN(x){
    return function(y){
        return x*y;
    }
}

const multiplyBy4 = multiplyByN(4);   
console.log(multiplyBy4(5));
