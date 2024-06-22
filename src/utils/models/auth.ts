import mongoose from "mongoose";
import { nullable } from "zod";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please write your fullname"],
  },
  email: {
    type: String,
    required: [true, "please provide a valid email"],
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    nullable: true,
    default: null,
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
