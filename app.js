require('dotenv').config()

const express = require("express")
const sql = require('./database/sql')


const app = express()


app.get("/",async (req,res)=>{

    const x = await sql.triggerAndGet()
    console.log(x[0].count)


    res.send({message:"Hello from alestic beanstalk",triggered:x[0].count})
})
const port = process.env.port || 3000
app.listen(port,async()=>{

    sql.sqlInit()
    console.log("Wadzzup")
    console.log(`Ebs example listening on ${port}`)
});





