import React, { FC, ReactNode } from 'react';
import { Button } from '../ui/button';
import { signIn } from "next-auth/react";

interface GoogleButtonProps {
    children: ReactNode;
}

const GoogleButton: FC<GoogleButtonProps> = ({ children }) => {
    const loginWithGoogle = () => {
        console.log("login with google");
        signIn("google");
    };

    return (
        <Button variant={'outline'} className='w-full' onClick={loginWithGoogle}>
            {children}
        </Button>
    );
};

export default GoogleButton;
