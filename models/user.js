const mongodb = require('mongodb');
const getDb= require ('../util/Database').getDb

class User{
    constructor(username, email)
    {
        this.name=username;
        this.email=email;
        this.password=password;

    }
    save()
    {
        const db=getDb();
        db.collection('users').insertOne(this)
        
    }
    static findById (userId)
    {
        const db= getDb()
        return db.collection('users').findOne({_id:new mongodb.ObjectId(userId)})
    }
}
module.exports=User;