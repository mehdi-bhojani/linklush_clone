"use client"

import { saveSetting } from "@/actions/save.setting";
import SeoSection from "@/components/Admin/Settings/SeoSection";
import SubscribeSection from "@/components/Admin/Settings/SubscribeSection";
import UserName from "@/components/Admin/Settings/UserName";
import { ISetting, settingAtom } from "@/lib/store";
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
  
  const [setting, setSetting] = useAtom(settingAtom);
  const {data:session} = useSession();

  const handleSave = async (newSetting: ISetting) => {
    const toSetting = { 
      ...setting,
      ...newSetting,
      userid: session?.user?.email || "",
      };
    try {
      const response = await saveSetting(toSetting);
      if(response?.message){
        toast.error(response.message);
        return;
      }
      if (response) {
        setSetting(toSetting);
        toast.success("Settings updated successfully!");
      } else {
        toast.error("Failed to update settings!");
      }
    } catch (error) {
      if(error.message === "Username already exists"){
        toast.error("Username already exists");
        return;
      }
      console.error("Error updating settings:", error);
      toast.error("An error occurred while updating settings!");
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <SeoSection setting={setting} onUpdate={handleSave} />
      <UserName setting={setting} onUpdate={handleSave} />
      <SubscribeSection setting={setting}  onUpdate={handleSave}/>

    </>
  );
}

export default Page;

