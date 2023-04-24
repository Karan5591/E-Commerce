const express= require('express')
const products= require("../controllers/admin")
const routes= express.Router()


routes.post('/', products.postAddProduct);

module.exports=routes;