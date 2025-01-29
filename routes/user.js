import express from "express";
import {createUser, deleteUser, getAllUser, getSingleUser, updateUser} from "../controller/userController.js";


const router = express.Router();




// Update new user
router.put('/:id', updateUser);

// Delete new user
router.delete('/:id', deleteUser);

// Get new user
router.get('/:id', getSingleUser);

// Get All new user
router.get('/', getAllUser);

export default router;