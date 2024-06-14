"use client";

import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import {
  Share2,
  LayoutDashboard,
  Link2,
  ShoppingBag,
  Video,
  BarChartBig,
  Settings,
  AppWindow,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";

const SideNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(false);
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    setMobileWidth(onlyWidth < 768);
  }, [onlyWidth]);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative px-0 pr-2  sm:pr-4 flex flex-col ">
      {!mobileWidth && (
        <div className="absolute right-[-24px] top-6">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full bg-slate-200 h-[40px] p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: LayoutDashboard,
            variant: "ghost",
            href: "/admin",
          },
          {
            title: "Links",
            label: "",
            icon: Link2,
            variant: "ghost",
            href: "/admin/links",
          },
          {
            title: "Products",
            label: "",
            icon: ShoppingBag,
            variant: "ghost",
            href: "/admin/products",
          },
          {
            title: "Videos",
            label: "",
            icon: Video,
            variant: "ghost",
            href: "/admin/videos",
          },
          {
            title: "Social",
            label: "",
            icon: Share2,
            variant: "ghost",
            href: "/admin/social",
          },
          {
            title: "Analytics",
            label: "",
            icon: BarChartBig,
            variant: "ghost",
            href: "/admin/analytics",
          },
          {
            title: "Appearance",
            label: "",
            icon: AppWindow,
            variant: "ghost",
            href: "/admin/apperance",
          },
          {
            title: "Settings",
            label: "",
            icon: Settings,
            variant: "ghost",
            href: "/admin/settings",
          },
        ]}
      />
    </div>
  );
};

export default SideNavBar;
