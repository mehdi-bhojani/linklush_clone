"use client";
import React, { useRef } from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

const BgImgComponent: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    console.log(file);

    const data = new FormData();
    data.set("file", file);

    let result = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    result = await result.json();
    console.log(result);

    if (result) {
      toast.success("File uploaded successfully");
    } else {
      toast.error("Failed to upload file");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
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
  return (
    <div className="my-5">
      <Label className="my-4">Background Image</Label>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          hidden
          type="file"
          name="file"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <div className="flex flex-row gap-4 items-center">
          <Avatar className="w-14 h-14">
            <AvatarImage src={previewUrl || ""} />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
          {!previewUrl && <Button onClick={handleClick}>Add</Button>}
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

        <Button className="w-[100px]" type="submit" disabled={!previewUrl}>
          Update
        </Button>
      </form>
    </div>
  );
};

export default BgImgComponent;
