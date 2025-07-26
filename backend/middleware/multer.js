import multer from 'multer';
import fs from 'fs';

const uploadDir = './public';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const originalName = file.originalname.replace(/\s+/g, '-');
        cb(null, `${uniqueSuffix}-${originalName}`);
    }
});

const upload = multer({ storage });

export default upload;
