import { Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";

import { Button } from "@/components/ui/button";

export function Mode() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');

  // Retrieve the theme from local storage and set it on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }, [setTheme]);

  // Update the theme both in state and local storage
  const handleThemeChange = (newTheme: any) => {
    setCurrentTheme(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <Sun />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-2 mr-10" align="center" side="bottom">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Button
            variant={"outline"}
            className="w-full border-none"
            onClick={() => handleThemeChange("light")}
          >
            <DropdownMenuItem>
              <span>Light</span>
            </DropdownMenuItem>
          </Button>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <Button
            variant={"outline"}
            className="w-full border-none"
            onClick={() => handleThemeChange("dark")}
          >
            <DropdownMenuItem>
              <span>Dark</span>
            </DropdownMenuItem>
          </Button>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <Button
            variant={"outline"}
            className="w-full border-none"
            onClick={() => handleThemeChange("system")}
          >
            <DropdownMenuItem>
              <span>System</span>
            </DropdownMenuItem>
          </Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}