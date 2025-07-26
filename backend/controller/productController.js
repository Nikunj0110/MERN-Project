// import uploadOnCloudinary from "../config/cloudinary.js";
// import Product from "../model/productModel.js";

// export const addProduct = async (req, res) => {
//   try {
//     const { name, description, price, category, bestseller } = req.body;

//     if (!name || !description || !price || !category || !bestseller) {
//       return res.status(400).json({ message: 'Missing required fields or files' });
//     }

//     const requiredImages = ['image1', 'image2', 'image3', 'image4'];
//     for (let img of requiredImages) {
//       if (!req.files[img] || !req.files[img][0]) {
//         return res.status(400).json({ message: `Missing image: ${img}` });
//       }
//     }

//     let uploadedImages = {};
//     try {
//       uploadedImages.image1 = await uploadOnCloudinary(req.files?.image1[0]?.path);
//       uploadedImages.image2 = await uploadOnCloudinary(req.files?.image2[0]?.path);
//       uploadedImages.image3 = await uploadOnCloudinary(req.files?.image3[0]?.path);
//       uploadedImages.image4 = await uploadOnCloudinary(req.files?.image4[0]?.path);
//     } catch (uploadError) {
//       return res.status(500).json({ message: "Image upload failed", error: uploadError.message });
//     }

//     const product = await Product.create({
//       name,
//       description,
//       price: Number(price),
//       category,
//       bestseller: bestseller === "true",
//       date: Date.now(),
//       ...uploadedImages
//     });

//     return res.status(201).json(product);
//   } catch (error) {
//     console.error("Product creation error:", error);
//     return res.status(500).json({ message: "Internal Server Error", error: error.message });
//   }
// };

// export const listProduct = async (req, res) => {
//   try {
//     const product = await Product.find({});

//     return res.status(200).json(product);
//   } catch (error) {
//     console.log("List Product Error");
//     return res.status(500).json({ message: `List product Error ${error}` });
//   }
// };

// export const removeProduct = async (req, res) => {
//   try {
//     let { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     return res.status(200).json(product);
//   } catch (error) {
//     console.log("Remove Product Error");
//     return res.status(500).json({ message: `Remove product Error ${error}` });
//   }
// };


import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";

// ======================
// ✅ Add New Product
// ======================
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, bestseller } = req.body;

    // Validate required fields
    if (!name || !description || !price || !category || !bestseller) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate required images
    const requiredImages = ['image1', 'image2', 'image3', 'image4'];
    for (let img of requiredImages) {
      if (!req.files?.[img]?.[0]) {
        return res.status(400).json({ message: `Missing image: ${img}` });
      }
    }

    // Upload images to Cloudinary
    const uploadedImages = {};
    try {
      for (let img of requiredImages) {
        const filePath = req.files[img][0].path;
        const cloudUrl = await uploadOnCloudinary(filePath);
        uploadedImages[img] = cloudUrl;
      }
    } catch (uploadError) {
      return res.status(500).json({ message: "Image upload failed", error: uploadError.message });
    }

    // Save product to MongoDB
    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      bestseller: bestseller === "true",
      date: Date.now(),
      image1: uploadedImages.image1,
      image2: uploadedImages.image2,
      image3: uploadedImages.image3,
      image4: uploadedImages.image4,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error("Product creation error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// ======================
// ✅ Get All Products
// ======================
export const listProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json(product);
  } catch (error) {
    console.log("List Product Error:", error.message);
    return res.status(500).json({ message: `List product Error`, error: error.message });
  }
};

// ======================
// ✅ Delete Product by ID
// ======================
export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted", product });
  } catch (error) {
    console.log("Remove Product Error:", error.message);
    return res.status(500).json({ message: `Remove product Error`, error: error.message });
  }
};
