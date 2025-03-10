import { Button } from "@/components/ui/button";
import { themes } from "@/data/themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThemeSkelton from "./ThemeSkelton";
import { useEffect, useState } from "react";
import { Appearance } from "@/lib/store";
interface ThemeSkeletonProps {
  foreground: string;
  background: string;
  text: string;
}

interface tabsProps {
  appearance: Appearance;
  updateAppearance: (getAppearance: Appearance) => void;
}

export const TheTabs: React.FC<tabsProps> = (props) => {
  let [currTheme, setCurrentTheme] = useState("Clean Gray");
  let [updateDisabled, setupdateDisabled] = useState(true);

  useEffect(() => {
    setCurrentTheme(props.appearance?.theme);
  }, [props.appearance]);

  const handleSubmit = async () => {
    //update atom
    const newAppearance = {
      ...props.appearance,
      userid: "",
      theme: currTheme,
      lastbackground: "theme",
    };

    props.updateAppearance(newAppearance);
    setupdateDisabled(true);
  };

  const handleThemeChange = async (theme: string) => {
    setCurrentTheme(theme);
    setupdateDisabled(false);
  };

  return (
    <Tabs defaultValue="Basic" className="w-full">
      <div className="flex flex-row gap-2 flex-start bg-slate-100 p-2 items-center">
        <span className="whitespace-nowrap text-sm text-mute font-semibold">
          Design Mode:
        </span>
        <TabsList className="w-fit grid grid-cols-2">
          <TabsTrigger value="Basic">Basic</TabsTrigger>
          <TabsTrigger value="Advanced">Advanced</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="Basic">
        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>
              Make changes to your Basic here. Click save when you are done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-between">
              {themes.map((theme, index) => (
                <div
                  key={index}
                  className="m-1 cursor-pointer"
                  onClick={() => handleThemeChange(theme.name)}
                >
                  <ThemeSkelton
                    active={currTheme === theme.name}
                    foreground={theme.foreground}
                    background={theme.background}
                    text={theme.text}
                  />
                  <p className="text-center mt-2">{theme.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} disabled={updateDisabled}>
              Update
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Advanced">
        <Card>
          <div className="w-[300px] sm:w-[500px] border-none m-auto">
            <CardHeader className="flex flex-col gap-4 justify-center">
              <CardTitle className="text-center">Upgrade to Pro!</CardTitle>
              <CardDescription className="text-center ">
                This feature is only available to Pro subscribers. Upgrade now
                to unlock the full potential of our platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
            <CardFooter>
              <Button className="m-auto">Upgrade to Pro</Button>
            </CardFooter>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
