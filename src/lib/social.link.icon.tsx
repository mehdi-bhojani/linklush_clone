import React from 'react';
import {
BehanceIcon,
DiscordIcon,
FacebookIcon,
MessengerIcon,
TwitterIcon,
GoogleIcon,
InstagramIcon,
LinkedinIcon,
PinterestIcon,
VkontakteIcon,
StackOverflowIcon,
TelegramIcon,
YouTubeIcon,
TikTokIcon,
SnapchatIcon,
SlackIcon,
} from '@/lib/Social';

interface IconProps {
iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {
const RenderSocialIcon = () => {
    switch (iconName) {
        case 'Facebook':
            return <FacebookIcon />;
        case 'Instagram':
            return <InstagramIcon />;
        case 'LinkedIn':
            return <LinkedinIcon />;
        case 'Behance':
            return <BehanceIcon />;
        case 'Discord':
            return <DiscordIcon />;
        case 'Messenger':
            return <MessengerIcon />;
        case 'Twitter':
            return <TwitterIcon />;
        case 'Google':
            return <GoogleIcon />;
        case 'Pinterest':
            return <PinterestIcon />;
        case 'Vkontakte':
            return <VkontakteIcon />;
        case 'StackOverflow':
            return <StackOverflowIcon />;
        case 'Telegram':
            return <TelegramIcon />;
        case 'YouTube':
            return <YouTubeIcon />;
        case 'Tiktok':
            return <TikTokIcon />;
        case 'Snapchat':
            return <SnapchatIcon />;
        case 'Slack':
            return <SlackIcon />;
        default:
            return null;
    }
};

return <>{RenderSocialIcon()}</>;
};

export default Icon;