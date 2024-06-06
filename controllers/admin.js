const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  console.log(Product);

  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  })
  .then(res => console.log(res))
  .catch(err=> {
    console.log(err);
  })
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const productId = req.params.productId;
  Product.findByPk(productId)
  .then((product) => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/add-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => console.log(err));





};

exports.postEditProducts = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    
    console.log(prodId)

    Product.findByPk(prodId)
    .then( product => {
      console.log(product);
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.description = updatedDesc;
      return product.save();
    })
    .then(result => {
      console.log("Updated Product")
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));

    
}

exports.postDeleteProduct = (req,res,next)=>{
  const prodId =req.body.productId;

  Product.findByPk(prodId)
  .then( product =>{
    return product.destroy();
  })
  .then( result =>{
     console.log("Destroyed Product");
     res.redirect('/admin/products');   
  })
  .catch(err => console.log(err));
  
}



exports.getProducts = (req, res, next) => {

  Product.findAll()
  .then(products => {

    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })

};
