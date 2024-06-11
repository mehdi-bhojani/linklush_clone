'use server';

import DbConnect from "@/lib/db";
import Appearance from "@/utils/models/appearance.model";

export const getAppearence = async({userid}:{userid:number}) => {
    try {
        await DbConnect();
        const findAppearance = await Appearance.find({
            userid: userid
        })
        return findAppearance;
    } catch (error) {
        console.log(error)
    }
}