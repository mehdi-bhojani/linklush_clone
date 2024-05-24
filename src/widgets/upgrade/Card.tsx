// components/Card.tsx
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

interface CardProps {
    title: string;
    price: string;
    priceUnit: string;
    description: string;
    features: string[];
    buttonText: string;
    onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, price, priceUnit, description, features, buttonText, onButtonClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        onButtonClick();
    };

    return (
        <div className="px-6 py-8 xs:px-8 xs:py-10 md:p-10 lg:px-6 bg-white rounded-2xl shadow-md border h-fit">
            <div className="text-center">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <h3 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-2">
                    {price}
                    <span className="text-gray-700 text-base font-medium">/monthly</span>
                </h3>
                <p className="text-gray-700 mb-3 md:mb-4 leading-7">{description}</p>
            </div>
            <div data-orientation="horizontal" role="none" className="shrink-0 bg-zinc-200 dark:bg-zinc-800 h-[1px] w-full my-5 md:my-6"></div>
            <div className="flex flex-col gap-4 *:flex *:gap-1 *:items-center *:text-sm md:*:text-base *:text-gray-700 mb-5 sm:mb-6">
                {features.map((feature, index) => (
                    <div key={index}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-circle-check"
                        >
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M9 12l2 2l4 -4"></path>
                        </svg>
                        {feature}
                    </div>
                ))}
            </div>
            <div className="text-center">
                <Button variant={isClicked ? 'default' : 'outline'} className='w-full' onClick={handleClick}>
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

export default Card;
