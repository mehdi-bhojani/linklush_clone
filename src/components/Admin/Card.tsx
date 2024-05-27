import React from 'react';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';

export type cardProps = {
    label: string;
    icon: LucideIcon;
    linkLabel: string
    link: string
}

const Card = (props: cardProps) => {
    return (
        <CardContent className='w-[190px] '>
            <div className='flex  items-center gap-1  '>
                <div className='flex-1 border-r border-default   dark:bg-zinc-900 flex justify-center items-center '>
                    <props.icon className='w-10 h-10  lg:w-16 lg:h-16 px-1 ' strokeWidth={1} />
                </div>
                <div className='flex flex-1 flex-col items-center p-1  flex-grow  bg'>
                    <div className='' >
                        {props.label}
                    </div>
                    <div className='inline-flex text-sm items-center justify-center whitespace-nowrap rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2 py-1 mt-1 '>
                        <Link href={props.link}>  {props.linkLabel}</Link>
                    </div>
                </div>

            </div>
        </CardContent>
    );
}

export default Card;


export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={cn('flex flex-col rounded-md border  shadow', props.className)} />
}