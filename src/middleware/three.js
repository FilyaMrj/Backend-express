const three=function(req,res,next) {
    console.log("hellomiddleware called3")

    // this is most important part
    // middleware always calls next function
    // rather than giving response
    next();
}
module.exports=three;
// export default logger;