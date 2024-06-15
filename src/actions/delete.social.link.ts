'use server';

import DbConnect from "@/lib/db";
import Social from "@/utils/models/social.model";

// Function to delete social links based on user ID and platform
export const deleteSocialLinks = async (deletePlatform: string, userid: string) => {

    try {
        // Connect to the database
        await DbConnect();

        // Delete the social link based on user ID and platform
        const deleteSocialLink = await Social.findOneAndDelete({
            userid,
            platform: deletePlatform,
        });

        if (deleteSocialLink) {
            console.log("Social link deleted: ");
        } else {
            console.log("No social link found for user: " + userid + " and platform: ");
        }
        
        return;
    } catch (error) {
        console.error("Error deleting social link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
