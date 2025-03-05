"use client";

import { useUser } from "@clerk/nextjs";

const TestComponent = () => {
  const { user } = useUser();
  return <div>{JSON.stringify(user)}</div>;
};

export default TestComponent;
