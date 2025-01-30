import express from "express";
import {deleteUser, getAllUser, getSingleUser, updateUser} from "../controller/userController.js";

import {verifyUser} from "../utils/verifyToken.js";

const router = express.Router();


// Update new user
router.put('/:id',verifyUser, updateUser);

// Delete new user
router.delete('/:id',verifyUser, deleteUser);

// Get new user
router.get('/:id',verifyUser, getSingleUser);

// Get All new user
router.get('/',verifyUser, getAllUser);

export default router;