import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import cors from "cors";
import tourRoute from './routes/tour.js';
import userRoute from './routes/user.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Database connection
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database connected');
    } catch (err) {
        console.log('MongoDB database connection failed');
    }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/tours', tourRoute);
app.use('/user',userRoute);

// Start the server
app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
