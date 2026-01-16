
const express=require("express");
const app = express();
const userRoutes = require("./routes/user");
app.use("/user",(req,res,next)=>{
    console.log("middleware");
    next();
});
app.use("/user", userRoutes);
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000,()=>{
// console.log("Server running at http://localhost:3000");
// });