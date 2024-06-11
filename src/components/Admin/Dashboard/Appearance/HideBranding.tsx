import React, { useEffect, useState } from "react";
import Logo from "../../Header/Logo";
import { Switch } from "@/components/ui/switch";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { appearanceAtom } from "@/lib/store";
import useAppearanceData from "@/shared/hooks/useAppearenceData";
import { saveApearance } from "@/actions/save.appearance";

function HideBranding() {
  const { data, loading } = useAppearanceData();
  const [hideBrand, setHideBrand] = useState<boolean>(false);
  const [appearance, setAppearance] = useAtom(appearanceAtom);

  useEffect(() => {
    if (data) {
      const appearanceData = (data as any)[0];
      setHideBrand(appearanceData?.hideBranding || false);
    }
  }, [data]);

  const handleSwitchChange = async (checked: boolean) => {
    setHideBrand(checked);
    const newAppearance = {
      ...appearance,
      hideBranding: checked,
    };
    setAppearance(newAppearance);
    try {
      await saveApearance(newAppearance);
      toast.success(`Branding ${checked ? "hidden" : "shown"}`, { duration: 2000 });
    } catch (error) {
      toast.error("Failed to save changes");
    }
  };

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold leading-none tracking-tight">
          Hide Branding
        </h3>
        <Logo />
      </div>
      <div>
        <Switch checked={hideBrand} onCheckedChange={handleSwitchChange} />
      </div>
    </div>
  );
}

export default HideBranding;
