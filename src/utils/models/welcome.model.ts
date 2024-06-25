import { Schema } from "mongoose";
import mongoose from "mongoose";

const welcomeSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  fullname:{
    type: String,
    required: true,
  },
  hearaboutlinklush:{
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  foodbeverage:{
    type: String,
    required: true,
  }
}, { timestamps: true });

const Welcome = mongoose.models.Welcomes || mongoose.model("Welcomes", welcomeSchema);
export default Welcome;
