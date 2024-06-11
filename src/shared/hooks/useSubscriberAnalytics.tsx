"use client";

import { subscribersAnalytics } from "@/action/susbcriber.analytics";
import { useEffect, useState } from "react";

const useSubscribersAnalytics = () => {
  const [subscribersData, setSubscribersData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SubscribersAnalytics();
  }, []);

  const SubscribersAnalytics = async () => {
    await subscribersAnalytics().then((res: any) => {
      setSubscribersData(res);
      setLoading(false);
    });
  };
  console.log(subscribersData);
  return { subscribersData, loading };
};

export default useSubscribersAnalytics;