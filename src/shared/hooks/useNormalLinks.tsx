"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getNormalLinks } from "@/actions/get.normal.links";
import { normalLinks, normalLinksAtom } from "@/lib/store";
// import { useSession } from "next-auth/react";

const UseNormalLinks = (clientuserid?: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [normalLinks, setNormalLinks] = useAtom(normalLinksAtom);
  // const { data: session, status } = useSession();
  //get user from here

  const userid = clientuserid || "";

  useEffect(() => {
    GetNormalLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const GetNormalLinks = async () => {
    if(userid != "" || userid != null || userid != undefined || !userid){
      console.log("GetNormalLinks with userid: ", userid);
      await getNormalLinks({ userid })
        .then((res: any) => {
          setNormalLinks(res);
          setData(res);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
  
    }
  };

  return { data, loading };
};

export default UseNormalLinks;