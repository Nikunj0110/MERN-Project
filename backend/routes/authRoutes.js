import express from 'express'
import { registeration,login,logout } from '../controller/authController.js'

const authRoutes=express.Router()

authRoutes.post("/registration",registeration)
authRoutes.post('/login',login)
authRoutes.get('/logout',logout)

export default authRoutes