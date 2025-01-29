import express from "express";
import {
    createTour,
    deleteTour,
    getAllTour,
    getSingleTour,
    getTourBySearch,
    updateTour
} from "../controller/tourController.js";

const router = express.Router();

// Create new tour
router.post('/', createTour);

// Update new tour
router.put('/:id', updateTour);

// Delete new tour
router.delete('/:id', deleteTour);

// Get new tour
router.get('/:id', getSingleTour);

// Get All new tour
router.get('/', getAllTour);

//Search tour
router.get('/search/getTourBySearch', getTourBySearch);
export default router;