const express = require('express');
const adminControl = require('../controllers/admin');
const router = express.Router();


router.get('/products', adminControl.getProducts);
router.post('/add-product', adminControl.postAddProduct);
router.get('/edit-product/:productId', adminControl.getEditProduct);
router.post('/edit-product', adminControl.postEditProduct);
router.post('/delete-product', adminControl.postDeleteProduct);

module.exports = router; 