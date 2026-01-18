const path = require("path");
const getProductService = ()=>{
    return path.join(__dirname,"..","view","productHtml.html");
};
const addProductService = ()=>{
    return "Adding a new product";
    
};
const getProductByIdService = (id)=>{
   return `Fetching product with ID: ${id}`; 
};
module.exports ={
    getProductService,
    addProductService,
    getProductByIdService
}