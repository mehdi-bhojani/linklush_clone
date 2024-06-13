import React, { useEffect } from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useAtom } from "jotai";
import { appearanceAtom } from "../../../lib/store";
import UserProfileLogo from "./UserProfileLogo";
import { getTheme } from "@/lib/theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAppearanceData from "@/shared/hooks/useAppearenceData";

export type UserProfileProps = {
  userName: string;
  buttonText: string;
  buttonUrl: string;
};

const UserProfile: React.FC<UserProfileProps> = ({
  userName,
  buttonText,
  buttonUrl,
}) => {
  const [appearance, setAppearance] = useAtom(appearanceAtom);

  let { foreground, background, text } = getTheme(appearance.theme);

  if (appearance.lastbackground === "theme") {
  } else if (appearance.lastbackground === "color") {
    background = appearance.bgColor;
  } else {
    background = appearance.bgImage
      ? `url('/backgrounds/${appearance.bgImage}')`
      : "";
  }

  const avatarUrl = appearance.avatar ? `/avatars/${appearance.avatar}` : "";

  return (
    <>
      <div
        className="flex flex-col items-center justify-center pb-4"
        style={{ background, color: text }}
      >
        <div className="flex flex-col items-center justify-center space-y-1.5 text-center p-3 sm:p-4">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src={avatarUrl}
              alt="@shadcn"
              style={{ background: foreground, color: text }}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold tracking-tight text-lg">
            {appearance.name || userName}
          </h3>
          <span className="text-sm">
            {appearance.description || "Random Description"}
          </span>
        </div>
        <Link href={appearance.infoButtonLink || buttonUrl}>
          {appearance.infoButtonEnable && (
            <Button style={{ background: foreground, color: text }}>
              {appearance.infoButtonText || buttonText}
            </Button>
          )}
        </Link>
      </div>
      {appearance.hideBranding && <UserProfileLogo />}
    </>
  );
};

export default UserProfile;
