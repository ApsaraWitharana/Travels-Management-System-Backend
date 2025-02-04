import express from "express";
import {createReview, getAllReviews, getReviews} from "../controller/reviewController.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// POST /api/v1/review/:tourId
router.post('/:tourId',verifyUser,createReview);
router.get('/',verifyUser,getAllReviews);
router.get('/:tourId',verifyUser,getReviews);


export default router;