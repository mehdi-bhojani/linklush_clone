import React from "react";
import { JsonObject } from "next-auth/adapters";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SocialProfile {
  icon: string; // Assuming icon is a string representing the icon name
  name: string;
}

const socialProfiles: SocialProfile[] = [
  {
    icon: "FacebookIcon",
    name: "Facebook",
  },
  {
    icon: "InstagramIcon",
    name: "Instagram",
  },
  {
    icon: "LinkedinIcon",
    name: "LinkedIn",
  },
  {
    icon: "SnapchatIcon",
    name: "Snapchat",
  },
  {
    icon: "TwitterIcon",
    name: "Twitter",
  },
  {
    icon: "TiktokIcon",
    name: "Tiktok",
  },
  {
    icon: "WhatsappIcon",
    name: "WhatsApp",
  },
  {
    icon: "YoutubeIcon",
    name: "YouTube",
  },
  {
    icon: "BehanceIcon",
    name: "Behance",
  },
  {
    icon: "DiscordIcon",
    name: "Discord",
  },
  {
    icon: "MessengerIcon",
    name: "Messenger",
  },
  {
    icon: "GoogleIcon",
    name: "Google",
  },
  {
    icon: "PinterestIcon",
    name: "Pinterest",
  },
  {
    icon: "VkontakteIcon",
    name: "Vkontakte",
  },
  {
    icon: "StackOverflowIcon",
    name: "Stack Overflow",
  },
  {
    icon: "TelegramIcon",
    name: "Telegram",
  },
  {
    icon: "TikTokIcon",
    name: "TikTok",
  },
  {
    icon: "SlackIcon",
    name: "Slack",
  },
];

function SocialProfilesComponent() {
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
      case "TikTok":
        return <TikTokIcon />;
      case "Snapchat":
        return <SnapchatIcon />;
      case "Slack":
        return <SlackIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <Label htmlFor="platform" className="sr-only">
        Platform
      </Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent id="platform" className="w-full">
          {socialProfiles.map((elem, index) => (
            <SelectItem value={elem.name} key={index} className="w-full flex flex-row gap-2 items-center">
              <span className="flex items-center">
                {/* {renderIconComponent(elem.name)}   */}
              </span> <span>{elem.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function TheDialog(props: JsonObject) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Social</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px] rounded">
          <DialogHeader>
            <DialogTitle>
              Please Select the Platform you Want to Select
            </DialogTitle>
            <DialogDescription>
              We will take care of the rest.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="flex flex-col gap-3">

              <Label htmlFor="platform" >
                Platform
              </Label>
              <Select>
                <SelectTrigger id="platform">
                  <SelectValue placeholder="Select a Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    {socialProfiles.map((currElem, index) => (
                      <SelectItem key={index} value={currElem.name}>{currElem.name}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Label htmlFor="link">
                Url
              </Label>
              <Input
                id="link"
                placeholder="https://linklu.sh"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
               Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div >
  );
}

TheDialog.propTypes = {};

export default TheDialog;
