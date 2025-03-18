"use client";

import RightPanel from "@/app/games/advanced-sort/RightPanel";
import Board from "@/app/games/sort-right/components/Board";
import LeftPanel from "@/app/games/sort-right/components/LeftPanel";
import { useGameStore } from "@/app/stores/gameStore";
// import Board from "@/app/games/advanced-sort/Board";
// import RightPanel from "@/app/games/advanced-sort/RightPanel";
import React, { useState } from "react";

const SortRight = () => {
  // const { players, currentPlayerIndex, switchTurn } = useGameStore();
  // const [joined, setJoined] = useState<boolean>(false);
  // const [playerOne, setPlayerOne] = useState<string>("");
  // const [playerTwo, setPlayerTwo] = useState<string>("");
  // const [players, setPlayers] = useState<string[]>([]);
  // const [currentPlayer, setCurrentPlayer] = useState<"playerOne" | "playerTwo">(
  //   "playerOne"
  // );
  // const [scores, setScores] = useState<{
  //   playerOne: number;
  //   playerTwo: number;
  // }>({ playerOne: 0, playerTwo: 0 });

  // const switchTurn = () => {
  //   setCurrentPlayer((prev) =>
  //     prev === "playerOne" ? "playerTwo" : "playerOne"
  //   );
  // };

  // const handleSetPlayer = () => {
  //   if (playerOne && playerTwo) {
  //     console.log("Spelare1: ", playerOne, " Spelare2: ", playerTwo);
  //     setJoined(true);
  //   }
  // };

  const category = "heroes";

  return (
    <>
      <div className="w-full flex gap-8 justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 mx-auto">
          <div className="w-full py-6 bg-red-900 rounded-3xl">
            <LeftPanel
            // players={players}
            // scores={scores}
            // currentPlayerIndex={currentPlayerIndex}
            // switchTurn={switchTurn}
            />
          </div>
          <div className="w-full">
            <Board
              // currentPlayerIndex={currentPlayerIndex}
              // switchTurn={switchTurn}
              // setScores={setScores}
              category={category}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SortRight;
