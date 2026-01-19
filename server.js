
const express=require("express");
const path = require("path");
const app = express();
const userRoutes = require("./routes/user.js");
const bookRoutes = require("./routes/book.js");
const studentRoutes = require("./routes/student");
const courseRoutes = require("./routes/course");
const userRoutes1 = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
app.use(express.static(path.join("public")));
app.use(express.json());
app.use("/books",bookRoutes);
app.use("/user", userRoutes);
app.use("/students",studentRoutes);
app.use("/courses",courseRoutes);
app.use("/users",userRoutes1);
app.use("/products",productRoutes);
app.use("/cart",cartRoutes);
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