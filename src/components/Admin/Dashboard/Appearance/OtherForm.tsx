import React, {
  useState,
  useRef,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { ColorPicker } from "./ColorPicker";
import { useAtom } from "jotai";
import { appearanceAtom, updateAppearanceAtom } from "@/lib/store";

export const OtherForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [color, setColor] = useState("#0f0f0f");
  const [updateDiabled, setUpdateDisabled] = useState(true);

  const handleColorChange = (newColor: string) => {
    setUpdateDisabled(false);
    setColor(newColor);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (file && file.name != appearance.bgImage) {
      const data = new FormData();
      data.set("file", file);

      let result = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      result = await result.json();
      //update bgImg
      const bgImg = file.name;
      const newAppearance = {
        ...appearance,
        bgImage: bgImg,
        lastbackground: "image",
      };
      updateAppearance(newAppearance);

      if (result) {
        toast.success("File uploaded successfully");
      } else {
        toast.error("Failed to upload file");
      }
      setUpdateDisabled(true);
    } else if(color != appearance.bgColor) {
      // Update color
      const newAppearance = {
        ...appearance,
        bgColor: color,
        lastbackground: "color",
      };
      updateAppearance(newAppearance);
      toast.success("Color updated successfully");
      setUpdateDisabled(true);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      }
    setUpdateDisabled(false);
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewUrl(null);
    setUpdateDisabled(false);
  };

  const handleViewImage = () => {
    if (previewUrl) {
      window.open(previewUrl, "_blank");
    }
  };

  const handleClick = () => {
    setUpdateDisabled(false);
    fileInputRef.current?.click();
  };

  const [, updateAppearance] = useAtom(updateAppearanceAtom);
  const [appearance, setAppearance] = useAtom(appearanceAtom);

  return (
    <>
      <div className="flex flex-row gap-4 items-center justify-start my-2 border rounded w-full p-3">
        <ColorPicker onChange={handleColorChange} value={color} />
        <div className="flex flex-col gap-2 ">
          <span className="">Background Color</span>
          <span className="bg-black text-white font-semibold text-sm rounded-lg text-center w-fit py-1 px-3">
            {color}
          </span>
        </div>
      </div>
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

          <Button className="w-[100px]" type="submit" disabled={updateDiabled}>
            Update
          </Button>
        </form>
      </div>
    </>
  );
};

export default OtherForm;
