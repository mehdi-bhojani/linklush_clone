import React from "react";
import { Button } from "@/components/ui/button";
import copy from "clipboard-copy";
import {
  Copy,
  Ellipsis,
  GripVertical,
  MousePointerClick,
  SquarePen,
  ToggleLeft,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import TheEditDialog from "./TheEditDialog";
import toast from "react-hot-toast";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { videoLinks as videoLinksType } from "@/lib/store";
import { ObjectId } from "mongoose";

interface TheLinkProps {
  videoLinks: videoLinksType;
  onDelete: (_id: ObjectId) => void;
  onUpdate: (videoLink: videoLinksType) => void;
}

const TheLink: React.FC<TheLinkProps> = ({
  videoLinks,
  onDelete,
  onUpdate,
}) => {
   
  const [dialogueOpen, setDialogueOpen] = React.useState(false);
  const handleCopy = async () => {
    await copy(videoLinks.videoUrl);
    toast.success("Link copied to clipboard");
  };
  return (
    <div className="w-full">
      <div className="border p-3  w-full">
        <div className="flex gap-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <div className="truncate flex flex-row gap-2 justify-start items-center w-7/10 flex-shrink">
              <div className="flex items-center w-1/10">
                <GripVertical />
              </div>
              <div className="flex items-center w-1/10 flex-shrink">
                <Avatar>
                  <AvatarImage src={(videoLinks.avatarUrl!=null && videoLinks.avatarUrl!=undefined)? `${videoLinks.avatarUrl}` : "" } />
                  <AvatarFallback>{videoLinks.title.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col flex-shrink max-w-[30vw]  ">
                <span className="text-black truncate">{videoLinks.title}</span>
                <span className="text-slate-600 truncate">{videoLinks.videoUrl}</span>
              </div>
            </div>

            <div className="min-w-[10%] flex-shrink">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="border p-2 hover:bg-slate-200">
                    <Ellipsis />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={handleCopy}>
                    <span className="flex gap-2">
                      <Copy strokeWidth={1} size={20} color="#6B7280" /> Copy
                    </span>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem >
                    <span className="flex gap-2">
                    <ChevronsRight strokeWidth={1} size={20} color="#6B7280"  />
                      Animate
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem >
                    <span className="flex gap-2">
                    <LockKeyhole strokeWidth={1} size={20} color="#6B7280"  />
                      Protect
                    </span>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem onClick={() => setDialogueOpen(true)}>
                    <span className="flex gap-2">
                      <SquarePen strokeWidth={1} size={20} color="#6B7280" />{" "}
                      Edit
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span
                      className="flex gap-2"
                      onClick={() => onDelete(videoLinks._id)}
                    >
                      <Trash2 strokeWidth={1} size={20} color="#6B7280" />{" "}
                      Delete
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <MousePointerClick color="#6B7280" strokeWidth={1} />
            <span>
              <span className="font-semibold">Clicks:</span> {videoLinks.click || 0}
            </span>
            <span>
              <span className="font-semibold">CTR:</span> {videoLinks.clickThroughRate || 0}%
            </span>
            {!videoLinks.enabled && <ToggleLeft color="#6B7280" strokeWidth={1} />}
          </div>
        </div>
      </div>
      <TheEditDialog
        videoLinks={videoLinks}
        onUpdate={onUpdate}
        dialogOpen={dialogueOpen}
        setDialogueOpen={setDialogueOpen}
      />
    </div>
  );
}

export default TheLink;