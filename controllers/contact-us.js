exports.getContactUsPage= (req,res,next)=>{

    res.render('contact-us',{
        pageTitle:'Contact-Us',
        path:'/contact-us'
    });
}