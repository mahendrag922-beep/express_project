const sendErrorResponse = (res,err)=>{
    console.log(err.message);
    res.status(err.statusCode || 500).json({
         success : false,
         message : err.message
    });
};
const sendResponse = (res,data,statusCode)=>{
    res.status(statusCode).json({
        status:"true",
        data : data,
        code : statusCode
    })
}
module.exports = {sendErrorResponse,
                 sendResponse}