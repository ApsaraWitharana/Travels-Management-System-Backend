import Tour from '../model/Tour.js';
import req from "express/lib/request.js";
import res from "express/lib/response.js";

// create tour

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save(); // Save the tour to the database
        res.status(200).json({
            success: true,
            message: 'Successfully created',
            data: savedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create. Try again',
        });
    }
};

// update tour
export const updateTour = async (req,res) =>{
    const id = req.params.id
    try {

        const updateTour = await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updateTour,
        });
    }catch (err){
        res.status(500).json({
            success: false,
            message: 'Failed to update. Try again',
        });
    }
};

// delete tour
export const deleteTour = async (req,res) =>{
    const id = req.params.id
    try {
        await Tour.findByIdAndDelete(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
        });

    }catch (err){
        res.status(500).json({
            success: false,
            message: 'Failed to delete. Try again',
        });
    }
};

// get tour
export const getSingleTour = async (req,res) =>{
    const id = req.params.id
    try {
      const tour = await Tour.findById(id);

        res.status(200).json({
            success: true,
            message: 'Successfully getSingle tours',
            data:tour,
        });

    }catch (err){
        res.status(404).json({
            success: false,
            message: 'Failed to getSingle tours. Try again',
        });
    }
};

// get All tour
export const getAllTour = async (req,res) =>{
    //for pagination
    const page = parseInt(req.query.page)
    console.log(page);
    try {
        const tours = await Tour.find({})
        //skip the only 8 pages rendering getall
            // .skip(page*8)
            // .limit(8)
        res.status(200).json({
            success: true,
            count:tours.length,
            message: 'Successfully getAll tours',
            data:tours,
        });

    }catch (err){
        res.status(404).json({
            success: false,
            message: 'Failed to getAll tours. Try again',
        });
    }
};

//get tour by search
export const getTourBySearch = async (req,res)=>{
    //here 'i' means case sensitive

    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        //get means greater than equal

        const tours = await Tour.find({city,distance: {$gte:distance},
        maxGroupSize: {$gte:maxGroupSize},
        });

        res.status(200).json({
            success: true,
            message: 'Successfully search tour',
            data:tours,
        });
    }catch (err){
        res.status(404).json({
            success: false,
            message: 'Failed to getAll tours. Try again',
        });

    }
};

//get featured tour

export const getFeaturedTour = async (req,res) =>{
    try {
        const tours = await Tour.find({featured: true}).limit(8);
        res.status(200).json({
            success: true,
            message: 'Successfully ',
            data:tours,
        });
    }catch (err){
        res.status(404).json({
            success: false,
            message: 'not found',
        });
    }
};

//get tour counts

export const getTourCount = async (req,res)=>{
    try {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({
            success: true,
            message: 'Successfully ',
            data:tourCount,
        });
    }catch (err){
        res.status(404).json({
            success: false,
            message: 'not found',
        });
    }
}