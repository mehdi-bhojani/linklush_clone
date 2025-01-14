import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return <Button onClick={() => signOut()}>Logout</Button>;
};

export default Logout;
