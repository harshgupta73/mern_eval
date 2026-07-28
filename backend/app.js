const express = require('express');
const { connectDB } = require('./db');
const cors = require('cors');
const courseRouter = require('./routes/courseRoutes');


const app = express()
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/",courseRouter)

app.listen(4000,()=>{
    console.log("running")
})