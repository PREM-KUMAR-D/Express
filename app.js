const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactUs');
const successRoutes = require('./routes/success');
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');



const app = express();
app.set('view engine','ejs');
app.set('views','views');


app.use(cors());


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactRoutes);

app.use(successRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{constraints: true , onDelete: 'CASCADE'});
User.hasMany(Product);


sequelize.sync({force: true})
.then( result=>{
    // console.log(result);
})
.catch ( err=>{
    console.log(err);
})


app.listen(4000);

