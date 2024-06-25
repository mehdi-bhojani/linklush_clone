"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
// import { useSession } from "next-auth/react";
import { productLinksAtom} from "@/lib/store";
import { getProductlLinks } from "@/actions/get.product.links";

const UseProductLinks = (clientuserid?: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productLinks, setProductLinks] = useAtom(productLinksAtom);
  // const { data: session, status } = useSession();
  //get user from here

  const userid = clientuserid || "";

  useEffect(() => {
    GetProductLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userid]);

  const GetProductLinks = async () => {
    if(userid != "" || userid != null || userid != undefined || !userid){
      console.log("Get product Links with userid: ", userid);
      await getProductlLinks({ userid })
        .then((res: any) => {
          setProductLinks(res);
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

export default UseProductLinks;