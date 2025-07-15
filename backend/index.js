import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';

let app=express()
dotenv.config()
let port=process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)

app.listen(port,()=>{
    console.log("App Started");
    connectDB()
})