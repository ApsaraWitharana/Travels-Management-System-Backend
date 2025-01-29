import User from '../model/User.js';

// update  user
export const updateUser = async (req,res) =>{
    const id = req.params.id
    try {

        const updateUser  = await User .findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updateUser,
        });
    }catch (err){
        res.status(500).json({
            success: false,
            message: 'Failed to update. Try again',
        });
    }
};

// delete  user
export const deleteUser  = async (req,res) =>{
    const id = req.params.id
    try {
        await User .findByIdAndDelete(id,{
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

// get  user
export const getSingleUser  = async (req,res) =>{
    const id = req.params.id
    try {
        const user  = await User.findById(id);

        res.status(200).json({
            success: true,
            message: 'Successfully getSingle Users',
            data:user,
        });

    }catch (err){
        res.status(404).json({
            success: false,
            message: 'Failed to getSingle User . Try again',
        });
    }
};

// get All  user
export const getAllUser  = async (req,res) =>{

    try {
        const users = await User .find({})

        res.status(200).json({
            success: true,
            message: 'Successfully getAll users',
            data:users,
        });

    }catch (err){
        res.status(404).json({
            success: false,
            message: 'Failed to getAll users. Try again',
        });
    }
};
