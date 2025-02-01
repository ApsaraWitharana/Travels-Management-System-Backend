import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import cors from "cors";
import tourRoute from './routes/tour.js';
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from "./routes/bookings.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
    origin:true,
    credentials:true
}

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
app.use(cors(corsOptions));
app.use(cookieParser());


// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);




// Start the server
app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
