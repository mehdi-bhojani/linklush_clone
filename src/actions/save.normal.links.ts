'use server';

import DbConnect from "@/lib/db";
import { normalLinks, normalLinksAtom } from "@/lib/store";
import Link from "@/utils/models/link.model";
import { useAtom } from "jotai";

export const saveNormalLinks = async (normalLinks: any) => {
    const { _id,userid, enabled, title, linkUrl, section, avatarUrl, protection, animation } = normalLinks;
    try {
        // Connect to the database
        await DbConnect();
        if (_id !== undefined && _id !== null && _id !== "") {
            const findNormalLink = await Link.findById(_id);
            if (findNormalLink) {
                const updatedNormalLink = await Link.findByIdAndUpdate(_id, { enabled, title, linkUrl, section, avatarUrl, protection, animation }, { new: true });
                console.log("Normal links updated: ");
                return;
            }
            console.log("No Normal link found for ID: " + _id);
        }
        // Create a new social link
        const createdNormalLink = await Link.create({
            userid,
            enabled, title, linkUrl, section, avatarUrl, protection, animation,
        });
        console.log("normal links created");
        return JSON.parse(JSON.stringify(createdNormalLink));

        // return createdNormalLink;
    } catch (error) {
        console.error("Error saving social link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
