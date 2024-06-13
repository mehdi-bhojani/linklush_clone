import React from "react";
import { Button } from "@/components/ui/button";
import copy from 'clipboard-copy';
import {
  Copy,
  Delete,
  Ellipsis,
  GripVertical,
  Lock,
  MousePointerClick,
  SquarePen,
  ToggleLeft,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
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
} from "@/lib/Social";
import { deleteSocialLinks } from "@/actions/delete.social.link";
import TheEditDialog from "./TheEditDialog";
import toast from "react-hot-toast";
function TheLink({
  platform,
  socialLink,
  clicks,
  ctr,
  enabled,
  onDelete,
  onUpdate,
}: {
  platform: string;
  socialLink: string;
  clicks: number;
  ctr: number;
  enabled: boolean;
  onDelete: (platform:string) => void;
  onUpdate: (updated:any) => void;
}) {
  const renderIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Facebook":
        return <FacebookIcon />;
      case "Instagram":
        return <InstagramIcon />;
      case "LinkedIn":
        return <LinkedinIcon />;
      case "Behance":
        return <BehanceIcon />;
      case "Discord":
        return <DiscordIcon />;
      case "Messenger":
        return <MessengerIcon />;
      case "Twitter":
        return <TwitterIcon />;
      case "Google":
        return <GoogleIcon />;
      case "Pinterest":
        return <PinterestIcon />;
      case "Vkontakte":
        return <VkontakteIcon />;
      case "StackOverflow":
        return <StackOverflowIcon />;
      case "Telegram":
        return <TelegramIcon />;
      case "YouTube":
        return <YouTubeIcon />;
      case "Tiktok":
        return <TikTokIcon />;
      case "Snapchat":
        return <SnapchatIcon />;
      case "Slack":
        return <SlackIcon />;
      default:
        return null;
    }
  };
  const [dialogueOpen, setDialogueOpen] = React.useState(false);
 const handleCopy = async() => {
  await copy(socialLink);
  toast.success("Link copied to clipboard");
}
  return (
    <div className="w-full">
      <div className="border p-3  w-full">
        <div className="flex gap-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <div className="truncate flex flex-row gap-2 justify-start items-center w-7/10 flex-shrink">
              <div className="flex items-center w-1/10">
                <GripVertical />
              </div>
              <div className="flex items-center w-1/10 flex-shrink">
                <span className="px-2 py-2 border border-slate-600 rounded">
                  {renderIconComponent(platform)}
                </span>
              </div>
              <div className="flex flex-col flex-shrink max-w-[35vw] sm:max-w-[50vw] ">
                <span className="font-semibold">{platform}</span>
              </div>
            </div>

            <div className="min-w-[10%] flex-shrink">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="border p-2 hover:bg-slate-200">
                    <Ellipsis />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={handleCopy}>
                    <span className="flex gap-2">
                      <Copy strokeWidth={1} size={20} color="#6B7280" /> Copy
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>setDialogueOpen(true)}>
                    <span className="flex gap-2" >
                      <SquarePen strokeWidth={1} size={20} color="#6B7280" />{" "}
                      Edit
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="flex gap-2" onClick={()=>onDelete(platform)}>
                      <Trash2 strokeWidth={1} size={20} color="#6B7280" />{" "}
                      Delete
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <MousePointerClick color="#6B7280" strokeWidth={1} />
            <span>
              <span className="font-semibold">Clicks:</span> {clicks || 0}
            </span>
            <span>
              <span className="font-semibold">CTR:</span> {ctr || 0}%
            </span>
            {
              !enabled 
                && 
              <ToggleLeft color="#6B7280" strokeWidth={1} />
            }
          </div>
        </div>
      </div>
      <TheEditDialog platform={platform} enabled={enabled} socialLink={socialLink} onUpdate={onUpdate} dialogOpen={dialogueOpen} setDialogueOpen={setDialogueOpen} />      
    </div>
  );
}

export default TheLink;
