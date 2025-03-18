import React from "react";
import { games } from "../data/gameList";
import GameCard from "./GameCard";
import { IGame } from "../models/IGame";

interface GameGridProps {
  onGameSelect: (game: IGame) => void;
}

const GameGrid = ({ onGameSelect }: GameGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onSelect={onGameSelect} />
      ))}
    </div>
  );
};

export default GameGrid;
