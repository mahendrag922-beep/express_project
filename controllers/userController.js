const sendErrorResponse = require("../utils/sendErrorResponse");
const getAllUsers = (req,res)=>{
    res.send("Fetching all user");
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

   res.send(`Fetching user with ID : ${id}`);
}catch(error){
  return sendErrorResponse(res,error);
}
 };
 module.exports={
    getAllUsers,
    addUser,
    getUserById
 }