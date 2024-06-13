"use client";
import React, { useRef, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { FormDescription } from "@/components/ui/form";
import { normalLinks as normalLinksTypes } from "@/lib/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { handleClick, handleFileChange, handleImageAdd, handleRemoveImage, handleViewImage } from "./UserAvatar";

interface TheEditDialogProps {
  // Define your props here
  normalLinks: normalLinksTypes;
  onUpdate: (normalLink: normalLinksTypes) => void;
  dialogOpen: boolean;
  setDialogueOpen: (open: boolean) => void;
}

const TheEditDialog: React.FC<TheEditDialogProps> = (props) => {
  const methods = useForm({
    defaultValues: {
      _id: props.normalLinks._id?.toString() || "",
      enabled: props.normalLinks.enabled,
      title: props.normalLinks.title,
      linkUrl: props.normalLinks.linkUrl || "",
      section: props.normalLinks.section || "",
      avatarUrl: props.normalLinks.avatarUrl || "",
    },
  });

  const onSubmit = async(data: any) => {
    const newFileName = await handleImageAdd(file);
    data.avatarUrl = await newFileName || props.normalLinks.avatarUrl;
    console.log("Form Data:", data);
    await props.setDialogueOpen(false);
    await props.onUpdate(data);
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  return (
    <div>
      <Dialog
        open={props.dialogOpen}
        onOpenChange={() => props.setDialogueOpen(false)}
      >
        <DialogContent className="sm:max-w-[500px] rounded">
          <DialogHeader className="text-left ">
            <DialogTitle>Edit Link</DialogTitle>
            <DialogDescription>
              Update the link with the new information.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="flex flex-col gap-4">
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <div className="hidden">
                    <Label className="my-2" htmlFor="_id">
                      _id
                    </Label>
                    <Controller
                      name="_id"
                      control={methods.control}
                      render={({ field }) => (
                        <Input
                          id="_id"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <Label className="my-2" htmlFor="enabled">
                      Enabled
                    </Label>
                    <Controller
                      name="enabled"
                      control={methods.control}
                      render={({ field }) => (
                        <Switch
                          id="enabled"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Label className="my-2" htmlFor="title">
                      Title
                    </Label>
                    <Controller
                      name="title"
                      control={methods.control}
                      render={({ field }) => (
                        <Input
                          id="title"
                          placeholder="Title of the link"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Label className="my-2" htmlFor="linkUrl">
                      Url
                    </Label>
                    <Controller
                      name="linkUrl"
                      control={methods.control}
                      render={({ field }) => (
                        <Input
                          id="linkurl"
                          placeholder="Enter URL"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <Label className="my-2" htmlFor="section">
                      Section
                    </Label>
                    <Controller
                      name="section"
                      control={methods.control}
                      render={({ field }) => (
                        <Input
                          id="section"
                          placeholder="Enter section"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  <div className="my-5">
                    
                    <Label className="my-4">Background Image</Label>
                    
                    <div
                      className="flex flex-col gap-4"
                    >
                      <input
                        hidden
                        type="file"
                        name="file"
                        onChange={(e) =>
                          handleFileChange(e, setFile, setPreviewUrl)
                        }
                        ref={fileInputRef}
                      />
                      <div className="flex flex-row gap-4 items-center">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src={previewUrl || ""} />
                          <AvatarFallback>BG</AvatarFallback>
                        </Avatar>
                        {!previewUrl && (
                          <Button type="button" onClick={() => handleClick(fileInputRef)}>
                            Add
                          </Button>
                        )}
                        {previewUrl && (
                          <div className="flex items-center gap-4">
                            <Button
                              type="button"
                              onClick={() => handleViewImage(previewUrl)}
                            >
                              View
                            </Button>
                            <Button
                              type="button"
                              onClick={() =>
                                handleRemoveImage(setFile, setPreviewUrl)
                              }
                            >
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Update
                  </Button>
                </form>
              </FormProvider>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TheEditDialog;
