'use server';

import  { Types } from "mongoose";
import DbConnect from "@/lib/db";
import Product from "@/utils/models/product.model";

// Function to delete Link links based on user ID and platform
export const deleteProductLinks = async (delete_id: string,userid: string) => {

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
        const deleteProductLink = await Product.findOneAndDelete({ _id: objectId, userid });

        if (deleteProductLink) {
            console.log("Product link deleted: ");
        } else {
            console.log("No Product link found for ID: " + delete_id);
        }

        return;
    } catch (error) {
        console.error("Error deleting Product link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
