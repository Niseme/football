import express from "express";
import mongoose from "mongoose";
import dotenv from  "dotenv";
import playerRoute from "./routes/playerRoutes.js"


const app = express();
const port = 3077

dotenv.config();

const connectionToDB = async () =>{
     try{
         await mongoose.connect(process.env.MONGO_URL);
         console.log('connection to mongodb is successfull');
     } catch(error){
         console.log('error, DB is not working');
     }
}

app.use(express.json());

//using router (look what it does)
app.use('/api', playerRoute);


 app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
     connectionToDB();
 })