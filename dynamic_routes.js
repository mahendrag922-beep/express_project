const express = require("express");
const app =  express();

const checkuser = (req,res,next)=>{
    req.username =  req.params.username;
    req.role = req.query.role;
    next();
}

app.get("/welcome/:username",checkuser,(req,res)=>{
    res.send(`Welcome ${req.username}, your role is ${req.role}`);
})

app.listen(3000,()=>{
  console.log("server is running");
});