"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";
import { videoLinksAtom } from "@/lib/store";
import { getVideolLinks } from "@/actions/get.video.links";

const UseVideoLinks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoLinks, setVideoLinks] = useAtom(videoLinksAtom);
  const { data: session, status } = useSession();
  //get user from here

  const userid = session?.user?.email || "";

  useEffect(() => {
    GetvideoLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const GetvideoLinks = async () => {
    if(userid != "" || userid != null || userid != undefined || !userid){
      console.log("GetvideoLinks with userid: ", userid);
      await getVideolLinks({ userid })
        .then((res: any) => {
          setVideoLinks(res);
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

export default UseVideoLinks;