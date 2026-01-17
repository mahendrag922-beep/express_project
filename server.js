
const express=require("express");
const app = express();
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
app.use("/user",(req,res,next)=>{
    console.log("middleware");
    next();
});
app.use("/books",bookRoutes);
app.use("/user", userRoutes);
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000,()=>{
// console.log("Server running at http://localhost:3000");
// });