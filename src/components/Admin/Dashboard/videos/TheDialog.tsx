"use client";
import { z } from "zod";
import React, { useRef, useState } from "react";
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
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";


const formSchema = z.object({
  videoLink: z.string().url(),
});
interface ChildComponentProps {
  onCreate: (newLink : any) => void;
}

const TheDialog: React.FC<ChildComponentProps> = ({ onCreate }) => {
  
  const [linkPreview, setLinkPreview] = useState(null);
  const [buttonDisable, setButtonDisable] = useState(true);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [loading,setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoLink: "",
    },
  });

  const fetchLinkPreview = async (videoLink) => {
    try {
      const response = await fetch(`/api/link-preview?url=${encodeURIComponent(videoLink)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch link preview');
      }
      const data = await response.json();
      setLinkPreview(data);
      return data;
    } catch (error) {
      toast.error('Failed to fetch link preview');
      return null;
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) =>{
    setLoading(true);
    setButtonDisable(true);
    const newLink = {
      videoUrl: values.videoLink,
      title: "Mehdi Bhojani",
      avatarUrl: "",
    }
    const data = await fetchLinkPreview(values.videoLink);
    if(data){
      newLink.title = data.title;
      newLink.avatarUrl = data.images[0] || null;
    }
    console.log(newLink);
    onCreate(newLink);
    setLoading(false);
    setButtonDisable(false);
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
            Please enter the link of the video you want to add.
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
                  onChange={()=>setButtonDisable(false)}
                >
                  <FormField
                    control={form.control}
                    name="videoLink"
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
                  <Button type="submit" className="w-full" disabled={buttonDisable}>{(loading)? <Spinner size="small" className="text-grey mx-2" />:<Plus /> }  Add</Button>
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
