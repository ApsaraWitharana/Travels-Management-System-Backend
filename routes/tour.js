// routes/tourRoutes.js
import express from 'express';
import {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount,
    getAllAdminTour
} from '../controller/tourController.js';
import upload from '../utils/multerConfig.js';

const router = express.Router();

// Create new tour
router.post('/', upload.single('photo'), createTour);

// Update tour
router.put('/:id', upload.single('photo'), updateTour);

// Delete tour
router.delete('/:id', deleteTour);

// Get single tour
router.get('/:id', getSingleTour);

// Get all tours
router.get('/', getAllTour);

//Get all Admin tours
router.get('/new', getAllAdminTour);


// Search tour
router.get('/search/getTourBySearch', getTourBySearch);

// Get featured tours
router.get('/search/getFeaturedTours', getFeaturedTour);

// Get tour count
router.get('/search/getTourCount', getTourCount);

export default router;