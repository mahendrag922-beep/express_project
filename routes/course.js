const express = require("express");
const router = express.Router();
const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get("/",(req,res)=>{
    const courseList = courses.map(c =>c.name).join(",");
    res.send(`courses : ${courseList}`);
});
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const course = courses.find(c =>c.id === id);
    res.send(`Course : ${course.name} , Description: ${course.description}`);
});
module.exports=router;