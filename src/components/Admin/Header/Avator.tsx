import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";

const UserAvatar = () => {
  const { data: session } = useSession();
  const imageSrc = session?.user?.image;
  const nameInitials = session?.user?.name
    ? session.user.name.slice(0, 2)
    : "NA";
  return (
    <Avatar>
      {imageSrc ? (
        <AvatarImage src={imageSrc} />
      ) : (
        <AvatarFallback>{nameInitials}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
