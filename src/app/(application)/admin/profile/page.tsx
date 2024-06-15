"use client";

import React from "react";
import { any } from "zod";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import { ProfileForm } from "@/components/Admin/Dashboard/Profile/ProfileForm";
import TheDialog from "@/components/Admin/Dashboard/Profile/TheDialog";

const Page:React.FC = () =>{

    return (
        <div className="flex gap-2 flex-col">
            <PageTitle tittle="Profile" />
            <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="font-semibold leading-none tracking-tight">
                        Your Information
                    </h3>
                </div>
                <div className="p-4 pt-0">
                    <ProfileForm />
                </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
                <div className="flex flex-col space-y-1.5 p-4">
                    <h3 className="font-semibold leading-none tracking-tight">
                        Delete Account
                    </h3>
                </div>
                <div className="p-4 pt-0">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Deleting your account is permanent and cannot be undone. All of your data will be removed from our servers.
                    </p>
                    {/* <button className="mt-4 bg-destructive hover:bg-destructive-dark text-white  rounded-md px-4 py-2 transition-colors" >
                        Delete Account
                    </button> */}
                    <TheDialog />
                </div>
            </div>
        </div>
    );
}


export default Page;
