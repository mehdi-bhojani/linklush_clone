import React, { FC, ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode
}


const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <main className="h-screen flex flex-col items-center justify-center">
            <div className="w-full rounded-2xl border px-6 py-10 xs:px-8 md:p-12 lg:px-16 max-w-[650px] mx-auto bg-white shadow">
                {children}
            </div>
        </main>
    );
}

export default AuthLayout;
