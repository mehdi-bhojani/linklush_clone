import React, { useState } from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useAtom } from "jotai";
import {
  appearanceAtom,
  normalLinksAtom,
  productLinksAtom,
  settingAtom,
  socialLinksAtom,
  videoLinksAtom,
} from "../../../lib/store";
import UserProfileLogo from "./UserProfileLogo";
import { getTheme } from "@/lib/theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BellRing,
  Link2,
  LockKeyholeOpen,
  ShoppingBag,
  Video,
} from "lucide-react";
import RenderSocialIcon from "@/components/userProfile/social.link.icon";
import ReactPlayer from "react-player";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface myProps {
  appearance: any;
  normalLinks: any;
  socialLinks: any;
  videoLinks: any;
  productLinks: any;
}

const UserProfile: React.FC<myProps> = (props) => {
  const [appearance] = useAtom(appearanceAtom);
  const [socialLinks] = useAtom(socialLinksAtom);
  const [normalLinks] = useAtom(normalLinksAtom);
  const [videoLinks] = useAtom(videoLinksAtom);
  const [productLinks] = useAtom(productLinksAtom);
  const [settingData] = useAtom(settingAtom);
  const [currentTab, setCurrentTab] = useState("Links");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let { foreground, background, text } = getTheme(
    appearance?.theme || "Clean Gray"
  );

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  if (appearance?.lastbackground === "color") {
    background = appearance?.bgColor;
  } else if (appearance?.lastbackground !== "theme" && appearance?.bgImage) {
    background = `url('/backgrounds/${appearance?.bgImage}')`;
  }

  const avatarUrl = appearance?.avatar ? `/avatars/${appearance?.avatar}` : "";

  return (
    <>
      <div className=" w-full p-5 min-h-screen" style={{ background }}>
        <div className="max-w-xl mx-auto pb-[74px] flex flex-col gap-4">
        <div
          className="flex flex-col items-center justify-center pb-4 rounded-lg border "
          style={{ background: foreground }}
        >
          <div className="flex flex-col items-center justify-center space-y-1.5 text-center p-3 sm:p-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src={avatarUrl}
                alt={appearance?.name || ""}
                style={{ background: foreground }}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold tracking-tight text-lg">
              {appearance?.name || ""}
            </h3>
            <span className="text-sm">
              {appearance?.description || "Random Description"}
            </span>
          </div>
          {appearance?.infoButtonEnable && (
            <div className="my-2">
              <Link href={appearance?.infoButtonLink || ""}>
                <Button className="text-slate-600" style={{ background }}>
                  {appearance?.infoButtonText || ""}
                </Button>
              </Link>
            </div>
          )}
          <div className="flex flex-row gap-2 flex-wrap justify-center items-center w-1/2">
            {socialLinks.length > 0 &&
              socialLinks.map(
                (link, index) =>
                  link.enabled && (
                    <Link key={index} href={link.socialLink} target="_blank">
                      <RenderSocialIcon iconName={link.platform} />
                    </Link>
                  )
              )}
          </div>
        </div>

        {/* Normal Links */}

        {currentTab === "Links" && (
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
        )}

        {/* products */}

        {currentTab === "Products" && (
          <div className="flex flex-wrap justify-start items-stretch">
            {productLinks.map((link, index) => (
              <a
                key={index}
                className="w-1/2 p-2"
                target="_blank"
                href={link.productUrl}
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-lg border border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 linklush-item linklush-product cursor-pointer hover:bg-opacity-95 transition-colors duration-300 shadow-none border-none overflow-hidden h-full"
                  data-type="product"
                  style={{
                    borderRadius: "var(--productBorderRadius, 10px)",
                    backgroundColor: foreground,
                    color: text,
                    outline: text,
                    boxShadow:
                      "var(--productBoxShadow, 0px 0px 0px 0px #000000)",
                  }}
                >
                  <div className="relative p-2 flex flex-col gap-3 h-full">
                    <Image
                      src={link.avatarUrl || "/placeholder-image.jpg"}
                      alt={link.title || "Product Image"}
                      className="w-full h-auto aspect-square"
                      width={100}
                      height={100}
                      style={{
                        borderRadius: "var(--productBorderRadius, 10px)",
                      }}
                    />
                    <h3 className="font-semibold tracking-tight text-sm sm:text-base truncate">
                      {link.title}
                    </h3>
                    <div className="w-full mt-auto">
                      <div className="flex gap-3 w-full">
                        <h3
                          className="font-semibold tracking-tight text-sm sm:text-base"
                          style={{ textDecoration: "none" }}
                        >
                          $ {link?.salePrice}
                        </h3>
                        <h3 className="font-semibold tracking-tight text-sm sm:text-base line-through">
                          $ {link?.regularPrice}
                        </h3>
                      </div>

                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full self-end mt-3 border-0 text-sm sm:text-base"
                        style={{
                          borderRadius:
                            "var(--productButtonBorderRadius, 10px)",
                          backgroundColor: background,
                          color: 'black',
                          outline: text,
                        }}
                      >
                        Buy now
                      </button>

                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        {/* Videos */}

        {currentTab === "Videos" && (
          <div className="flex gap-4 flex-wrap justify-start items-stretch">
            {videoLinks.map((link, index) => (
              <>
                <Card
                  className="w-1/2 sm:w-1/3 flex flex-col justify-around gap-4"
                  style={{ background: foreground, width: "calc(50% - 10px)" }}
                >
                  <CardContent className="p-3 rounded-lg">
                    <div className="w-8/10 h-[200px]">
                      {/* <Image src={link.avatarUrl} alt={link.title} className="w-full h-full" /> */}
                      <ReactPlayer
                        light={
                          <Image
                            src={link.avatarUrl || "/placeholder-image.jpg"}
                            alt={link.title}
                            className="w-full h-full"
                            width={100}
                            height={100}
                            style={{
                              borderRadius: "var(--productBorderRadius, 10px)",
                            }}
                          />
                        }
                        url={link.videoUrl}
                        width="100%"
                        height="100%"
                        playing={false}
                      />
                    </div>
                    <h1 className="py-2 text-md">{link.title}</h1>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      className="w-full text-slate-600"
                      style={{ background }}
                    >
                      <Link href={link.videoUrl} target="_blank">
                        Open in App
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </>
            ))}
          </div>
        )}

        {!appearance?.hideBranding && <UserProfileLogo />}
        <div
          className="my-5 mx-auto p-4 flex w-[400px] sm:w-[600px] justify-center gap-4 shadow-md rounded-lg"
          style={{ background: foreground }}
        >
          {normalLinks.length>0 &&  (
          <button
            className="p-2 rounded-lg flex justify-center items-center gap-2 "
            style={{ background }}
            onClick={() => setCurrentTab("Links")}
          >
            <Link2 />
            <span>{currentTab === "Links" && "Links"}</span>
          </button>
          )}

          {productLinks.length>0 && (
          <button
            className="p-2 rounded-lg flex justify-center items-center gap-2 "
            style={{ background }}
            onClick={() => setCurrentTab("Products")}
          >
            <ShoppingBag />
            <span>{currentTab === "Products" && "Products"}</span>
          </button>
          )}

          {videoLinks.length>0 && (
          <button
            className="p-2 rounded-lg flex justify-center items-center gap-2 "
            style={{ background }}
            onClick={() => setCurrentTab("Videos")}
          >
            <Video />
            <span>{currentTab === "Videos" && "Videos"}</span>
          </button>
          )}

          {settingData?.subscription?.enabled && (
          <button
            className="p-2 rounded-lg flex justify-center items-center gap-2"
            style={{ background }}
            onClick={openDrawer}
          >
            <BellRing />
            <span></span>
          </button>
          )}
        </div>
      </div>
      {/* drawer */}
      <Drawer open={isDrawerOpen}>
        {/* <DrawerTrigger>Open</DrawerTrigger> */}
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose onClick={closeDrawer}>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </div>
    </>
  );
};

export default UserProfile;
