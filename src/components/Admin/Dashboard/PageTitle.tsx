import { cn } from '@/lib/utils';
import React from 'react';


type Props = {
    tittle: string,
    className?: string
}



const PageTitle = ({ tittle, className }: Props) => {
    return (
        <h1 className={cn("text-lg font-semibold sm:text-xl", className)}>{tittle}</h1>
    );
}

export default PageTitle;
