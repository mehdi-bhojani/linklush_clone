import React from "react";
import { Button } from "../../ui/button";
import Mode from "./Mode";
import Logo from "./Logo";
import Link from "next/link";
import { DropdownMenuDemoComponent } from "./DropdownMenuComponent";
import { Sparkles } from "lucide-react";

const AdminHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center  admincontainer py-4">
        <Link href={"/"}>
          {" "}
          <Logo />
        </Link>
        <div className="flex  gap-4 items-center justify-center">
          <Link href="/upgrade">
            <Button>
              <Sparkles /> <span className="ml-2">Try pro for free</span>
            </Button>
          </Link>
          <Mode />
          <DropdownMenuDemoComponent />
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
