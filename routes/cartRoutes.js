const express = require("express");
const router = express.Router();
const {getCartForUser,
    addProductToCart}  =require("../controllers/cartController");
router.get("/:userid",getCartForUser);
router.post("/:userid",addProductToCart);

module.exports=router;