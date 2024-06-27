const myGames={
    'game1':"Need for speed",
    'game2':"Gta 5",
    'game3':"Asphalt8",
    'game4':"spider Man",
}

for(games  in myGames ){
    // console.log(games);
    //for keys
}

for(games in myGames){
    // console.log(myGames[games])
    //for values
}

for(const games in myGames){
    // console.log(`${games} : ${myGames[games]}`);
}

const programming=["js","cpp","java","c","python","rust"]

for(key in programming){
    //console.log(programming[key])
}
   
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United states of America")
map.set('Fr',"France")
//console.log(map);

//we cannot apply for_in loops
// for(const key in map){
//     console.log(key)
// }






//Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// console.log(a);
// var a=1

// console.log(b);
// let b=3