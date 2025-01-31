import express from "express";
import {
    createTour,
    deleteTour,
    getAllTour, getFeaturedTour,
    getSingleTour,
    getTourBySearch, getTourCount,
    updateTour
} from "../controller/tourController.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

// Create new tour
router.post('/',verifyAdmin, createTour);

// Update new tour
router.put('/:id',verifyAdmin, updateTour);

// Delete new tour
router.delete('/:id',verifyAdmin, deleteTour);

// Get new tour
router.get('/:id', getSingleTour);

// Get All new tour
router.get('/', getAllTour);

//Search tour
router.get('/search/getTourBySearch', getTourBySearch);

//get featured tour
router.get('/search/getFeaturedTours', getFeaturedTour);

// get getTourCount
router.get('/search/getTourCount',  getTourCount);

export default router;