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


const formSchema = z.object({
  normalLink: z.string().url(),
});
interface ChildComponentProps {
  onCreate: (newLink : any) => void;
}

const TheDialog: React.FC<ChildComponentProps> = ({ onCreate }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      normalLink: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) =>{

    console.log(values);
    const newLink = {
      linkUrl: values.normalLink,
      title: "Mehdi Bhojani",
    }
    onCreate(newLink);
    setDialogOpen(false);

  }

  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={()=>setDialogOpen(true)}>Add New Link</Button>
      <Dialog open={dialogOpen} onOpenChange={()=>setDialogOpen(false)}>
        <DialogContent className="sm:max-w-[500px] rounded">
          <DialogHeader>
            <DialogTitle>
            Please enter the link you want to add.
            </DialogTitle>
            <DialogDescription>
              We&apos;ll take care of the rest.
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
                    name="normalLink"
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
                  <Button type="submit" className="w-full"><Plus /> Add</Button>
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
