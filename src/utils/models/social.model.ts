import { Schema } from "mongoose";
import mongoose from "mongoose";

const socialSchema = new Schema({
  userid: {
    type: String,
  },
  platform: {
    type: String,
  },
  socialLink: {
    type: String,
  },
  click: {
    type: Number,
  },
  clickThroughRate: {
    type: Number,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Social = mongoose.models.Socials || mongoose.model("Socials", socialSchema);
export default Social;
