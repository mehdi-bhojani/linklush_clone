import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
             <Card>
          <div className="w-[300px] sm:w-[500px] border-none m-auto">
            <CardHeader className="flex flex-col gap-4 justify-center">
              <CardTitle className="text-center text-lg">Upgrade to Premium!</CardTitle>
              <CardDescription className="text-center ">
              This feature is only available to Premium subscribers. Upgrade now to unlock the full potential of our platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
            <CardFooter>
              <Button className="m-auto"><Link href="/upgrade"> Upgrade to Premium</Link></Button>
            </CardFooter>
          </div>
        </Card>
        </div>
    );
}

export default page;
