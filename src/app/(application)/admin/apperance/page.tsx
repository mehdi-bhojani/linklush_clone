"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import { ProfileForm } from "@/components/Admin/Dashboard/Appearance/ProfileForm";
import { FontForm } from "@/components/Admin/Dashboard/Appearance/FontForm";
import { TheTabs } from "@/components/Admin/Dashboard/Appearance/TheTabs";
import { OtherForm } from "@/components/Admin/Dashboard/Appearance/OtherForm";
import HideBranding from "@/components/Admin/Dashboard/Appearance/HideBranding";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page(props: any) {

  return (
    <div className="flex gap-2 flex-col">
      <PageTitle tittle="Appearance" />
      <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="flex flex-col space-y-1.5 p-4">
          <h3 className="font-semibold leading-none tracking-tight">Profile</h3>
        </div>
        <div className="p-4 pt-0">
          <ProfileForm  />
        </div>
      </div>
      <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-4">
        <FontForm />
      </div>
      <><TheTabs /></>
      <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="flex flex-col space-y-1.5 p-4">
          <h3 className="font-semibold leading-none tracking-tight">Others</h3>
        </div>
        <div className="p-4 pt-0">
          <OtherForm />
        </div>
      </div>
      <div className="relative w-full rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-4">
        <div className="absolute w-full h-full flex items-center justify-center z-10 top-0 left-0">
          <Button><Link href="/upgrade">Upgrade to Pro</Link></Button>
        </div>
        <div className="blur-[2px] pointer-events-none">
          <HideBranding  />
        </div>
      </div>
    </div>
  );
}

Page.propTypes = {
  any: PropTypes.any,
};

export default Page;
