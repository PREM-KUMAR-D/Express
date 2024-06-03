exports.getSuccessPage= (req,res,next)=>{

    res.render('success',{
        pageTitle:'Success !',
        path:'/contact-us'
    })
    
}