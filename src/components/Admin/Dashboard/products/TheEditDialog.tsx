"use client";

import React, { useRef, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog } from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  handleClick,
  handleFileChange,
  handleImageAdd,
  handleRemoveImage,
  handleViewImage,
} from "./UserAvatar";

import { productLinks as productLinksTypes } from "@/lib/store";

// Define Zod schema
const productLinkSchema = z.object({
  _id: z.string().optional(),
  enabled: z.boolean(),
  title: z.string().min(1, "Title is required"),
  linkUrl: z.string().url("Invalid URL format"),
  regularPrice: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid price format"),
  salePrice: z.string().regex(/^\d+(\.\d{1,2})?$/, "Invalid price format").optional(),
  section: z.string().optional(),
  avatarUrl: z.string().optional(),
});

interface TheEditDialogProps {
  productLinks: productLinksTypes;
  onUpdate: (normalLink: productLinksTypes) => void;
  dialogOpen: boolean;
  setDialogueOpen: (open: boolean) => void;
}

const TheEditDialog: React.FC<TheEditDialogProps> = (props) => {
  const methods = useForm({
    resolver: zodResolver(productLinkSchema),
    defaultValues: {
      _id: props.productLinks._id?.toString() || "",
      enabled: props.productLinks.enabled,
      title: props.productLinks.title,
      linkUrl: props.productLinks.productUrl || "",
      regularPrice: props.productLinks.regularPrice.toString() || "",
      salePrice: props.productLinks.salePrice.toString() || "",
      section: props.productLinks.section || "",
      avatarUrl: props.productLinks.avatarUrl || "",
    },
  });

  const onSubmit = async (data: any) => {
    const newFileName = await handleImageAdd(file);
    data.avatarUrl = (newFileName)  
      ?(await "/avatars/") + newFileName 
      : props.productLinks.avatarUrl;
    console.log("Form Data:", data);
    await props.setDialogueOpen(false);
    await props.onUpdate(data);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    props.productLinks.avatarUrl || null
  );

  return (
    <div>
      <Dialog
        open={props.dialogOpen}
        onOpenChange={() => props.setDialogueOpen(false)}
      >
        <DialogContent className="sm:max-w-[500px] rounded">
          <DialogHeader className="text-left ">
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Update the product with the new information.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="flex flex-col gap-4">
              <FormProvider {...methods}>
                <Form {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormField
                      control={methods.control}
                      name="_id"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormLabel>ID</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={methods.control}
                      name="enabled"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enable</FormLabel>
                          <FormControl>
                            <Switch
                              className="float-right"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={methods.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Title of the link" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={methods.control}
                      name="linkUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Url</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter URL" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-4 justify-between">
                    <FormField
                      control={methods.control}
                      name="regularPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Regular Price</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Price" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={methods.control}
                      name="salePrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sale Price</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Price" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    </div>
                    <FormField
                      control={methods.control}
                      name="section"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Section</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter section" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="my-5">
                      <Label className="my-4">Thumbnail</Label>

                      <div className="flex flex-col gap-4">
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
                            <AvatarImage src={previewUrl || "/avatars/placeholder-image"} />
                            <AvatarFallback>BG</AvatarFallback>
                          </Avatar>
                          {!previewUrl && (
                            <Button
                              type="button"
                              onClick={() => handleClick(fileInputRef)}
                            >
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
                </Form>
              </FormProvider>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TheEditDialog;
