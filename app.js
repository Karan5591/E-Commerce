const express= require("express")
const mongoconnect=require("./util/Database").mongoConnect;
const bodyparser= require('body-parser')
const path= require('path')
const routes= require("./routes/admin")
const routes1= require("./routes/shop")
const User= require('./models/user')
const app=express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


app.use((req, res)=>{
    User.findById('64536c23b08c58ab60230249')
    .then(user=>{
        req.user=user;
        next();
    })
    .catch(err=>{
        console.log(err);
    })
})

app.use('/admin', routes)
app.use('/shop', routes1)

mongoconnect(()=>{
    app.listen(3000)
    
    })
