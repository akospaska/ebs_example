require('dotenv').config()

const express = require("express")

const app = express()



let triggered = 0


app.get("/",(req,res)=>{
    triggered++
    res.send({message:"Hello from alestic beanstalk",triggered})
})
const port = process.env.port || 3000
app.listen(port,()=>{
    console.log("Wadzzup")
    console.log(`Ebs example listening on ${port}`)
});





