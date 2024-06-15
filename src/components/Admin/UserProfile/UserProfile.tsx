import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useAtom } from "jotai";
import {
  appearanceAtom,
  normalLinksAtom,
  socialLinksAtom,
} from "../../../lib/store";
import UserProfileLogo from "./UserProfileLogo";
import { getTheme } from "@/lib/theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LockKeyholeOpen } from "lucide-react";
import RenderSocialIcon from "@/components/userProfile/social.link.icon";

const UserProfile: React.FC<any> = ({
  userDetails,
}) => {

  const [appearance] = useAtom(appearanceAtom);
   const [socialLinks] = useAtom(socialLinksAtom);
   const [normalLinks] = useAtom(normalLinksAtom);

  let { foreground, background, text } = getTheme(appearance?.theme || "Clean Gray");

  if (appearance?.lastbackground === "color") {
    background = appearance?.bgColor;
  } else if (appearance?.lastbackground !== "theme" && appearance?.bgImage) {
    background = `url('/backgrounds/${appearance?.bgImage}')`;
  }

  const avatarUrl = appearance?.avatar ? `/avatars/${appearance?.avatar}` : "";

  return (
    <>
      <div className="flex flex-col gap-4 w-full p-5" style={{ background }}>
        <div
          className="flex flex-col items-center justify-center pb-4 rounded-lg border"
          style={{ background: foreground }}
        >
          <div className="flex flex-col items-center justify-center space-y-1.5 text-center p-3 sm:p-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src={avatarUrl}
                alt={appearance?.name || userDetails.name}
                style={{ background: foreground }}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold tracking-tight text-lg">
              {appearance?.name || userDetails.name}
            </h3>
            <span className="text-sm">
              {appearance?.description || "Random Description"}
            </span>
          </div>
          {appearance?.infoButtonEnable && (
            <div className="my-2">
              <Link href={appearance?.infoButtonLink || userDetails.name}>
                <Button className="text-slate-600" style={{ background }}>
                  {appearance?.infoButtonText || userDetails.name}
                </Button>
              </Link>
            </div>
          )}
          <div className="flex flex-row gap-2 flex-wrap justify-center items-center w-1/2">
            {socialLinks.length>0 && socialLinks.map((link, index) => (
              link.enabled && <Link key={index} href={link.socialLink} target="_blank">
                <RenderSocialIcon iconName={link.platform} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {normalLinks.map((link, index) => (
            <a
              key={index}
              href={link.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex flex-row justify-between w-full p-2 rounded-lg items-center"
                style={{ background: foreground }}
              >
                <div className="flex gap-4 flex-start w-full items-center">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={link.avatarUrl && `/avatars/${link.avatarUrl}`}
                      style={{ background, color: text }}
                    />
                    <AvatarFallback>{link.title.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h1 className="font-semibold text-sm capitalize">
                    {link.title}
                  </h1>
                </div>
                {link.protection && (
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <LockKeyholeOpen />
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
        {!appearance?.hideBranding && <UserProfileLogo />}
      </div>
    </>
  );
};

export default UserProfile;
