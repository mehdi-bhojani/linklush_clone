'use server';

import  { Types } from "mongoose";
import DbConnect from "@/lib/db";
import Video from "@/utils/models/video.model";

// Function to delete Link links based on user ID and platform
export const deleteVideoLinks = async (delete_id: string,userid: string) => {

    try {
        // Connect to the database
        await DbConnect();

        // Ensure delete_id is a valid ObjectId
        if (!Types.ObjectId.isValid(delete_id)) {
            throw new Error("Invalid ObjectId");
        }

        // Convert to ObjectId
        const objectId = new Types.ObjectId(delete_id);

        // Delete the Link link based on the ObjectId
        const deleteVideoLink = await Video.findOneAndDelete({ _id: objectId, userid });

        if (deleteVideoLink) {
            console.log("Video link deleted: ");
        } else {
            console.log("No Video link found for ID: " + delete_id);
        }

        return;
    } catch (error) {
        console.error("Error deleting Video link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
