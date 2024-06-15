"use client";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Appearance } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { profileFormSchema } from "@/lib/formSchema/appearance.schema";

interface ProfilerProps {
  appearance: Appearance;
  updateAppearance: (getAppearance: Appearance) => void;
}

export const ProfileForm: React.FC<ProfilerProps> = (props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [updateDisabled, setupdateDisabled] = useState(true);

  useEffect(() => {
    formMethods.setValue("publicName", props.appearance?.name);
    formMethods.setValue("description", props.appearance?.description);
    setChecked(props.appearance?.infoButtonEnable);
    formMethods.setValue("infoButtonText", props.appearance?.infoButtonText);
    formMethods.setValue("infoButtonLink", props.appearance?.infoButtonLink);
    props.appearance?.avatar != "" && props.appearance?.avatar != undefined
      ? setPreviewUrl(`/avatars/${props.appearance?.avatar}`)
      : "";
  }, [props.appearance]);

  const defaultValues = {
    publicName: "",
    description: "",
    infoButtonEnable: false,
    infoButtonText: "",
    infoButtonLink: "",
  };

  const formMethods = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    if (file) {
      const uniqueFileName = `${Date.now()}-${file.name}`;
      const formData = new FormData();
      formData.append("file", file, uniqueFileName);

      try {
        const response = await fetch("/api/upload/avatar", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const newAppearance: Appearance = {
            ...props.appearance,
            userid: "",
            name: data.publicName,
            description: data.description,
            avatar: uniqueFileName,
            infoButtonEnable: data.infoButtonEnable,
            infoButtonText: data.infoButtonText,
            infoButtonLink: data.infoButtonLink,
          };

          await props.updateAppearance(newAppearance);
          return;
        } else {
          toast.error("Failed to upload file");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Failed to upload file");
      }
    } else {
      const newAppearance: Appearance = {
        ...props.appearance,
        userid: "",
        name: data.publicName,
        description: data.description,
        avatar: "",
        infoButtonEnable: data.infoButtonEnable,
        infoButtonText: data.infoButtonText,
        infoButtonLink: data.infoButtonLink,
      };
      props.updateAppearance(newAppearance);
      return;
    }
    setupdateDisabled(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const handleViewImage = () => {
    if (previewUrl) {
      window.open(previewUrl, "_blank");
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Form {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="w-full space-y-6"
        onChange={() => setupdateDisabled(false)}
      >
        <FormField
          name="publicName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Controller
                  name="publicName"
                  control={formMethods.control}
                  render={({ field }) => (
                    <Input placeholder="your name" {...field} />
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="my-5">
          <FormLabel className="my-4">Avatar</FormLabel>
          <div className="flex flex-col gap-4">
            <input
              hidden
              type="file"
              name="file"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <div className="flex flex-row gap-4 items-center">
              <Avatar className="w-14 h-14">
                <AvatarImage src={previewUrl || undefined} />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              {!previewUrl && (
                <Button type="button" onClick={handleClick}>
                  Add
                </Button>
              )}
              {previewUrl && (
                <div className="flex items-center gap-4">
                  <Button type="button" onClick={handleViewImage}>
                    View
                  </Button>
                  <Button type="button" onClick={handleRemoveImage}>
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300" />

        <FormField
          name="infoButtonEnable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between">
              <FormLabel className="text-sm">Button</FormLabel>
              <FormControl>
                <Switch
                  checked={checked}
                  onCheckedChange={(value) => {
                    setChecked(value);
                    field.onChange(value);
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="infoButtonText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Button Text</FormLabel>
              <FormControl>
                <Input placeholder="Learn More" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="infoButtonLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Button Link</FormLabel>
              <FormControl>
                <Input placeholder="https://linklu.sh" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={updateDisabled}>
          Update
        </Button>
      </form>
    </Form>
  );
};
