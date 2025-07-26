import User from "../model/userModel.js"
import validator from 'validator'
import bcrypt, { hash } from 'bcryptjs'
import { genToken, genToken1 } from "../config/token.js"

export const registeration=async(req,res)=>{
    try {
        console.log(req.body);
        const{name,email,password}=req.body
        const exitsUser=await User.findOne({email})
        if (exitsUser) {
            return res.status(400).json({message:"User Already Exits!"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Enter Valid Email"})
        }
        if(password.length<8){
            return res.status(400).json({message:"Password Must Be 8 Characters Long"})
        }
        const hashPassword=await bcrypt.hash(password,10)

        const user=await User.create({name,email,password:hashPassword})

        let token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*4*60*60*1000
        })

        return res.status(201).json(user)
    } catch (error) {
        console.log("Registeration Error");
        return res.status(500).json({message:`Registeration Error ${error}`})
    }
}


export const login=async(req,res)=>{
    try {
        let {email,password}=req.body;
        let user=await User.findOne({email})

        if(!user){
            return res.status(404).json({message:"User Not Found!"})
        }
        let isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Password Incorrect!"})
        }

        let token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*4*60*60*1000
        })

        return res.status(201).json(user)
    } catch (error) {
        console.log("Login Error");
        return res.status(500).json({message:`Login Error ${error}`})
    }
}

export const logout=async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout Successfull"})
    } catch (error) {
        console.log("Logout Error");
        return res.status(500).json({messge:`Logout Error ${error}`})
    }
}


export const googleLogin=async(req,res)=>{
    try {
        const { name, email } = req.body;
        let user=await User.findOne({email})

         if(!user){
            user=await User.create({
                name,email
            })
        }
      
        let token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7*4*60*60*1000
        })

        return res.status(200).json(user)
    } catch (error) {
        console.log("GoogleLogin Error");
        return res.status(500).json({message:`GoogleLogin Error ${error}`})
    }
}



//ADMIN mate
export const adminLogin=async(req,res)=>{
    try {
        let {email,password}=req.body

        if(email=== process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
             let token=await genToken1(email)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:1*4*60*60*1000
        })

        return res.status(200).json(token)
        }

        return res.status(400).json({message:"Invalid Credentials"})
    } catch (error) {
        console.log("AdminLogin Error");
        return res.status(500).json({message:`AdminLogin Error ${error}`})
    }
}