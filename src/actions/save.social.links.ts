'use server';

import DbConnect from "@/lib/db";
import Social from "@/utils/models/social.model";

export const saveSocialLinks = async (socialLinks: any) => {
    const { userid, platform, socialLink, clicks, clickThroughRate, enabled } = socialLinks;

    try {
        // Connect to the database
        await DbConnect();

        const findedSocialLink = await Social.findOne({
            userid,
            platform,
        });

        if (findedSocialLink) {
            const updatedSocialLink = await Social.updateOne({ userid, platform }, { socialLink, clicks, clickThroughRate, enabled });
            console.log("Social link updated: ");
            return JSON.parse(JSON.stringify(updatedSocialLink));
        }
        // Create a new social link
        const createdSocialLink = await Social.create({
            userid,
            platform,
            socialLink,
            clicks,
            clickThroughRate,
        });
        console.log("Social link created: ");
        return JSON.parse(JSON.stringify(createdSocialLink));
    } catch (error) {
        console.error("Error saving social link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
