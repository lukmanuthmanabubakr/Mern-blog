import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please input A name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Input an Email"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: "string",
    required: [true, "Please Input A Strong Password"],
  }
}, {timestamps: true}
);


const User = mongoose.model("User", userSchema);

// module.exports = User;
export default User;