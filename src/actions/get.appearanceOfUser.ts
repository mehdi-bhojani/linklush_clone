'use server';

import DbConnect from "@/lib/db";
import Appearance from "@/utils/models/appearance.model";

export const getAppearence = async({userid}:{userid:string}) => {
    try {
        await DbConnect();
        const findAppearance = await Appearance.findOne({
            userid,
        })
        return JSON.parse(JSON.stringify(findAppearance));
    } catch (error) {
        console.log(error)
    }
}