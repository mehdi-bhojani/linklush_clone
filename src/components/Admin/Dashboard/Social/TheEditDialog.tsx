"use client";
import React from "react";
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
import { platform } from "os";
import { X } from "lucide-react";
import { FormDescription } from "@/components/ui/form";

interface TheEditDialogProps {
  // Define your props here
  platform: string;
  socialLink: string;
  enabled: boolean;
  onUpdate: (updated: any) => void;
  dialogOpen: boolean;
  setDialogueOpen: (open: boolean) => void;
}

const TheEditDialog: React.FC<TheEditDialogProps> = (props) => {
  const methods = useForm({
    defaultValues: {
      platform: props.platform,
      socialLink: props.socialLink,
      enabled: props.enabled,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    props.setDialogueOpen(false);
    props.onUpdate(data);
  };

  return (
    <div>
      <Dialog open={props.dialogOpen} onOpenChange={()=>props.setDialogueOpen(false)}>
        <DialogContent className="sm:max-w-[500px] rounded">
          <DialogHeader className="text-left ">
            <DialogTitle>Edit {props.platform}</DialogTitle>
            <DialogDescription>
              Update the profile with the new information.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="flex flex-col gap-4">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <div className="flex flex-row justify-between">
                    <Label htmlFor="enabled">Enabled</Label>
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
                    <Label htmlFor="socialLink">Url</Label>
                    <Controller
                      name="socialLink"
                      control={methods.control}
                      render={({ field }) => (
                        <Input
                          id="socialLink"
                          placeholder="Enter URL"
                          {...field}
                        />
                        )}
                        />
                        <FormDescription className="my-2">Example: https://twitter.com/twitterusername</FormDescription>
                  </div>
                  <Button type="submit" className="w-full">Update</Button>
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
