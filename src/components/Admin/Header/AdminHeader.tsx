import React from 'react';
import { Button } from '../../ui/button';
import UserAvator from './Avator';
import Mode from './Mode';
import Logo from './Logo';
import Link from 'next/link';


const AdminHeader = () => {
    return (
        <div className='flex justify-between items-center  admincontainer py-4'>
            <Link href={"/"}> <Logo /></Link>
            <div className='flex  gap-4 items-center justify-center'>
                <Link href="/upgrade"><Button>Try pro for free</Button></Link>
                <Mode />
                <UserAvator />
            </div>
        </div>
    );
}

export default AdminHeader;
