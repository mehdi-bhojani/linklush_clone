'use server';

import DbConnect from "@/lib/db";
import { normalLinks, normalLinksAtom } from "@/lib/store";
import Link from "@/utils/models/link.model";
import { useAtom } from "jotai";

export const saveNormalLinks = async (normalLinks: any) => {

    const { _id, enabled, title, linkUrl, section, avatarUrl, protection, animation } = normalLinks;
    try {
        // Connect to the database
        await DbConnect();
        if (_id !== undefined || _id !== null || _id !== "") {
            console.log(normalLinks);
            const findNormalLink = await Link.findById(_id);

            if (findNormalLink) {
                console.log("Normla link found: " + findNormalLink);
                const updatedNormalLink = await Link.findByIdAndUpdate(_id, { enabled, title, linkUrl, section, avatarUrl, protection, animation }, { new: true });
                console.log(updatedNormalLink);
                return JSON.parse(JSON.stringify(updatedNormalLink));
            }
        }
        // Create a new social link
        const createdNormalLink = await Link.create({
            userid: "123",
            enabled, title, linkUrl, section, avatarUrl, protection, animation,
        });

        // return createdNormalLink;
    } catch (error) {
        console.error("Error saving social link:", error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
