import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please input A name"],
        unique: true,
    },
    email: {
        
    }
})