'use server';

import DbConnect from "@/lib/db";
import Social from "@/utils/models/social.model";

export const getSocialLinks = async({userid}:{userid:string}) => {
    try {
        await DbConnect();
        const findSocialLinks = await Social.find({
            userid: userid
        })
        return findSocialLinks;
    } catch (error) {
        console.log(error);
    }
}