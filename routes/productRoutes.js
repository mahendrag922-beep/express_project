const express = require("express");
const router = express.Router();
const {getProduct,
    getProductById,
    addProduct }= require("../controllers/productController");
  router.get("/",getProduct);
  router.post("/",addProduct);
  router.get("/:id",getProductById);
module.exports=router;