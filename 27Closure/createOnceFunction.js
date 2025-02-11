function createOnceFunction(){
    let executed=false

    return function(){
        if(!executed){
            executed=true
            console.log("This function is executed once")
        }
    }
}
const z=createOnceFunction()
z()
