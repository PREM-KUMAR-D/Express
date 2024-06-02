const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    
    res.send('<form action="/admin/product" method ="POST" >Product:<input type="text" name="title"> Size: <input type="number" name="size"> <button type="submit"> Add Product</button> </form> ');
    // next();
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
    
});



module.exports = router;