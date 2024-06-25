'use server';

import DbConnect from "@/lib/db";
import Welcome from "@/utils/models/welcome.model";

export const saveWelcome = async (reqData: any) => {
    const { userid, fullname, hearaboutlinklush,  category, foodbeverage} = reqData;
    try {
        // Connect to the database
        await DbConnect();
        const createdWelcome = await Welcome.create({
            userid,
            fullname,
            hearaboutlinklush,
            category,
            foodbeverage,
        });
        console.log("Welcome To our website");
        return JSON.parse(JSON.stringify(createdWelcome));
        // return createdWelcome;
    } catch (error) {
        console.error("Error saving welcome info:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
