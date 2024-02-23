"use client";

import { createQueryObject } from "@/utils/queryString";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Auth() {
  const router = useRouter();

  // useEffect(() => {
  if (typeof window !== "undefined") {
    const queryParams = window.location.href.replace("#", "?").split("?")[1];
    const params = createQueryObject(queryParams);
    // console.log("params", params);
    const storeParamsInCookie = async () => {
      try {
        await fetch("api/setSession", {
          method: "POST",
          body: JSON.stringify(params),
        });
        toast.success("You are now logged in!");
        router.push("/");
      } catch (e) {
        toast.error("Login failed. Please try again.");
        router.push("/login");
      }
    };
    storeParamsInCookie();
  }
  // }, []);

  return null;
}
