"use client";
import { z } from "zod";
import React, { useRef } from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { saveSocialLinks } from "@/actions/save.social.links";
import { useAtom } from "jotai";
import { socialLinksAtom } from "@/lib/store";

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



const formSchema = z.object({
  platform: z.string(),
  socialLink: z.string().url(),
});
interface ChildComponentProps {
  onCreate: (newLink : any) => void;
}

const TheDialog: React.FC<ChildComponentProps> = ({ onCreate }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [socialLinks, setSocialLinks] = useAtom(socialLinksAtom);
  const allUniquePlatforms = socialLinks.map((currElem) => currElem.platform);
  const filterSocialProfiles = socialProfiles.filter((currElem) => {
    return !allUniquePlatforms.includes(currElem.name);
});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: "",
      socialLink: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) =>{

    const newLink = {
      platform: values.platform,
      socialLink: values.socialLink,
      clicks:0,
      clickThroughRate:0,
    }
    onCreate(newLink);
    setDialogOpen(false);
    // await saveSocialLinks(JSON.parse(JSON.stringify(newLink)));

  }

  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={()=>setDialogOpen(true)}>Add New Social</Button>
      <Dialog open={dialogOpen} onOpenChange={()=>setDialogOpen(false)}>
        <DialogContent className="sm:max-w-[500px] rounded">
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
              <FormProvider {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Platform</FormLabel>
                        <FormControl>
                          <Controller
                            name="platform"
                            control={form.control}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger id="platform">
                                  <SelectValue placeholder="Select a Platform" />
                                </SelectTrigger>
                                <SelectContent>
                                  {filterSocialProfiles.map((currElem, index) => (
                                    <SelectItem
                                      key={index}
                                      value={currElem.name}
                                    >
                                      {currElem.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="socialLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Url</FormLabel>
                        <FormControl>
                          <Input
                            id="link"
                            placeholder="https://linklu.sh"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Submit</Button>
                </form>
              </FormProvider>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default TheDialog;
