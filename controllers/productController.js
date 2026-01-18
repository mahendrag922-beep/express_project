const {getProductService,
    addProductService,
    getProductByIdService
} = require("../service/productService");

const getProduct = (req,res)=>{
    const result = getProductService();
    res.sendFile(result);
};
const getProductById = (req,res)=>{
    const id = req.params.id;
    const result = getProductByIdService(id);
   res.send(result);
};
const addProduct = (req,res)=>{
    const result =  addProductService();
    res.send(result);
};

module.exports= {
    getProduct,
    getProductById,
    addProduct
};