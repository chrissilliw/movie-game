"use client";

import React, { useEffect, useState } from "react";
import { IHero } from "../models/IHero";
import { HERO_CHARACTERS } from "../../data/Heroes";
import Column from "./Column";

const Board = () => {
  const [cards, setCards] = useState<IHero[]>([]);
  const [randomCharacter, setRandomCharacter] = useState([]);

  // Shuffle selected array before rendering to game
  const shuffleArray = (HERO_CHARACTERS: IHero[]) => {
    let shuffled = [...HERO_CHARACTERS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  // Get characters from shuffled array
  const getRandomCharacters = (characters: IHero[]) => {
    const shuffledCaracters = shuffleArray(characters).slice(0, 10);
    console.log(shuffledCaracters);
    return shuffledCaracters;
  };

  useEffect(() => {
    const checkRandomCharacters = getRandomCharacters(HERO_CHARACTERS);
    setCards(checkRandomCharacters);
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Column
          title="Marvel"
          column="marvel"
          headingColor="text-yellow-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Line up"
          column="line-up"
          headingColor="text-yellow-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="DC"
          column="dc"
          headingColor="text-yellow-200"
          cards={cards}
          setCards={setCards}
        />
      </div>
    </>
  );
};

export default Board;
