
import User from "../model/userModel.js";


// export const addToCart=async(req,res)=>{
//     try {
//         const {itemId}=req.body

//         const userData=await User.findById(req.userId)

//         //check if user exits
//         if(!userData){
//             return res.status(404).json({message:"User not found"})
//         }

//         let cartData=userData.cartData || {};

//         if(cartData[itemId]){
//             if(cartData[itemId]){
//                 cartData[itemId]+=1
//             }else{
//                 cartData[itemId]=1
//             }
//         }else{
//             cartData[itemId]={};
//             cartData[itemId]=1
//         }

//         await User.findByIdAndUpdate(req.userId,{cartData})

//         return res.status(201).json({message:"Added To Cart"})
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({message:"addtocart error"})
//     }
// }







// export const addToCart = async (req, res) => {
//   try {
//     const { itemId } = req.body;

//     console.log("itemId:", itemId);
//     console.log("userId:", req.userId);

//     const userData = await User.findById(req.userId);

//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     let cartData = userData.cartData || {};

//     // If item exists, increment; else set to 1
//     if (cartData[itemId]) {
//       cartData[itemId] += 1;
//     } else {
//       cartData[itemId] = 1;
//     }

//     await User.findByIdAndUpdate(req.userId, { cartData });

//     return res.status(201).json({ message: "Added To Cart" });
//   } catch (error) {
//     console.log("Add to cart error:", error);
//     return res.status(500).json({ message: "addtocart error" });
//   }
// };


export const addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const userId = req.userId;

    if (!itemId || !userId) {
      return res.status(400).json({ message: "Missing itemId or userId" });
    }

    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // Deep clone the cartData to ensure MongoDB detects change
    const cartData = JSON.parse(JSON.stringify(userData.cartData || {}));

    // Update quantity
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    console.log("Before Update - cartData:", cartData);

    const updated = await User.updateOne(
      { _id: userId },
      { $set: { cartData: cartData } }
    );

    console.log("Update result:", updated);

    if (updated.modifiedCount === 0) {
      return res.status(500).json({ message: "Cart not updated" });
    }

    return res.status(200).json({ message: "Added To Cart", cartData });
  } catch (error) {
    console.log("Add to cart error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};






export const updateCart=async(req,res)=>{
    try {
        const {itemId,size,quantity}=req.body
        const userData=await User.findById(req.userId)
        let cartData=await userData.cartData

        cartData[itemId]=quantity

        await User.findByIdAndUpdate(req.userId,{cartData})

        return res.status(201).json({message:"cart updated"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"update cart error"})
    }
}


export const getUserCart=async(req,res)=>{
    try {
        const userData =await User.findById(req.userId)
        let cartData=await userData.cartData

        return res.status(200).json(cartData)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"getusercart error"})
    }
}