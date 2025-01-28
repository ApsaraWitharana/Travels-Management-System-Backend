import Tour from '../model/Tour.js';

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
    try {
        const tours = await Tour.find({})

        res.status(200).json({
            success: true,
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