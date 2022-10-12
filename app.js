require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send({ message: "Am i http or https????", date: new Date() });
});
const port = process.env.port || 3000;
app.listen(port, async () => {
  console.log("Wadzzup!!");
  console.log(`ec2 example listening on ${port}`);
});
