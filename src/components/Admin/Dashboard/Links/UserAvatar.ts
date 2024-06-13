
import { ChangeEvent, FormEvent, RefObject } from "react";
import toast from 'react-hot-toast';

export const handleImageAdd = async (
  file: File | null
) => {
  if (!file) return;
  console.log(file);

  const data = new FormData();
  data.set("file", file);

  let result: Response = await fetch("/api/upload/avatar", {
    method: "POST",
    body: data,
  });
  
  result = await result.json();
  console.log("Uploaded files is : ");
  console.log(result);
  
  if (result) {
    // toast.success("Image uploaded successfully");
  } else {
    toast.error("Failed to upload Image");
  }
  return file.name;
};

export const handleFileChange = (
  e: ChangeEvent<HTMLInputElement>,
  setFile: (file: File | null) => void,
  setPreviewUrl: (url: string | null) => void
) => {
  if (e.target.files) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  }
};

export const handleRemoveImage = (
  setFile: (file: File | null) => void,
  setPreviewUrl: (url: string | null) => void
) => {
  setFile(null);
  setPreviewUrl(null);
};

export const handleViewImage = (previewUrl: string | null) => {
  if (previewUrl) {
    window.open(previewUrl, "_blank");
  }
};

export const handleClick = (fileInputRef: RefObject<HTMLInputElement>) => {
  fileInputRef.current?.click();
};
