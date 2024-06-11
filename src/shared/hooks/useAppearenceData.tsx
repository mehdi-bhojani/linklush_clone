"use client";

import { getAppearence } from "@/actions/get.appearanceOfUser";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { appearanceAtom } from "@/lib/store";

const useAppearanceData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appearance,setAppearance] = useAtom(appearanceAtom);
  //get user from here
  const userid  = 124;

  useEffect(() => {
    GetAppearance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const GetAppearance = async () => {
    await getAppearence({ userid: userid })
      .then((res: any) => {
        setData(res);
        setLoading(false);
        setAppearance(res[0]);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return { data, loading };
};

export default useAppearanceData;