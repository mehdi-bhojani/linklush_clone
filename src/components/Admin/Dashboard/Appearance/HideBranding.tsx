import React, { useEffect, useState } from "react";
import Logo from "../../Header/Logo";
import { Switch } from "@/components/ui/switch";
import toast from "react-hot-toast";
import { Appearance } from "@/lib/store";

interface brandProps {
  appearance: Appearance;
  updateAppearance: (getAppearance: Appearance) => void;
}

const HideBranding:React.FC<brandProps> = (props) => {
  const [hideBrand, setHideBrand] = useState<boolean>(false);

  useEffect(() => {
      const appearanceData = props.appearance;
      setHideBrand(appearanceData?.hideBranding || false);
  }, [props.appearance]);

  const handleSwitchChange = async (checked: boolean) => {
    setHideBrand(checked);
    const newAppearance = {
      ...props.appearance,
      hideBranding: checked,
    };
    props.updateAppearance(newAppearance);
  }
  
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
