'use server';

import DbConnect from "@/lib/db";
import User from "@/utils/models/auth";

export const getUserDetails = async(email:String) => {
    try {
        await DbConnect();
        const findUser = await User.findOne({
            email,
        })
        // Remove password from user
        findUser.password = undefined;
        return JSON.parse(JSON.stringify(findUser));
    } catch (error) {
        console.log(error);
    }
}