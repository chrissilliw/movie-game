"use client";

import RightPanel from "@/app/games/advanced-sort/RightPanel";
import Board from "@/app/games/sort-right/components/Board";
import LeftPanel from "@/app/games/sort-right/components/LeftPanel";
// import Board from "@/app/games/advanced-sort/Board";
// import RightPanel from "@/app/games/advanced-sort/RightPanel";
import React from "react";

const SortRight = () => {
  // const count = useCounterStore((state) => state.count);
  // const increment = useCounterStore((state) => state.increment);
  // const decrement = useCounterStore((state) => state.decrement);
  return (
    <>
      <div className="flex gap-8">
        <div className="w-[25%] bg-red-900">
          <LeftPanel />
        </div>
        <div className="w-[75%]">
          <Board />
        </div>
      </div>
    </>
  );
};

export default SortRight;
