import Card from '@/components/Admin/Card';
import PageTitle from '@/components/Admin/PageTitle';
import React from 'react';
import {
    Link2,
    ShoppingBag,
    Video,
} from "lucide-react";
import { cardProps } from '@/components/Admin/Card';
import UserProfile from '@/components/Admin/UserProfile';
import { UserProfileProps } from '@/components/Admin/UserProfile';
import { Button } from '@/components/ui/button';



function Admin() {
    const cardContent: cardProps[] = [
        { icon: Link2, label: 'Add your links', linkLabel: 'Go to Links', link: "/admin/links" },
        { icon: ShoppingBag, label: 'Connect your store', linkLabel: 'Go to Products', link: "/admin/products" },
        { icon: Video, label: 'Add your videos', linkLabel: 'Go to Videos', link: "/admin/videos" },

    ];

    return (

        <section className='flex-1 w-full  '>
            <div className=''>
                <PageTitle tittle='Your Link In Bio Platform' />
            </div>

            <div className='flex flex-wrap gap-6 lg:gap-2 transition-all  pt-6 '>
                {cardContent.map((data, index) => (
                    <Card
                        key={index}
                        icon={data.icon}
                        label={data.label}
                        linkLabel={data.linkLabel}
                        link={data.link}
                    />
                ))}
            </div>

        </section>



    );
}

export default Admin;
