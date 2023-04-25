const express= require("express")
const mongoconnect=require("./util/Database").mongoConnect;
const bodyparser= require('body-parser')
const path= require('path')
const routes= require("./routes/admin")
const routes1= require("./routes/shop")
const app=express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())



app.use('/admin', routes)
app.use('/shop', routes1)

mongoconnect(()=>{
    app.listen(3000)
    
    })
