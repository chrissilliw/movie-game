"use client";

import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import TestComponent from "./components/TestComponent";
import { useState } from "react";

export default async function Home() {
  const [joined, setJoined] = useState<boolean>(false);
  const [players, setPlayers] = useState<string[]>([""]);
  const user = await currentUser();
  const userFirstName = user?.firstName;
  return <></>;
}
