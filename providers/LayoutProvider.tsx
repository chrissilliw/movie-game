"use client";

import { usePathname } from "next/navigation";
import { fetchUsers } from "@/app/(auth)/actions/fetchUsers";
import { useEffect, useState } from "react";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
}
