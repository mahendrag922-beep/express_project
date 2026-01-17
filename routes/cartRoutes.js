const express = require("express");
const router = express.Router();

router.get("/:userid",(req,res)=>{
    const id = req.params.userid;
    res.send(`Fetching cart for user with ID: ${id}`);
});
router.post("/:userid",(req,res)=>{
    const id = req.params.userid;
    res.send(`Adding product to cart for user with ID: ${id}`);
});

module.exports=router;