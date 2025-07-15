import express from 'express'
import { registeration,login,logout, googleLogin } from '../controller/authController.js'

const authRoutes=express.Router()

authRoutes.get('/',(req,res)=>{
    res.send("Backend Is Working!")
})
authRoutes.post("/registration",registeration)
authRoutes.post('/login',login)
authRoutes.get('/logout',logout)
authRoutes.post('/googlelogin',googleLogin)


export default authRoutes