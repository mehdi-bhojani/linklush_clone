"use client"

import AdminHeader from '@/components/Admin/Header/AdminHeader';
import SideNavBar from '@/components/Admin/SideNavbar/SideNavBar';
import UserProfile, { UserProfileProps } from '@/components/Admin/UserProfile/UserProfile';
import UserProfileLogo from '@/components/Admin/UserProfile/UserProfileLogo';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';


import "../globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const userProfileData = {
    userName: "Muhammad Hashim",
  }

  const [userProfile, setUserProfile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  function toggleUserProfile() {
    setUserProfile(prevUserProfile => !prevUserProfile);
    setShowSidebar(userProfile); // Toggle sidebar visibility based on userProfile state
    setShowHeader(userProfile); // Toggle header visibility based on userProfile state
  }


  return (
    <html lang="en" className="light">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>

        <div className="min-h-screen flex flex-col">

          <header className=" adminheadercontainer hidden md:block  border-b ">
            <AdminHeader />
          </header>

          {showHeader && (
            <header className="adminheadercontainer block md:hidden border-b">
              <AdminHeader />
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

                <section className="flex-1 md:border-l md:block pt-6">
                  <UserProfile userName={userProfileData.userName} buttonText={"Learn more"} buttonUrl={"/"} />
                  <UserProfileLogo />
                </section>
              ) : (

                <section className="flex-1 p-2">
                  {children}
                </section>
              )}

              <Button onClick={toggleUserProfile} className="absolute bottom-5 left-1/2 block md:hidden transform -translate-x-1/2">
                {userProfile ? "Close" : "Preview"}
              </Button>
            </main>
          </div>
        </div>
      </body>
    </html>

  );
}
