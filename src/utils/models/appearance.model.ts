import { Schema } from "mongoose";
import mongoose from "mongoose";

const appearanceSchema = new Schema({
    userid: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    avatar: {
        type: String,
    },
    infoButtonEnable: {
        type: Boolean,
    },
    infoButtonText: {
        type: String,
    },
    infoButtonLink: {
        type: String,
    },
    font: {
        type: String,
    },
    theme: {
        type: String,
    },
    bgColor: {
        type: String,
    },
    bgImage: {
        type: String,
    },
    hideBranding: {
        type: Boolean,
    },
    lastbackground: {
        type: String,
    }
}, { timestamps: true });

const Appearance = mongoose.models.Appearances || mongoose.model("Appearances", appearanceSchema);
export default Appearance;
