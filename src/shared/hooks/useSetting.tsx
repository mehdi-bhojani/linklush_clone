"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { settingAtom } from "@/lib/store";
// import { useSession } from "next-auth/react";
import { getSetting } from "@/actions/get.setting";

const useSettingData = (clientuserid?: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [setting,setSetting] = useAtom(settingAtom);
  //get user from here
  // const { data: session, status } = useSession();
  const userid  = clientuserid || "";

  useEffect(() => {
    GetSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const GetSetting = async () => {
    console.log("getting setting with userid",userid);
    await getSetting({ userid })
      .then((res: any) => {
        setData(res);
        setSetting(res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return { data, loading };
};

export default useSettingData;