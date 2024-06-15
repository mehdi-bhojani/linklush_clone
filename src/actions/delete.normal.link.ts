'use server';

import  { Types } from "mongoose";
import DbConnect from "@/lib/db";
import Link from "@/utils/models/link.model";

// Function to delete Link links based on user ID and platform
export const deleteNormalLinks = async (delete_id: string,userid: string) => {

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
        const deleteNormalLink = await Link.findOneAndDelete({ _id: objectId, userid });

        if (deleteNormalLink) {
            console.log("Normal link deleted: ");
        } else {
            console.log("No Normal link found for ID: " + delete_id);
        }

        return;
    } catch (error) {
        console.error("Error deleting Normal link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
