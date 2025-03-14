"use client";

import React, { useEffect, useState } from "react";
import { ICard } from "../models/ICard";
import { IColumn } from "../models/IColumn";
import Column from "./Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { HeroesData } from "../data/Heroes";
import { OscarsData } from "../data/OscarsWinners";
import { preconnect } from "react-dom";

interface BoardProps {
  setScores: React.Dispatch<
    React.SetStateAction<{ playerOne: number; playerTwo: number }>
  >;
  currentPlayer: "playerOne" | "playerTwo";
  switchTurn: () => void;
  category: "oscars" | "heroes";
}

const Board = ({
  setScores,
  currentPlayer,
  switchTurn,
  category,
}: BoardProps) => {
  const { COLUMNS, CARDS } = category === "oscars" ? OscarsData : HeroesData;
  const [cards, setCards] = useState<ICard[]>([]);
  const [randomCharacter, setRandomCharacter] = useState([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    const shuffledCharacters = shuffleArray(CARDS);
    setCards(shuffleArray(CARDS));
    console.log(cards);
  }, [category]);

  // Shuffle selected array before rendering 10 cards to game
  const shuffleArray = (Card: ICard[]) => {
    let shuffled = [...Card];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 10);
  };

  //Event when card is released
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const cardId = active.id as string; // Id on dragged card
    const newColumn = over.id as ICard["column"]; // updated Card column

    const draggedCard = cards.find((card) => card.id === cardId);
    if (!draggedCard) return;

    if (draggedCard.column === newColumn) return; // I card is dropped in same column, do nothing

    const isCorrect =
      (draggedCard.selection === "Oscarsvinnare" &&
        newColumn === "oscarsVinnare") ||
      (draggedCard.selection === "Utan Oscar" && newColumn === "utan_oscar") ||
      (draggedCard.selection === "marvel" && newColumn === "marvel") ||
      (draggedCard.selection === "dc" && newColumn === "dc");

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              column: newColumn,
              status: isCorrect ? "correct" : "incorrect",
            }
          : card
      )
    );

    // Giving 1 point for current player who drags card to correct column.
    if (isCorrect) {
      setScores((prevScores) => ({
        ...prevScores,
        [currentPlayer]: prevScores[currentPlayer] + 1,
      }));
    }

    switchTurn();
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
