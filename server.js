
const express=require("express");
const app = express();
app.use((req,res,next)=>{
console.log("output from middleware 1");
next();
});
app.use((req,res,next)=>{
console.log("output from middleware 2");
res.send("<h1>hello world</h1>");
});
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000,()=>{
// console.log("Server running at http://localhost:3000");
// });