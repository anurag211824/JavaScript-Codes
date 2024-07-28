const express=require("express")
const users=require('./MOCK_DATA.json')
const app=express();
const PORT=8000;

//routes
app.get("/users",(req,res)=>{
    return res.json(users);
})

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})