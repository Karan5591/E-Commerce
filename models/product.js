const getDb=require("../util/Database").getDb;

class Product
{
    constructo (title, price, description, imageUrl)
    {
        this.title=title;
        this.price=price;
        this.description=description;
        this.imageUrl= imageUrl;
    }
    save()
    {
        const db=getDb();
      return  db.collection('products')
      .insertOne(this)
        .then(result=>{
            console.log(result);
        })
        .catch (err=>{
            console.log(err);
        })
    }
}
module.exports=Product;