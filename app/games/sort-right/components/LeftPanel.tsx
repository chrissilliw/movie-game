import { Button } from "@/components/ui/button";
import React from "react";

interface LeftPanelProps {
  playerOne: string;
  playerTwo: string;
  scores: { playerOne: number; playerTwo: number };
  currentPlayer: "playerOne" | "playerTwo";
}

const LeftPanel = ({
  playerOne,
  playerTwo,
  scores,
  currentPlayer,
}: LeftPanelProps) => {
  const handleClick = () => {
    console.log("funka");
  };
  return (
    <div className="p-4 flex flex-col gap-5 rounded-lg">
      <div className="flex justify-center gap-10">
        <div
          className={`flex flex-col gap-3 items-center ${
            currentPlayer === "playerOne" ? "font-bold" : ""
          }`}
        >
          <h2 className="text-2xl">{playerOne}</h2>
          <p className="text-3xl">{scores.playerOne}</p>
        </div>
        <div
          className={`flex flex-col gap-3 items-center ${
            currentPlayer === "playerTwo" ? "font-bold" : ""
          }`}
        >
          <h2 className="text-2xl">{playerTwo}</h2>
          <p className="text-3xl">{scores.playerTwo}</p>
        </div>
      </div>
      <Button onClick={handleClick}>Check Result</Button>
    </div>
  );
};

export default LeftPanel;
