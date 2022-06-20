require('dotenv').config()

const express = require("express")

const app = express()


const revision = require('child_process')
.execSync('git rev-parse HEAD')
.toString().trim()



app.get("/",(req,res)=>{
    res.send({message:"Hello from alestic beanstalk",latestCommitHash:revision})
})
const port = process.env.port || 3000
app.listen(port,()=>{
    console.log("Wadzzup")
    console.log(`Ebs example listening on ${port}`)
});





