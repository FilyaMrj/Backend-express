const two=function(req,res,next) {
    console.log("hellomiddleware called2")

    // this is most important part
    // middleware always calls next function
    // rather than giving response
    next();
}
module.exports=two;
// export default logger;