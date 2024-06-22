'use server';

import DbConnect from "@/lib/db";
import Setting from "@/utils/models/setting.model";

export const getSetting = async({userid}:{userid:string}) => {
    try {
        await DbConnect();
        const findSetting = await Setting.findOne({
            userid,
        })
        return JSON.parse(JSON.stringify(findSetting));
    } catch (error) {
        console.log(error);
    }
}