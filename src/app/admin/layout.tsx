"use client"

import SideNavBar from '@/components/Admin/SideNavBar';
import UserProfile, { UserProfileProps } from '@/components/Admin/UserProfile';
import UserProfileLogo from '@/components/Admin/UserProfileLogo';
import { Button } from '@/components/ui/button';
import React, { FC, ReactNode, useState } from 'react';

interface AuthLayoutProps {
    children: ReactNode
}

const userProfileData = {
    userName: "Muhammad Hashim",
}

const AdminLayout: FC<AuthLayoutProps> = ({ children }) => {
    const [userProfile, setUserProfile] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [showHeader, setShowHeader] = useState(true);

    function toggleUserProfile() {
        setUserProfile(prevUserProfile => !prevUserProfile);
        setShowSidebar(!userProfile); // Toggle sidebar visibility based on userProfile state
        setShowHeader(!userProfile); // Toggle header visibility based on userProfile state
    }

    return (
        <div className="min-h-screen flex flex-col">

            <header className="bg-blue-600 text-white adminheadercontainer hidden md:block h-16">
                <h1 className="text-2xl">Header</h1>
            </header>

            {showHeader && (
                <header className="bg-blue-600 text-white adminheadercontainer h-16 block md:hidden">
                    <h1 className="text-2xl">Header</h1>
                </header>
            )}

            <div className="flex flex-1 overflow-hidden admincontainer">
                <aside className="border-r hidden md:block">
                    <SideNavBar />
                </aside>

                {showSidebar && (
                    <aside className="border-r md:hidden">
                        <SideNavBar />
                    </aside>
                )}

                {/* Large screen */}
                <main className="flex-1 p-6 hidden md:flex">
                    <section className="flex-1 p-2">
                        {children}
                    </section>

                    <section className="flex-1 md:border-l md:block p-6">
                        <UserProfile userName={userProfileData.userName} buttonText={"Learn more"} buttonUrl={"/"} />
                        <UserProfileLogo />
                    </section>
                </main>

                {/* Small screen */}
                <main className="flex-1 flex overflow-hidden   md:hidden">
                    {userProfile ? (

                        <section className="flex-1 p-2">
                            {children}
                        </section>
                    ) : (
                        <section className="flex-1 md:border-l md:block pt-6">
                            <UserProfile userName={userProfileData.userName} buttonText={"Learn more"} buttonUrl={"/"} />
                            <UserProfileLogo />
                        </section>
                    )}

                    <Button onClick={toggleUserProfile} className="absolute bottom-5 left-1/2 block md:hidden transform -translate-x-1/2">
                        {userProfile ? "Close" : "Preview"}
                    </Button>
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
