const express = require("express");
const router =  express.Router();
const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

router.get("/",(req,res)=>{
    const studentList = students.map( s => s.name).join(",");
    res.send(`students: ${studentList}`);
});
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(s =>s.id ===id);
    if(!student){
      res.send(`student not found`);
    };
    res.send(`student: ${student.name}`);
});

module.exports=router;