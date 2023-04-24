const express= require("express")
const mongoconnect=require("./util/Database").mongoConnect;
const bodyparser= require('body-parser')
const path= require('path')
const routes= require("./routes/admin")
const app=express();

app.use(bodyparser.urlencoded({extended: false}))


app.use('/', routes)

mongoconnect(()=>{
    app.listen(3000)
    
    })
