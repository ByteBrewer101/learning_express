const mongoose = require("mongoose")
const express = require('express')
const port = 3000
const app = express()


app.use(express.json())
mongoose.connect("mongodb+srv://atharvachopde:UwAXDm6fTeL1d31h@cluster0.sjxpzfi.mongodb.net/userappnew")

const usermodel = mongoose.model("Users", {name : String , 
email : String , password : String })


app.get('/signup',async (req,res)=>{

    const username1 = req.body.username
    const email = req.body.email
    const password = req.body.password
const userex = await usermodel.findOne({username1 : name})
if(userex){
    res.status(200).json({msg : "user already exists"})
}
    const user1 = new usermodel({
        name : username1,
        email :  email,
        password : password
    })

    user1.save()


    res.status(200).json({msg : "new user added"})
    



})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})




