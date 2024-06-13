'use server';

import DbConnect from "@/lib/db";
import Social from "@/utils/models/social.model";

// Function to delete social links based on user ID and platform
export const deleteSocialLinks = async (deletePlatform: string) => {
    // Fetch user ID from the session or authentication context
    const userId = "123"; // Replace this with actual session-based user ID

    try {
        // Connect to the database
        await DbConnect();

        // Delete the social link based on user ID and platform
        const deleteSocialLink = await Social.findOneAndDelete({
            userid: "123",
            platform: deletePlatform,
        });

        if (deleteSocialLink) {
            console.log("Social link deleted: " + deletePlatform);
            console.log(deleteSocialLink);
        } else {
            console.log("No social link found for user: " + userId + " and platform: " + deletePlatform);
        }

        return;
    } catch (error) {
        console.error("Error deleting social link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
