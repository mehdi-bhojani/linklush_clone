"use client";

import { findUserIdbyName } from "@/actions/find.username";
import UserProfile from "@/components/Admin/UserProfile/UserProfile";
import Loading from "@/components/Loading";
import UseAppearanceData from "@/shared/hooks/useAppearenceData";
import UseNormalLinks from "@/shared/hooks/useNormalLinks";
import UseProductLinks from "@/shared/hooks/useProductLinks";
import UseSocialLinks from "@/shared/hooks/useSocialLinks";
import UseVideoLinks from "@/shared/hooks/useVideoLinks";
import React, { useState, useEffect } from "react";

function Page({ params }: { params: { user: string } }) {
  const [userid, setUserid] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchuserid = async () => {
      const res = await findUserIdbyName(params.user);
      if (res === "error") {
        setUserid(null);
      } else {
        setUserid(res);
      }
      setLoading(false);
    };

    fetchuserid();
  }, [params.user]);

  const appearanceData = UseAppearanceData(userid);
  const normalLinksData = UseNormalLinks(userid);
  const socialLinksData = UseSocialLinks(userid);
  const videoLinksData = UseVideoLinks(userid);
  const productLinksData = UseProductLinks(userid);

  if (loading) {
    return <div>
        <Loading />
    </div>;
  }

  if (!userid) {
    return <div>No UserName Found</div>;
  }

  return (
    <div>
      <UserProfile
        appearance={appearanceData.data}
        normalLinks={normalLinksData.data}
        socialLinks={socialLinksData.data}
        videoLinks={videoLinksData.data}
        productLinks={productLinksData.data}
      />
    </div>
  );
}

export default Page;
