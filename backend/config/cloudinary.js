import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filepath) => {
    if (!filepath) return null;

    try {
        const result = await cloudinary.uploader.upload(filepath, {
            folder: 'assets'
        });

        fs.unlinkSync(filepath);
        return result.secure_url;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error?.message || error);

        try {
            if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
        } catch (fsErr) {
            console.error("Failed to delete local file:", fsErr);
        }

        throw new Error(error.message || "Cloudinary upload failed");
    }
};

export default uploadOnCloudinary;
