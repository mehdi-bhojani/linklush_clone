'use server';

import DbConnect from "@/lib/db";
import { ISetting } from "@/lib/store";
import Setting from "@/utils/models/setting.model";

export const saveSetting = async (toSetting: ISetting): Promise<ISetting | null> => {
  const { userid, seo, userName, subscription } = toSetting;
  try {
    // Connect to the database
    await DbConnect();

    if (userid) {
      const findSetting = await Setting.findOne({ userid });
      if (findSetting) {
        //if chnaging username only check if it already exists
        if (findSetting.userName !== userName) {
          const allUserNames = await Setting.find({ userName });
          if (allUserNames.length > 0) {
            console.log("Username already exists:", userName);
            // throw new Error("Username already exists");
            return JSON.parse(JSON.stringify({message: "Username already exists"}));
          }
        }
        // Update the existing setting
        const updateSetting = await Setting.findByIdAndUpdate(
          findSetting._id,
          { seo, userName, subscription },
          { new: true }
        );
        console.log("Setting updated:", updateSetting);
        return JSON.parse(JSON.stringify(updateSetting));
      }
      console.log("No setting found for userid:", userid);
    }

    // Create a new setting if not found
    const createdSetting = await Setting.create({
      userid,
      seo,
      userName,
      subscription,
    });
    console.log("Setting created for the first time:", createdSetting);
    return JSON.parse(JSON.stringify(createdSetting));

  } catch (error) {
    console.error("Error saving setting:", error);
    throw error; // Rethrow the error to handle it elsewhere
  }
};
