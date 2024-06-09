import React from "react";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Delete,
  Ellipsis,
  GripVertical,
  Lock,
  MousePointerClick,
  SquarePen,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { JsonObject } from "next-auth/adapters";

function TheLink({name, facebookLink, clicks, ctr}:{name: string, facebookLink: string, clicks: number, ctr: number}) {
  return (
    <div className="w-full">
      <div className="border p-3  w-fu">
        <div className="flex gap-1 flex-col">
          <div className="flex items-center gap-2">
          <div className="flex items-center w-1/10">
              <GripVertical />
            </div>
            <div className="flex items-center w-1/10 flex-shrink">
              <span className="px-3 py-2 bg-slate-200 rounded-full">{name.charAt(0)}</span>
            </div>
            <div className="flex flex-col flex-shrink max-w-[35vw] sm:max-w-[50vw] truncate">
              <span className="font-semibold">{name}</span>
              <span className="truncate">{facebookLink}</span>
            </div>
            <div className="min-w-[10%] flex-shrink">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="border p-2 hover:bg-slate-200">
                    <Ellipsis />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <span className="flex gap-2">
                      <Copy strokeWidth={1} size={20} color="#6B7280" /> Copy
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="flex gap-2">
                      <SquarePen strokeWidth={1} size={20} color="#6B7280" />{" "}
                      Edit
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="flex gap-2">
                      <Trash2 strokeWidth={1} size={20} color="#6B7280" />{" "}
                      Delete
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Lock color="#6B7280" strokeWidth={1} />
            <MousePointerClick color="#6B7280" strokeWidth={1} />
            <span>
              <span className="font-semibold">Clicks:</span> {clicks.toString()}
            </span>
            <span>
              <span className="font-semibold">CTR:</span> {ctr.toString()}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheLink;
