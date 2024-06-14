"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CheckoutSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 300);

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [router]);

  return <div>Payment success</div>;
};

export default CheckoutSuccess;
