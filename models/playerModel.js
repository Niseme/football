import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
   playerName: { 
        type: String,
        required: true,
},
   playerSurname: { 
        type: String,
        required: true,
},
    password:{
        type: String,
        required: true
},
    age:{
        type: String,
        required: true,
},
    email:{
        type: String,
        required: true,
        unique: true,
},
    city:{
        type: String,
        required: true,
},

},
{timestamps : true});

const user = mongoose.model("User", playerSchema);
export default user;