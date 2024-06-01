const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
    
    res.send('<form action="/product" method ="POST" >Product:<input type="text" name="title"> Size: <input type="number" name="size"> <button type="submit"> Add Product</button> </form> ');
    // next();
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    
});


app.use('/', (req, res, next) => {
    
    res.send({ num: 1 });
    
});



app.listen(4000);

