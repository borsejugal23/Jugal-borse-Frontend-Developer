const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./route/user.route");
const app=express();
require("dotenv").config()
const cors=require("cors");
const { capsuleRouter } = require("./route/capsule.route");
app.use(cors())

app.use(express.json());

app.use("/users",userRouter);
app.use("/rockets",capsuleRouter)
const port =process.env.port || 3001
app.listen(port,async()=>{
    await connection
    console.log("connected to db")
console.log(`server is listening to ${port}`)
})
