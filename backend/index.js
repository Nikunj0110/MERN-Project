import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import { compare } from 'bcryptjs';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


let app=express()
dotenv.config()
let port=process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["https://speak-deals-frontend.onrender.com","https://speak-deals-admin.onrender.com"],
    credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)



app.listen(port,()=>{
    console.log("App Started");
    connectDB()
})
