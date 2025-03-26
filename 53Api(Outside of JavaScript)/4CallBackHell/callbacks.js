const signUp = (name, callback) => {
    console.log(`Hello ${name}`);
    setTimeout(() => {
        callback();
    }, 2000);
    console.log("You are getting logged in.....");
    
};

const login = (callback) => {
    console.log("You are now logged in");
    callback();
};

const fetchUser = (callback) => {
    setTimeout(()=>{
        callback();
    },2000)
    console.log("Fetching user.....");
   
};

const showDataBase = () => console.log("Here is Your Database...");

// Executing callbacks in sequence
signUp("Anurag", () => {
    login(() => {
        fetchUser(() => {
            showDataBase();
        });
    });
});
