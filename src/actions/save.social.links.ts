'use server';

import DbConnect from "@/lib/db";
import Social from "@/utils/models/social.model";

export const saveSocialLinks = async (socialLinks:any) => {
    const {  platform, socialLink, clicks, clickThroughRate,enabled } = socialLinks;
    
    try {
        // Connect to the database
        await DbConnect();
        
        const findedSocialLink = await Social.findOne({
            userid:"123",
            platform,
        });

        if(findedSocialLink){
            console.log("Social link found: " + platform);
            const updatedSocialLink = await Social.updateOne({userid:"123", platform}, {socialLink, clicks, clickThroughRate,enabled});
            console.log(updatedSocialLink);
            return;
        }

        // Create a new social link
        const createdSocialLink = await Social.create({
            userid:"123",
            platform,
            socialLink,
            clicks,
            clickThroughRate,
        });
        
        return;
    } catch (error) {
        console.error("Error saving social link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
