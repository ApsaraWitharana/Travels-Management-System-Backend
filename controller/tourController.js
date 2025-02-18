// controller/tourController.js
import Tour from '../model/Tour.js';

export const createTour = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: 'No file uploaded',
        });
    }

    const newTour = new Tour({
        ...req.body,
        photo: req.file.path,
    });

    try {
        const savedTour = await newTour.save();
        res.status(200).json({
            success: true,
            message: 'Successfully created',
            data: savedTour,
        });
    } catch (err) {
        console.error(err);  // Log error to the console
        res.status(500).json({
            success: false,
            message: 'Failed to create. Try again',
        });
    }
};


export const updateTour = async (req, res) => {
    const id = req.params.id;
    const updateData = {
        ...req.body,
        photo: req.file ? req.file.path : req.body.photo
    };

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updatedTour,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update. Try again',
        });
    }
};

// Other controller functions remain the same...
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
      const tour = await Tour.findById(id).populate("reviews");

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
export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page) || 0; // Default to page 0 if invalid
    console.log("Fetching page:", page);  // Log page for debugging
    try {
        const tours = await Tour.find({})
            .populate("reviews")
            .skip(page * 8)
            .limit(8);

        if (tours.length === 0) {
            console.log("No tours found for page:", page);
        }

        res.status(200).json({
            success: true,
            count: tours.length,
            message: 'Successfully fetched all tours',
            data: tours,
        });
    } catch (err) {
        console.error("Error fetching tours:", err); // Log errors
        res.status(404).json({
            success: false,
            message: 'Failed to fetch tours. Try again',
        });
    }
};

export const getAllAdminTour = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Start from page 1 if no page is provided
    const limit = 8; // Set your limit of items per page
    const skip = (page - 1) * limit; // Calculate skip value to get the right page of results

    console.log("Fetching page:", page);  // Log page for debugging

    try {
        // Fetch tours and calculate pagination in one go with aggregation for better efficiency
        const tours = await Tour.aggregate([
            { $skip: skip },  // Skip results based on the page
            { $limit: limit },  // Limit the results per page
            { $lookup: { // Lookup reviews data if necessary
                    from: "reviews",
                    localField: "_id",
                    foreignField: "tourId",
                    as: "reviews"
                }},
        ]);

        // Get total count of tours (for pagination info)
        const totalTours = await Tour.countDocuments();

        res.status(200).json({
            success: true,
            count: tours.length,
            total: totalTours,  // Send the total count of tours for pagination
            message: 'Successfully fetched all tours',
            data: tours,
        });
    } catch (err) {
        console.error("Error fetching tours:", err); // Log errors
        res.status(404).json({
            success: false,
            message: 'Failed to fetch tours. Try again',
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
        }).populate("reviews");

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
        const tours = await Tour.find({featured: true}).populate("reviews").limit(8);
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