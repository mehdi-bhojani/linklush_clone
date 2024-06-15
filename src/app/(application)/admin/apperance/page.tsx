"use client";

import React, { useState, useEffect } from "react";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import { ProfileForm } from "@/components/Admin/Dashboard/Appearance/ProfileForm";
import { FontForm } from "@/components/Admin/Dashboard/Appearance/FontForm";
import { TheTabs } from "@/components/Admin/Dashboard/Appearance/TheTabs";
import { OtherForm } from "@/components/Admin/Dashboard/Appearance/OtherForm";
import HideBranding from "@/components/Admin/Dashboard/Appearance/HideBranding";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Appearance, appearanceAtom } from "@/lib/store";
import { useSession } from "next-auth/react";
import { saveApearance } from "@/actions/save.appearance";
import { useAtom } from "jotai";
import toast from "react-hot-toast";

const Page: React.FC = () => {
  const [appearance, setAppearance] = useAtom(appearanceAtom);
  const { data: session, status } = useSession();
  const updateAppearance = async (getAppearance: Appearance) => {
    //update appearance
    const newAppearance = {
      ...getAppearance,
      userid: session?.user?.email || "",
    };
    const res = await saveApearance(newAppearance);
    setAppearance(newAppearance);
    toast.success("Appearance updated successfully");
  };

  return (
    <div className="flex gap-2 flex-col">
      <PageTitle tittle="Appearance" />
      <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="flex flex-col space-y-1.5 p-4">
          <h3 className="font-semibold leading-none tracking-tight">Profile</h3>
        </div>
        <div className="p-4 pt-0">
          <ProfileForm
            appearance={appearance}
            updateAppearance={updateAppearance}
          />
        </div>
      </div>
      <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-4">
        <FontForm
          appearance={appearance}
          updateAppearance={updateAppearance}
        />
      </div>
      <>
        <TheTabs appearance={appearance} updateAppearance={updateAppearance} />
      </>
      <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
        <div className="flex flex-col space-y-1.5 p-4">
          <h3 className="font-semibold leading-none tracking-tight">Others</h3>
        </div>
        <div className="p-4 pt-0">
          <OtherForm
            appearance={appearance}
            updateAppearance={updateAppearance}
          />
        </div>
      </div>
      <div className="relative w-full rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-4">
        <div className="absolute w-full h-full flex items-center justify-center z-10 top-0 left-0">
          <Button>
            <Link href="/upgrade">Upgrade to Pro</Link>
          </Button>
        </div>
        <div className="blur-[2px] pointer-events-none">
          <HideBranding
            appearance={appearance}
            updateAppearance={updateAppearance}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
