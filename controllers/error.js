exports.get404 = (req,res,next)=>{
    res.status(404);
    res.render('404',{
        pageTitle:'404 Not Found',
        path:'/404'
    });
};