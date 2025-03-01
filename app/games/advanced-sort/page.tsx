import React from "react";
import Board from "./Board";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="w-[25%] h-[200px]">
          <Button>Result</Button>
        </div>
        <div className="w-[75%]">
          <Board />
        </div>
      </div>
    </>
  );
};

export default page;
