import { Button } from "@/components/ui/button";
import React from "react";

const LeftPanel = () => {
  const handleClick = () => {
    console.log("funka");
  };
  return (
    <div className="flex p-4 gap-5">
      <Button onClick={handleClick}>Check Result</Button>
    </div>
  );
};

export default LeftPanel;
