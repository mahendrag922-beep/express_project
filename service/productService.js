const getProductService = ()=>{
    return "Fetching all products";
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