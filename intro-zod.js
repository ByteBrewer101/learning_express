const express = require('express')
const zod = require('zod')
const port = 3000
const app = express()



app.get('/',(req,res)=>{
    res.send("accessed")
})

app.listen(port,()=>{
    console.log(`running on ${port}`)
})