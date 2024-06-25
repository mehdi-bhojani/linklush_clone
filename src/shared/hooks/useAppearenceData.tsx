"use client";

import { getAppearence } from "@/actions/get.appearanceOfUser";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { appearanceAtom } from "@/lib/store";
// import { useSession } from "next-auth/react";

const useAppearanceData = (clientuserid?: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appearance, setAppearance] = useAtom(appearanceAtom);
  //get user from here
  // const { data: session, status } = useSession();
  const userid = clientuserid ||  "";

  useEffect(() => {
    GetAppearance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const GetAppearance = async () => {
    console.log("getting appearance with userid", userid);
    await getAppearence({ userid: userid })
      .then((res: any) => {
        setData(res);
        setLoading(false);
        setAppearance(res);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return { data, loading };
};

export default useAppearanceData;