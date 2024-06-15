'use server';

import DbConnect from "@/lib/db";
// import Normal from "@/utils/models/Normal.model";
import Link from "@/utils/models/link.model";

export const getNormalLinks = async({userid}:{userid:string}) => {
    try {
        await DbConnect();
        const findNormalLinks = await Link.find({
            userid,
        })
        return JSON.parse(JSON.stringify(findNormalLinks));
    } catch (error) {
        console.log(error);
    }
}