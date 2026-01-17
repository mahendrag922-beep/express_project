
const express=require("express");
const app = express();
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const studentRoutes = require("./routes/student");
const courseRoutes = require("./routes/course");
app.use("/books",bookRoutes);
app.use("/user", userRoutes);
app.use("/students",studentRoutes);
app.use("/courses",courseRoutes);
app.use((req,res)=>{
   res.status(404).send(`
    <h1>404</h1>
    <p>Page not found</p>
    `)
});
app.listen(3000,()=>{
    console.log("server is running");
});
// const server = http.createServer(app);
// server.listen(3000,()=>{
// console.log("Server running at http://localhost:3000");
// });