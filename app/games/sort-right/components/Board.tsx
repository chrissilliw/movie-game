"use client";

import React, { useEffect, useState } from "react";
import { IHero } from "../../models/IHero";
import { HERO_CHARACTERS } from "../../../data/Heroes";
import { IColumn } from "../models/IColumn";
import Column from "./Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const Board = () => {
  const [cards, setCards] = useState<IHero[]>([]);
  const [randomCharacter, setRandomCharacter] = useState([]);

  const COLUMNS: IColumn[] = [
    { id: "marvel", title: "Marvel" },
    { id: "line_up", title: "Line up" },
    { id: "dc", title: "DC" },
  ];

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

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const cardId = active.id as string;
    const newColumn = over.id as IHero["column"];

    console.log("cardID: ", cardId);
    console.log("newStatus: ", newColumn);

    setCards(() =>
      cards.map((card) =>
        card.id === cardId ? { ...card, column: newColumn } : card
      )
    );
    // console.log(c);
  }

  return (
    <div className="flex gap-8">
      <DndContext onDragEnd={handleDragEnd}>
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            cards={cards.filter((card) => card.column === column.id)}
          />
        ))}
      </DndContext>
    </div>
  );
};

export default Board;
