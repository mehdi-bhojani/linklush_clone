'use server';

import DbConnect from "@/lib/db";
import User from "@/utils/models/auth";

export const saveUserDetails = async (userDetails: any) => {
    const { email, name } = userDetails;
    try {
        // Connect to the database
        await DbConnect();

        const emailFound = await User.findOne({
            email,
        });

        if (emailFound) {
            const updatedUser = await User.updateOne({
                email,
            }, {
                name,
            });
            console.log("user deatils updated: ");
            return JSON.parse(JSON.stringify(updatedUser));
        } else {
            return new Error("User not found");
        }
        // Create a new social link
    } catch (error) {
        console.error("Error saving user deatils:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
