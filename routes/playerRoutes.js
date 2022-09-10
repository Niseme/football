import express from "express";
import { createPlayer,getAllPlayers, getPlayerById,deletePlayerById, updatePlayer } from "../controller/playerController.js";

const router = express.Router();

//create a user
router.post('/create', createPlayer);

//get all users
router.get('/get', getAllPlayers);

//get user by id
router.get('/get/:id', getPlayerById);

//delete by id
router.delete('/delete/:id', deletePlayerById);

//update user
router.put('/update/:id', updatePlayer);

export default router;