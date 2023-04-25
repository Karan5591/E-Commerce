const mongodb= require("mongodb")
const dotenv= require('dotenv')
dotenv.config()
const mongoClient=mongodb.MongoClient;
const mongoConnect=(callback)=>{
    mongoClient.connect(process.env.connectString)
.then((client)=>{
    console.log("Connected");
    _db = client.db();
    callback();
})
.catch((err)=>{
    console.log(err);
    throw err;
})
}

const getDb= ()=>{
    if(_db)

{
    return _db;
}
throw "No DB found"
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;