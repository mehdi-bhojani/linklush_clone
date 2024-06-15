'use server'

import DbConnect from "@/lib/db";
import { Appearance as AppearanceType} from "@/lib/store";
import Appearance from "@/utils/models/appearance.model";


export const saveApearance = async(appearance:AppearanceType)=>{
    const UserId = appearance.userid;
    try {
        await DbConnect();
        const newAppearance = await Appearance.findOne({
            userid: UserId,
        });
        if(newAppearance){
            await Appearance.findOneAndUpdate(
                {userid: UserId},
                {
                name: appearance?.name,
                description: appearance?.description,
                avatar: appearance?.avatar,
                infoButtonEnable: appearance?.infoButtonEnable,
                infoButtonText: appearance?.infoButtonText,
                infoButtonLink: appearance?.infoButtonLink,
                font: appearance?.font,
                theme: appearance?.theme,
                bgColor: appearance?.bgColor,
                bgImage: appearance?.bgImage,
                hideBranding: appearance?.hideBranding,
                lastbackground: appearance?.lastbackground,
            });
            console.log("appearance update successfully");
            return;
 
        }else{
            await Appearance.create({
                userid: appearance?.userid,
                name: appearance?.name,
                description: appearance?.description,
                avatar: appearance?.avatar,
                infoButtonEnable: appearance?.infoButtonEnable,
                infoButtonText: appearance?.infoButtonText,
                infoButtonLink: appearance?.infoButtonLink,
                font: appearance?.font,
                theme: appearance?.theme,
                bgColor: appearance?.bgColor,
                bgImage: appearance?.bgImage,
                hideBranding: appearance?.hideBranding,
                lastbackground: appearance?.lastbackground,
            });
            console.log("appearance created successfully");
            return;   
        }
    } catch (error) {
        console.error("Error saving email: ", error);
    }
}