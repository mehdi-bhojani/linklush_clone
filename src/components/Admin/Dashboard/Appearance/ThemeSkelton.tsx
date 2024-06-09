import { Skeleton } from '@/components/ui/skeleton'
import { CircleCheck, CircleCheckBig, CircleCheckBigIcon } from 'lucide-react';
import React from 'react'

interface ThemeSkeletonProps {
    foreground: string;
    background: string;
    text: string;
    active?: boolean;
  }
  
  const ThemeSkelton: React.FC<ThemeSkeletonProps> = ({ foreground, background, text, active }) => {
    return (
      <div className="flex relative items-center justify-center w-32 border" style={{ backgroundColor: background }}>
        {active && <span className='absolute top-2 right-1'><CircleCheck fill='#000' color="#fff"  /></span>}
        <div className="p-4 rounded-lg text-center w-full" style={{ backgroundColor: foreground }}>
          <div className="h-5 mx-auto rounded-lg my-2 shade-skeleton" style={{ backgroundColor: text, width: '40%' }}></div>
          <div className="h-5 my-2 rounded-lg shade-skeleton" style={{ backgroundColor: text }}></div>
          <div className="h-5 my-2 rounded-lg shade-skeleton" style={{ backgroundColor: text }}></div>
          <div className="h-5 my-2 rounded-lg shade-skeleton" style={{ backgroundColor: text }}></div>
        </div>
      </div>
    );
  };
  
export default ThemeSkelton;