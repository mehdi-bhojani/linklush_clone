import React, { use, useEffect, useState } from "react";
import Logo from "../../Header/Logo";
import { Switch } from "@/components/ui/switch";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { appearanceAtom, updateAppearanceAtom } from "@/lib/store";

function HideBranding() {
const [hideBrand, setHideBrand] = useState<boolean>(true);

const handleSubmit = () => {
    setHideBrand(!hideBrand);
    const newAppearance = {
        ...appearance,
        hideBranding: hideBrand,
    };
    updateAppearance(newAppearance);    
    toast.success(`Branding ${(hideBrand)?"shown":"hidden"}`);
}

const [appearance, setAppearance] = useAtom(appearanceAtom);
const [, updateAppearance] = useAtom(updateAppearanceAtom);

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold leading-none tracking-tight">
          Hide Branding
        </h3>
        <Logo />
      </div>
      <div>    
        <Switch
        checked={hideBrand}
         onCheckedChange={()=>handleSubmit()} />
      </div>
    </div>
  );
}

export default HideBranding;
