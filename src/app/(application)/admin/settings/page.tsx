import SearchEngineOptimize from '@/components/Admin/Dashboard/Setting/SearchEngineOptimize';
import Subscribe from '@/components/Admin/Dashboard/Setting/Subscribe';
import Username from '@/components/Admin/Dashboard/Setting/Username';
import React from 'react';

function page() {
    return (
        <div>
            <div className="flex flex-col gap-3">
                <SearchEngineOptimize />
                <Username />
                <Subscribe />
            </div>
        </div>
    );
}

export default page;
