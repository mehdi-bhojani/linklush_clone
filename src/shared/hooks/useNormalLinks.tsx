"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getNormalLinks } from "@/actions/get.normal.links";
import { normalLinksAtom } from "@/lib/store";

const UseNormalLinks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [normalLinks, setNormalLinks] = useAtom(normalLinksAtom);

  //get user from here
  const userid  = '123';

  useEffect(() => {
    GetNormalLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const GetNormalLinks = async () => {
    await getNormalLinks(JSON.parse(JSON.stringify(userid)))
      .then((res: any) => {
        setData(res);
        setLoading(false);
        setNormalLinks(res);
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return { data, loading };
};

export default UseNormalLinks;