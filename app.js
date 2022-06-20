require('dotenv').config()

const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send({message:"Hello from alestic beanstalk"})
})
const port = process.env.port || 3000
app.listen(port,()=>{
    console.log("Wadzzup")
    console.log(`Ebs example listening on ${port}`)
});





