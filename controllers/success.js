exports.getSuccessPage= (req,res,next)=>{

    res.render('shop/success',{
        pageTitle:'Success !',
        path:'/contact-us'
    })
    
}