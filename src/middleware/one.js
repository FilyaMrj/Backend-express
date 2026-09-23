const one=function(req,res,next) {
    console.log("hellomiddleware called1")

    // this is most important part
    // middleware always calls next function
    // rather than giving response
    next();
}
module.exports=one;
// export default logger;