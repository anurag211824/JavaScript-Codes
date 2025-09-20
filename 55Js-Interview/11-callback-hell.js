// console.log("Namaste");
// setTimeout(()=>{
//     console.log("Season 2");

// },5000)
// console.log("JavaScript");

// setTimeout(()=>{
//  console.log("first task done")
//  setTimeout(()=>{
//     console.log("second task")
//  },1000)
// },4000)
//.........................................................................................................................
function getUser(callback) {
  setTimeout(() => {
    callback({ name: "Anurag" });
  }, 2000);
}

function getPosts(user, callback) {
  setTimeout(() => {
    console.log("Welcome", user.name);
    callback(["post 1","post 2","Post 3"])
  }, 3000);
}

function getComments(posts,callback){
    setTimeout(()=>{
        console.log(posts);
        callback(["nice","awasome","beautiful"])
        
    })
}

getUser((user) => {
  getPosts(user, (posts) => {
    getComments(posts, (comments) => {
      console.log(comments);
    });
  });
});
//....................................................................................................
function login(email,password,cb){
    if(email && password){
        cb({name:"Anurag"})
    }
}
function getProfile(user,cb){
    console.log(user);
    cb(["hi","bye"])
    
}

login("email","password",(user)=>{  
  getProfile(user,(posts)=>{
    console.log(posts);
    
  })
})