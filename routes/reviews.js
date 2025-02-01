import express from "express";
import { createReview } from "../controller/reviewController.js";
import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// POST /api/v1/review/:tourId
router.post('/:tourId',verifyUser,createReview);

export default router;