
import React from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { CardContent } from '../Admin/Dashboard/Card';
import { Button } from '../ui/button';
import Link from 'next/link';

const PremiumCard: React.FC = () => {
    return (
        <Card className='w-full m-5 h-fit border-none bg-[#ffffffd2]'>
            <div className=" border-none m-auto">
                <CardHeader className="flex flex-col gap-4 justify-center">
                    <CardTitle className="text-center">Upgrade to Pro!</CardTitle>
                    <CardDescription className="text-center ">
                        This feature is only available to Pro subscribers. Upgrade now
                        to unlock the full potential of our platform.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2"></CardContent>
                <CardFooter>
                    <Button className="m-auto"><Link href="/upgrade">Upgrade to Pro</Link></Button>
                </CardFooter>
            </div>
        </Card>
    );
};

export default PremiumCard;