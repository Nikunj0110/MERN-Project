import User from "../model/userModel"




export const getCurrentUser=async()=>{
    try {
        let user=await User.findById(req.userId).select("-password")

        if(!user){
            return res.status(400).json({message:"User not found"})
        }

        return res.status(200).json(user)
    } catch (error) {
           console.log(error);
         return res.status(500).json({message:`GetCurrentUser Error ${error}`})
    }
}