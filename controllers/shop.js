const Product = require('../models/product');

exports.getProducts = (req, res) => {
  Product.find()
    .then(products => {
      res.send(products)
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
        res.send(product)
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res) => {
  Product.find()
    .then(products => {
        console.log(products)
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postCart = (req, res) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findById(prodId);
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.send("Product updated");
    })
    .catch(err => console.log(err));
};

exports.postCartDeleteProduct = (req, res) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result=>
      {
        res.send("Item Deleted")
      })
    .catch(err => console.log(err));
};

exports.getCart = (req, res) => {
  req.user
    .populate('cart.items.productId')
    .execPopulate()
    .then(user => {
      const products=user.cart.items;
      
      res.send(products);
    })
    .catch(err => console.log(err));
};


exports.postCart = (req, res) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
    })
    .then(result => {
      res.send(result);
    });
};

exports.getOrders = (req, res) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => {
        res.send(orders)
    })
    .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  let fetchedCart;
  req.user
    .addOrder()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
};