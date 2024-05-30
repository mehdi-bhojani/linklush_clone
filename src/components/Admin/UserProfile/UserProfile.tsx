import React from 'react';
import { Button } from '../../ui/button';
import Link from 'next/link';

// Define the props type with PascalCase naming convention

export type UserProfileProps = {
    userName: string;
    buttonText: string
    buttonUrl: string
};

const UserProfile: React.FC<UserProfileProps> = ({ userName, buttonText, buttonUrl }) => {
    const userInitial = userName.charAt(0).toUpperCase();
    return (
        <div className=' bg-slate-100 flex flex-col items-center justify-center pb-4'>
            <div className="flex flex-col space-y-1.5 text-center p-3 sm:p-4 ">
                <span className="flex items-center justify-center h-20 w-20 mx-auto border bg-slate-100 dark:bg-zinc-800 rounded-full">
                    <span>{userInitial}</span>
                </span>
                <h3 className="font-semibold tracking-tight text-lg">{userName}</h3>
            </div>
            <Link href={buttonUrl}>  <Button className=''>{buttonText}</Button></Link>
        </div>


    );
}

export default UserProfile;
