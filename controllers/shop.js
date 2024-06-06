const Product = require('../models/product');
const Cart = require('../models/cart');
const { json } = require('body-parser');

exports.getProducts = (req, res, next) => {
  
    Product.findAll()
    .then(products => {

      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));


};

exports.getByProductID = (req, res, next) => {
  const productId = req.params.productId;
  Product.findByPk(productId)
    .then((prod) => {

     
      res.render('shop/product-detail', {
        product: prod,
        pageTitle: prod.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));

}


exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {

      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {


    Product.fetchAll(products => {

      const cartProducts = [];
      for (prod of products) {
        const cartProductData = cart.products.find(product => product.id === prod.id);
        if (cartProductData) {
          cartProducts.push({ productData: prod, qty: cartProductData.qty });
        }
      }


      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });

    })
  });

};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByID(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByID(prodId, product => {

    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  })

}


exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};



