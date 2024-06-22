import SeoSection from "@/components/Admin/Settings/SeoSection";
import SubscribeSection from "@/components/Admin/Settings/SubscribeSection";
import UserName from "@/components/Admin/Settings/UserName";
import React from "react";

function page() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <SeoSection />
      <UserName />
      <SubscribeSection />
      
    </>
  );
}

export default page;
