import React from "react";
import { IGame } from "../models/IGame";
import Image from "next/image";

interface GameCardProps {
  game: IGame;
  onSelect: (game: IGame) => void;
}

const GameCard = ({ game, onSelect }: GameCardProps) => {
  return (
    <>
      <div onClick={() => onSelect(game)}>
        {/* <Image
          src={game.image}
          alt={game.title}
          width={200}
          height={150}
          className="rounded-lg"
        /> */}
        <div className="w-[200px] h-[150px] bg-amber-700"></div>
        <h2 className="text-xl font-bold mt-2">{game.title}</h2>
        <p>{game.description}</p>
      </div>
    </>
  );
};

export default GameCard;
