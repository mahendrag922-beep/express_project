const {sendErrorResponse,sendResponse} = require("../utils/sendErrorResponse");
const getAllUsers = (req,res)=>{
    return sendResponse(res,"Fetching all user",200);
};
const addUser=(req,res)=>{
    res.send("Adding a new user");
 };
 const getUserById=(req,res)=>{
  try{
   const id = req.params.id;
   if(id>10){
    const err = new Error ("user not found");
    err.statusCode = 401;
    throw err;
  }

   return sendResponse(res,`Fetching user with ID : ${id}`,200);
}catch(error){
  return sendErrorResponse(res,error);
}
 };
 module.exports={
    getAllUsers,
    addUser,
    getUserById
 }