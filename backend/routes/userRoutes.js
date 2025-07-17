import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { getCurrentUser } from '../controller/userController.js'


const userRoutes=express.Router()

userRoutes.get('/getcurrentuser', isAuth, getCurrentUser); // ✅ GET route

export default userRoutes