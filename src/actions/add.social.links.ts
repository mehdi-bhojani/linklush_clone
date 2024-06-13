// import DbConnect from "@/lib/db";
// import { socialLinks as socialLinksTypes} from "@/lib/store";
// import Social from "@/utils/models/social.model";

// export const addSocialLinks = async (newSocialLink:socialLinksTypes) => {
//     if (!newSocialLink || !newSocialLink.userid || !newSocialLink.platform) {
//         throw new Error("Invalid or incomplete social link data");
//     }

//     try {
//         await DbConnect();
//         const findSocialLink = await Social.findOne({
//             userid: newSocialLink.userid,
//             platform: newSocialLink.platform,
//         });

//         if (findSocialLink) {
//             return { message: "Social links already exist" };
//         }

//         const saveSocialLink = await Social.create(newSocialLink);
//         return saveSocialLink;
//     } catch (error) {
//         throw new Error("Failed to add social links: " + error);
//     }
// };
