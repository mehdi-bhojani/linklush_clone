'use server';

import DbConnect from "@/lib/db";
import Video from "@/utils/models/video.model";

export const getVideolLinks = async({userid}:{userid:string}) => {
    try {
        await DbConnect();
        const findVideoLinks = await Video.find({
            userid,
        })
        return JSON.parse(JSON.stringify(findVideoLinks));
    } catch (error) {
        console.log(error);
    }
}