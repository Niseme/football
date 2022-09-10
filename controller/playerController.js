import playerModel from   "../models/playerModel.js"
import bcrypt from "bcrypt";

//create a user
export const createPlayer = async (req,res)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new playerModel({
            ...req.body,
            password : hash
        });
    
        await newUser.save();
        res.status(201).send('new user is created');
    }
    catch (error){
        res.status(405).send(error)
        console.log(error);
    }
};

//get all users
export const getAllPlayers= async (req,res)=>{
    
    try{
        //hide password
        const allUsers = await playerModel.find({},{password: 0});
        res.status(202).json(allUsers);
    }catch(error){
        console.log('you have an error to get all users');
    }
};

//get user by id
export const getPlayerById = async (req, res)=>{
    try {
        const user = await playerModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        console.log('you have an error to get user by id');
    }
};

//delete by id
export const deletePlayerById = async (req, res)=>{
    try {
        await playerModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`user is deleted`);
    } catch (error) {
        console.log('you have an error by deleteing user by id');
    }
};

//update
export const updatePlayer = async (req, res)=>{
    try {
        const updatedUser =  await playerModel.findByIdAndUpdate(req.params.id,
            {$set: req.body},{new: true}
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log('you have an error by updating user by id');
    }
};