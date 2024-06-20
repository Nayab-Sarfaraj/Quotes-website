const ErrorHandler=require("../utils/errorHandler")
module.exports=(err,req,res,next)=>{

    console.log(err.message)
    err.message=err.message||"internal server error"
    err.status=err.status||500

    return res.status(err.status).json({
        succss:false,
        message:err.message
    })

}