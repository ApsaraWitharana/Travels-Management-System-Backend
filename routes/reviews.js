import express from "express";
import { createReview } from "../controller/reviewController.js";

const router = express.Router();

// POST /api/v1/review/:tourId
router.post('/:tourId', createReview);

export default router;