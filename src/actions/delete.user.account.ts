'use server';

import DbConnect from "@/lib/db";
import User from "@/utils/models/auth";

// Function to delete Link links based on user ID and platform
export const deleteUserAccount = async (email : String) => {

    try {
        // Connect to the database
        await DbConnect();

        // Delete the Link link based on the ObjectId
        const deleteUserAccount = await User.findOneAndDelete({ email });

        if (deleteUserAccount) {
            console.log("User Account deleted: ");
        } else {
            console.log("No User Account found for id : " + email);
        }
        return;

    } catch (error) {
        console.error("Error deleting user Account:", error);
    }
};
