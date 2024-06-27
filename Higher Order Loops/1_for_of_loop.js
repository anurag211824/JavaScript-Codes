const arr =[1,2,3,4,5,5]
for(const num of arr){
    // console.log(num)
}

const names=["anurag","amitesh","deepak","akash","ytendra"]
for(const name of names){
    // console.log(name);
}

//Map
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United states of America")
map.set('Fr',"France")
//console.log(map);

for (let key of map){
    //console.log(key);
}

for(const [key,value] of map){
    // console.log(key,':-',value);
}


const myGames={
    'game1':"Need for speed",
    'game2':"Gta 5",
    'game3':"Asphalt8",
    'game4':"spider Man",
}

//objects are not iterable by for_of loops
// for(const [key ,value] of myGames){
//     console.log(key,':-',value);
// }

