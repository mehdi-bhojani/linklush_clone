'use server';

import DbConnect from "@/lib/db";
import { normalLinks, normalLinksAtom } from "@/lib/store";
import Video from "@/utils/models/video.model";

export const saveVideoLinks = async (normalLinks: any) => {
    const { _id,userid, enabled, title,  videoUrl, section, avatarUrl, protection, animation } = normalLinks;
    try {
        // Connect to the database
        await DbConnect();
        if (_id !== undefined && _id !== null && _id !== "") {
            const findNormalLink = await Video.findById(_id);
            if (findNormalLink) {
                const updatedNormalLink = await Video.findByIdAndUpdate(_id, { enabled, title, videoUrl, section, avatarUrl, protection, animation }, { new: true });
                console.log("Video links updated: ");
                return;
            }
            console.log("No Video link found for ID: " + _id);
        }
        // Create a new video link
        const createdVideoLink = await Video.create({
            userid,
            enabled, title, videoUrl, section, avatarUrl, protection, animation,
        });
        console.log("Video links created");
        return JSON.parse(JSON.stringify(createdVideoLink));

        // return createdVideoLink;
    } catch (error) {
        console.error("Error saving Video link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
