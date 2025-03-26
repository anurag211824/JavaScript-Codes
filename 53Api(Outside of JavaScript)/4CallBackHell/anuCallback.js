function signUp(name,callback){
    console.log(`hello ${name}`);
   setTimeout(()=>{
    callback()
   },2000)
    
}

function login(callback){
    console.log('You are now logged in');
    callback()

}
function fetchUser (callback){
    console.log('Fetching user');
    callback()
    
}
function showDataBase(){
    console.log('Here is Your Data base...');
}

signUp('anurag',()=>{
    login(()=>{
        fetchUser(()=>{
            showDataBase()
        })
    })
})