import path from 'path';
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.resolve('uploads');
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
    }
});

const upload = multer({ storage: storage });

export default upload;
