import React, { useState } from "react";
import { IHero } from "../xxxmodels/IHero";
import { Card } from "@/components/ui/card";
import CardObject from "./CardObject";
import DropIndicator from "./DropIndicator";

interface ColumnProps {
  title: string;
  column: string;
  headingColor: string;
  cards: IHero[];
  setCards: React.Dispatch<React.SetStateAction<IHero[]>>;
}

const Column = ({
  title,
  column,
  headingColor,
  cards,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState<boolean>(false);

  // Handle the initial event of dragging and stores the id of the card
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: IHero) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  // Handles event when dragging over a card and highlightIndicator
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  // Highlights indicator when hovering
  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();

    if (Array.isArray(indicators) && indicators.length === 0) {
      createEmptyIndicator();
    } else {
      clearHighlights(indicators);
      const el = getNearestIndicator(e, indicators);

      if (!el || !el.element) {
        console.warn("No valid indicator found");
        return;
      }
      el.element.style.opacity = "1";
    }
  };

  const createEmptyIndicator = () => {
    const indicatorContainer = document.querySelector(
      `[data-column="${column}"]`
    );

    if (indicatorContainer) {
      const newIndicator = document.createElement("div");
      newIndicator.classList.add(
        "my-0.5",
        "h-0.5",
        "w-full",
        "bg-violet-400",
        "opacity-0"
      );
      newIndicator.dataset.before = "-1";

      indicatorContainer.appendChild(newIndicator);
      newIndicator.style.opacity = "1";
    }
  };

  // Clear highlights indicators
  const clearHighlights = (els: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((indicators) => {
      indicators.style.opacity = "0";
    });
  };

  interface IndicatorResult {
    offset: number;
    element: HTMLElement | null;
  }

  // Get the nearest indivcator
  const getNearestIndicator = (
    e: React.DragEvent<HTMLDivElement>,
    indicators: HTMLElement[]
  ): IndicatorResult | null => {
    const DISTANCE_OFFSET = 50;

    if (indicators.length === 0) return null;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1] || null,
      }
    );
    return el;
  };

  const getIndicators = () => {
    const indicators = Array.from(
      document.querySelectorAll(`[data-column="${column}"]`)
    ) as HTMLElement[];

    return indicators;
  };

  // Handles evnt when leaving from dragging over a card
  const handleDragLeave = () => {
    setActive(false);
    const indicators = getIndicators();
    clearHighlights(indicators);
  };

  // Handles event when card is dropped
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setActive(false);
    const indicators = getIndicators();

    clearHighlights(indicators);

    const cardId = e.dataTransfer.getData("cardId"); //  Get cardId from event

    const result = getNearestIndicator(e, indicators); // Store the nearest Indicator

    if (!result || !result.element) {
      console.warn("No valid indicator found");
      return;
    }

    const { element } = result;

    const before = element.dataset.before || "-1";
    // console.log("what is before?:", before);

    if (before !== cardId) {
      let cardCopy = [...cards]; // copy the cards

      let cardToTransfer = cardCopy.find((c: IHero) => c.id === cardId);

      if (!cardToTransfer) return;

      cardToTransfer = { ...cardToTransfer, column };

      cardCopy = cardCopy.filter((c: IHero) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        cardCopy.push(cardToTransfer);
      } else {
        const insertAtIndex = cardCopy.findIndex(
          (el: IHero) => el.id === before
        );
        if (insertAtIndex === undefined) return;

        cardCopy.splice(insertAtIndex, 0, cardToTransfer);
      }
      setCards(cardCopy);
    }
  };

  const filteredCards = cards.filter((c) => c.column === column);
  return (
    <Card>
      <div className="mb-3 rounded-md flex items-center justify-between bg-green-800">
        <h3 className={`"font-medium ${headingColor}`}>{title}</h3>
        <span>{filteredCards.length}</span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`h-full w-full transition-colors ${
          !active ? "bg-yellow-500" : "bg-amber-700"
        }`}
      >
        {filteredCards.map((card) => (
          <CardObject
            key={card.id}
            {...card}
            card={card}
            handleDragStart={handleDragStart}
          />
        ))}
        <DropIndicator beforeId={"-1"} column={`${column}`} />
      </div>
    </Card>
  );
};

export default Column;
