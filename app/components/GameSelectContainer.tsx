"use client";

import React, { useEffect, useState } from "react";
import GameGrid from "./GameGrid";
import { games } from "../data/gameList";
import { IGame } from "../models/IGame";

const GameSelectContainer = () => {
  const [selectedGame, setSelectedGame] = useState<IGame | null>(null);

  useEffect(() => {
    console.log(selectedGame?.component);
  }, [selectedGame]);
  return (
    <div className="w-full flex flex-col items-center">
      {!selectedGame ? (
        <>
          <h1>Välj ett spel</h1>
          <GameGrid onGameSelect={setSelectedGame} />
        </>
      ) : (
        <selectedGame.component />
      )}
    </div>
  );
};

export default GameSelectContainer;
