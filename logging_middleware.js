const express = require("express");
const app = express();

const log = (req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
}

app.get("/products",log,(req,res)=>{
    res.send("Here is the list of all products");
});
app.post("/products",log,(req,res)=>{
    res.send("A new product has been added");
});
app.get("/category",log,(req,res)=>{
   res.send("Here is the list of all categories"); 
});
app.post("/category",log,(req,res)=>{
    res.send("A new category has been created");
});
app.listen(3000,()=>{
    console.log("server is running very fast");
});