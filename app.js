const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactUs');
const successRoutes = require('./routes/success');
const errorController = require('./controllers/error');
const db = require('./util/database');

app.set('view engine','ejs');
app.set('views','views');



app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(successRoutes);

app.use(errorController.get404);


app.listen(4000);

