exports.getContactUsPage= (req,res,next)=>{

    res.render('shop/contact-us',{
        pageTitle:'Contact-Us',
        path:'/contact-us'
    });
}