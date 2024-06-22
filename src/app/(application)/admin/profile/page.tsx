"use client";

import React from "react";
import PageTitle from "@/components/Admin/Dashboard/PageTitle";
import { ProfileForm } from "@/components/Admin/Dashboard/Profile/ProfileForm";
import TheDialog from "@/components/Admin/Dashboard/Profile/TheDialog";
import { signOut, useSession } from "next-auth/react";
import { saveUserDetails } from "@/actions/save.user.details";
import toast from "react-hot-toast";
import { deleteUserAccount } from "@/actions/delete.user.account";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
    const { data: session, update } = useSession();
    const router = useRouter();
  const deleteAccount = async () => {
    try {
      // Delete user account
      const deletedUser = await deleteUserAccount(session.user.email);
        // Redirect to the login page
        await signOut();
        await router.push("/sign-in");

    } catch (error) {
      toast.error("Error deleting user account");
    }
  }

  const updateDetails = async (data) => {
    try {
      // Save user details to the server/database
      const updatedUser = await saveUserDetails(data);

      if (updatedUser) {
        // Update session data
        await update({
          user: {
            ...session.user,
            name: data.name,
          },
        });

        toast.success("User details updated");

        // Trigger session refresh
        await fetch('/api/auth/session?update', { method: 'GET' });
      }
    } catch (error) {
      toast.error("Error updating user details");
    }
  };

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
          <ProfileForm
            name={session?.user?.name}
            email={session?.user?.email}
            onUpdate={updateDetails}
          />
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
            Permanently delete your account and all your data.
          </p>
          <TheDialog 
            onDelete = {deleteAccount}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
