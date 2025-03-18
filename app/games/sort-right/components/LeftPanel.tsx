import { IPlayer } from "@/app/models/IPlayer";
import { useGameStore } from "@/app/stores/gameStore";
import { Button } from "@/components/ui/button";
import React from "react";

interface LeftPanelProps {
  // playerOne: string;
  // playerTwo: string;
  // players: IPlayer[];
  // scores: { playerOne: number; playerTwo: number };
  // currentPlayerIndex: number;
  // switchTurn: () => void;
}

const LeftPanel = () => {
  const { players, currentPlayerIndex, scores } = useGameStore();

  const handleClick = () => {
    console.log("funka");
  };
  return (
    <div className="p-4 flex flex-col gap-5 rounded-lg">
      {players.map((player, index) => (
        <div
          key={player.id}
          className={`flex flex-col gap-3 items-center ${
            index === currentPlayerIndex ? "font-bold" : ""
          }`}
        >
          <h2 className="text-2xl">{player.name}</h2>
          <p>{scores[player.id] ?? 0}</p>
        </div>
      ))}
      {/* <div className="flex justify-center gap-10">
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
      </div> */}
      <Button onClick={handleClick}>Check Result</Button>
    </div>
  );
};

export default LeftPanel;
