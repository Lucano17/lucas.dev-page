"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NavBar } from "@/components/ui/navbar/NavBar";
import { BackNavBar } from "@/components/ui/navbar/BackNavBar";

export const MainNavBar = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/project") || pathname.startsWith("/certificate") ) {
    return <BackNavBar />;
  }
  return <NavBar />;
};
