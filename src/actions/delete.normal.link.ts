'use server';

import mongoose, { Types } from "mongoose";
import DbConnect from "@/lib/db";
import Link from "@/utils/models/link.model";

// Function to delete Link links based on user ID and platform
export const deleteNormalLinks = async (delete_id: string) => {
    // Fetch user ID from the session or authentication context
    const userId = "123"; // Replace this with actual session-based user ID

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
        const deleteNormalLink = await Link.findByIdAndDelete(objectId);

        if (deleteNormalLink) {
            console.log("Normal link deleted: " + delete_id);
            console.log(deleteNormalLink);
        } else {
            console.log("No Normal link found for ID: " + delete_id );
        }

        return;
    } catch (error) {
        console.error("Error deleting Normal link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
