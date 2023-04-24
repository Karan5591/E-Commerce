const product= require('../models/product')

exports.getAddProduct= (req, res, next)=>{
    res.render('admin/edit-product',{
        pageTitel:'add Product',
        path: '/adming/add-product',
        editing: false
    })
}


exports .postAddProduct = (req, res)=>{
    const title= req.body.title;
    const imageUrl= req.body.imageUrl;
    const price= req.body.price;
    const description= req.body.description
    const product= new product(title, price, imageUrl, description)
    product
    .save()
    .then(result=>{
        console.log('created produtc')
        res.redirect('/admin/products.')
    })
    .catch(err=>{
        console.log(err);
    })
}