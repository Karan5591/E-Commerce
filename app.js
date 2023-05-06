const express= require("express")
const mongoconnect=require("./util/Database").mongoConnect;
const bodyparser= require('body-parser')
const path= require('path')
const routes= require("./routes/admin")
const routes1= require("./routes/shop")
const User= require('./models/user')

const mongoose= require('mongoose')
const dotenv= require('dotenv')
dotenv.config()
const app=express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


app.use((req, res, next)=>{
    User.findById('6455cf887ec207be3a1a4ca1')
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

mongoose.connect(process.env.connectString)
.then(result=>{
    User.findOne().then(user=>{
        if(!user){
            const user=new User({
                name:"Karan",
                email:"karan@gmail.com",
                password:"123456",
                cart:{
                    items:[]
                }
            })
            user.save()
        }
    })
    
    app.listen(3000)
    console.log("Connected")
})
.catch(err=>console.log(err))
    
   
